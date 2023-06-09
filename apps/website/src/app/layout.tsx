import '@/scss/index.scss';
import '@atlrdsgn/kit/css';

import ThemeProvider from '@/components/theme-provider';
import { siteURL } from '@/lib/const';
import type { Metadata } from 'next';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      suppressHydrationWarning>
      <body style={{ opacity: 1 }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.chvndler.ch/'),
  title: 'AtelierKit™ by atlrdsgn®',
  description: 'An ever– expanding ecosystem of React components.',
  manifest: `${siteURL}/manifest.webmanifest`,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: 'AtelierKit™ by atlrdsgn®',
    description: 'An ever– expanding ecosystem of React components.',
    url: siteURL,
    siteName: 'AtelierKit™',
    images: [
      {
        url: `${siteURL}/static/img/og.jpg`,
        width: 1800,
        height: 945,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F9F0F0' },
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
  ],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/shortcut-icon.png',
    apple: '/static/favicon/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AteilerKit™ by atlrdsgn®',
    description: 'Personal site.',
    creator: '@chvndler',
    images: ['/static/img/og.jpg'],
  },
  category: 'technology',
  verification: {},
  other: {
    custom: 'none',
  },
};
