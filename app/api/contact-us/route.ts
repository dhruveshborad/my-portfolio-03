import { NextRequest, NextResponse } from "next/server";

function isValidEmail(email: string): boolean {
  // Basic RFC 5322 email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


export async function POST(req: NextRequest) {
  try {
    const { email, firstname, lastname, message, subject } =
      await req.json();
    const validEmail = isValidEmail(email);

    if (!validEmail) {
      return NextResponse.json(
        { message: "Please enter a valid email address!", success: false },
        { status: 400 }
      );
    }
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY || "",
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: firstname,
          LASTNAME: lastname,
          MESSAGE: message,
          SUBJECT: subject,
        },
        listIds: [7],
      }),
    });
    const data = await response.json();

    if (!response.ok) {
      console.error("Error:", data);
      return NextResponse.json(
        { message: data?.message, success: false },
        { status: response?.status ?? 400 }
      );
    }

    return NextResponse.json(
      { message: "Your message is successfully sended!", success: true },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", success: false },
      { status: 500 }
    );
  }
}
