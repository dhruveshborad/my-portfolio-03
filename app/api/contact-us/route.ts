import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function isValidEmail(email: string): boolean {
  // Basic RFC 5322 email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const { email, firstname, lastname, message, subject } = await req.json();
    const validEmail = isValidEmail(email);

    if (!validEmail) {
      return NextResponse.json(
        { message: "Please enter a valid email address!", success: false },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter (Gmail as default)
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can change this to another provider if needed
      auth: {
        user: process.env.SMTP_EMAIL || "dhruveshborad2003@gmail.com",
        pass: process.env.SMTP_PASSWORD || "", // You MUST use an App Password if using Gmail
      },
    });

    const mailOptions = {
      from: `"${firstname} ${lastname} (Portfolio)" <${process.env.SMTP_EMAIL || "dhruveshborad2003@gmail.com"}>`,
      to: "dhruveshborad2003@gmail.com",
      replyTo: email, // This allows you to click "Reply" and send it directly to the user
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2>New message from your portfolio website</h2>
          <p><strong>Name:</strong> ${firstname} ${lastname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 8px; border: 1px solid #eee;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Your message was successfully sent!", success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json(
      { message: "Failed to send email. Please try again later.", success: false },
      { status: 500 }
    );
  }
}
