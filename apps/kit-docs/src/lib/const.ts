
export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';

export const isClient = typeof document !== 'undefined';
export const isServer = !isClient;

export const siteURL = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : new URL('http://localhost:3000'); // Provide a default URL if the environment variable is undefined

export const siteOrigin = siteURL.origin;
export const safeWindow = isClient ? window : ({} as any);

if (typeof process.env.NEXT_PUBLIC_SITE_URL !== 'string') {
  throw new Error(`Please set the NEXT_PUBLIC_SITE_URL environment variable to your site's URL.`);
}

export const defaultMeta = {
  title: 'Atelierkit®',
  description: `Atelierkit® is a design system for building modern websites and applications.`,
  ogImage: `${siteOrigin}/static/img/og.jpg`,
  twitter: {
    handle: '@atlrdsgn',
    site: 'atlrdsgn',
  },
};

export const atelierLog = `

 █████╗█████████████████╗    ███████████████╗   
██╔══██╚══██╔══██╔════██║    ████╔════██╔══██╗  
███████║  ██║  █████╗ ██║    ███████╗ ██████╔╝  
██╔══██║  ██║  ██╔══╝ ██║    ████╔══╝ ██╔══██╗  
██║  ██║  ██║  █████████████████████████║  ████╗
╚═╝  ╚═╝  ╚═╝  ╚══════╚══════╚═╚══════╚═╝  ╚═╚═╝
                                               
   From atelier. https://atlrdsgn.com
`;
