import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Aryan Sagar Sunku | Software Engineer',
  description:
    'Software engineer with experience in industrial IoT, networking, full-stack development, and AI-enabled product work. Open to internships and full-time roles in Germany.',
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: '/',
  },
  generator: 'next.js',
  keywords: [
    'Aryan Sagar Sunku',
    'Software Engineer Germany',
    'Full Stack Engineer',
    'AI Engineer',
    'IoT Engineer',
    'Portfolio',
    'Internship Germany',
  ],
  openGraph: {
    title: 'Aryan Sagar Sunku | Software Engineer',
    description: 'Building dependable software that solves real-world problems across full-stack, AI, and infrastructure domains.',
    type: 'website',
    locale: 'en_US',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aryan Sagar Sunku | Software Engineer',
    description: 'Portfolio of a software engineer focused on real-world systems, product delivery, and AI-enabled development.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f7f8' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0c' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  var d = t ? t === 'dark' : true;
                  document.documentElement.classList.toggle('dark', d);
                  document.documentElement.classList.toggle('light', !d);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
