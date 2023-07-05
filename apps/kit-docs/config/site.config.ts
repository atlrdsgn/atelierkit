import { Theme } from '@code-hike/lighter';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Kit Docs',
  description: 'rooted in subtractive design.',
  highlighter: {
    theme: 'monokai' as Theme,
    lineNumbers: true,
  },
  mainNav: [
    {
      title: 'Overview',
      href: '/',
    },
  ],
  sections: [
    {
      title: 'Headings',
      href: '/headings',
    },
    {
      title: 'Paragraph',
      href: '/paragraph',
    },
    {
      title: 'Blockquote',
      href: '/blockquote',
    },
    {
      title: 'List',
      href: '/list',
    },
    {
      title: 'Tabs',
      href: '/tabs',
    },
    {
      title: 'Codeblock',
      href: '/codeblock',
    },
  ],
};
