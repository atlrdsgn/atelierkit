import './index.css';

import { siteConfig } from 'config/site.config';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import AppWrapper from '@/components/core/wrapper';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      suppressHydrationWarning>
      <body style={{ opacity: 1 }}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem>
          <div className='relative flex min-h-screen flex-col'>
            <SiteHeader />
            <AppWrapper>{children}</AppWrapper>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
