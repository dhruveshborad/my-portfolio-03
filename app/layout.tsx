import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import { Toaster } from './components/ui/toaster'
import { TooltipProvider } from './components/ui/tooltip'
import { AnimatedCursor } from './components/AnimatedCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dhruvesh Borad - Frontend Developer Portfolio',
  description: 'Personal portfolio website showcasing 5+ years of experience in React.js, Next.js, and modern web development.',
  keywords: ['Frontend Developer', 'React.js', 'Next.js', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Dhruvesh Borad' }],
  creator: 'Dhruvesh Borad',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexchen.dev',
    title: 'Dhruvesh Borad - Frontend Developer Portfolio',
    description: 'Personal portfolio website showcasing 5+ years of experience in React.js, Next.js, and modern web development.',
    siteName: 'Dhruvesh Borad Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhruvesh Borad - Frontend Developer Portfolio',
    description: 'Personal portfolio website showcasing 5+ years of experience in React.js, Next.js, and modern web development.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <TooltipProvider>
            <AnimatedCursor />
            <Toaster />
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
