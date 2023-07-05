import './index.css';
import '@atlrdsgn/kit/css';

import ThemeProvider from '@/components/theme-provider';
import { siteURL } from '@/lib/const';
import type { Metadata } from 'next';
import AppWrapper from '@/components/core/wrapper';

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.atlrdsgn.com/'),
  title: 'Atelier® Kit Documentation',
  description: 'Atelier® Kit Documentation',
  manifest: `${siteURL}/manifest.webmanifest`,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      suppressHydrationWarning>
      <body style={{ opacity: 1 }}>
        <ThemeProvider>
          <main className='column flex'>
            <AppWrapper>{children}</AppWrapper>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
