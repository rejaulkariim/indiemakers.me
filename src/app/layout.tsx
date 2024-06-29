import AdSense from '@/components/shared/AdSense'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { Toaster } from '@/components/ui/toaster'
import { siteConfig } from '@/config/site'
import '@/styles/globals.css'
import { cn } from '@/utils/utils'
import { ClerkProvider } from '@clerk/nextjs'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.title}`
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Server Actions',
    'Radix UI',
    'UI Shadcn'
  ],
  authors: [
    {
      name: 'Rejaul Karim',
      url: 'https://github.com/rejaulkariim'
    }
  ],
  creator: 'Rejaul Karim',
  // themeColor: [
  //   { media: '(prefers-color-scheme: light)', color: 'white' },
  //   { media: '(prefers-color-scheme: dark)', color: 'black' },
  // ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
    siteName: siteConfig.name
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
    creator: '@rejaul'
  }
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <AdSense pId='2997499274877237' />
      </head>

      <ClerkProvider>
        <body className={cn('antialiased', GeistSans.className)}>
          <ThemeProvider attribute='class' defaultTheme='light'>
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  )
}
