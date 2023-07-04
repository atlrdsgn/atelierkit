import './index.css';
import '@atlrdsgn/kit/css';

import { SiteHeader } from '@/components/site-header';
import { ThemeProvider } from '@/components/theme-provider';
import { siteURL } from '@/lib/const';
import type { Metadata } from 'next';

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
          <main className='flex column'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
