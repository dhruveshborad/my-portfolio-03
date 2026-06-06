import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import { Toaster } from './components/ui/toaster'
import { TooltipProvider } from './components/ui/tooltip'
import { AnimatedCursor } from './components/AnimatedCursor'
import { CommandPalette } from './components/CommandPalette'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Dhruvesh Borad | Senior Full Stack Developer',
  description: 'Senior Full Stack Developer specializing in Next.js, React, TypeScript, AI Applications, FinTech Platforms, and Enterprise SaaS solutions.',
  keywords: ['Full Stack Developer', 'React.js', 'Next.js', 'TypeScript', 'AI Applications', 'FinTech', 'Portfolio', 'Dhruvesh Borad'],
  authors: [{ name: 'Dhruvesh Borad' }],
  creator: 'Dhruvesh Borad',
  metadataBase: new URL('https://dhruvesh-borad.vercel.app/'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dhruvesh-borad.vercel.app/',
    title: 'Dhruvesh Borad | Senior Full Stack Developer',
    description: 'Senior Full Stack Developer specializing in Next.js, React, TypeScript, AI Applications, FinTech Platforms, and Enterprise SaaS solutions.',
    siteName: 'Dhruvesh Borad Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhruvesh Borad | Senior Full Stack Developer',
    description: 'Senior Full Stack Developer specializing in Next.js, React, TypeScript, AI Applications, FinTech Platforms, and Enterprise SaaS solutions.',
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dhruvesh Borad",
    "url": "https://dhruvesh-borad.vercel.app/",
    "jobTitle": "Senior Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "HexaScal Technologies"
    },
    "sameAs": [
      "https://www.linkedin.com/in/dhruveshkumar-borad-680505214",
      "https://github.com/dhruveshborad",
      "https://x.com/DhruveshBo53453"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${GeistSans.variable} font-sans antialiased`}>
        <ThemeProvider>
          <TooltipProvider>
            <AnimatedCursor />
            <Toaster />
            <CommandPalette />
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
