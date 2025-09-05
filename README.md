# Alex Chen - Portfolio Website

A modern, responsive portfolio website built with Next.js 15 and Tailwind CSS. Features a beautiful cosmic background animation, smooth scrolling, and a fully interactive design.

## 🚀 Features

- **Modern Design**: Beautiful cosmic background with animated gradients
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Framer Motion animations throughout the site
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Theme**: next-themes for dark/light mode

## 📁 Project Structure

```
app/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── ...            # Page-specific components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── data/               # Portfolio data
├── globals.css         # Global styles
├── layout.tsx          # Root layout
└── page.tsx           # Home page
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information
Update your personal information in `app/data/portfolio.ts`:
- Name, title, and description
- Contact information
- Social media links
- Profile image

### Projects
Add your projects to the `projects` array in the same file:
- Project title and description
- Technologies used
- Demo and GitHub links
- Project images

### Skills
Modify the `skills` array to showcase your expertise:
- Skill categories
- Individual skills with proficiency levels
- Custom icons

### Experience
Update the `experiences` array with your work history:
- Job titles and companies
- Time periods
- Descriptions and technologies

## 🌟 Sections

1. **Hero Section**: Introduction with animated profile image
2. **About Section**: Personal description and highlights
3. **Projects Section**: Showcase of your work
4. **Skills Section**: Technical skills with progress bars
5. **Experience Section**: Work history and education timeline
6. **Contact Section**: Contact form and social links

## 🎯 Key Features

- **Cosmic Background**: Animated gradient background with floating effects
- **Smooth Scrolling**: Navigation with smooth scroll between sections
- **Interactive Elements**: Hover effects and animations
- **Contact Form**: Functional contact form with validation
- **Download CV**: Button to download your resume
- **Social Links**: Direct links to professional profiles

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

The project is ready for deployment on platforms like:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any static hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and Tailwind CSS
