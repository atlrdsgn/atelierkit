import React from 'react';

import Logo from './src/components/kit.logo';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (
    <span>
      <Logo />
    </span>
  ),
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Copyright © 2023 atlrdsgn®, All rights reserved.',
  },
  primaryHue: 146,
};

export default config;
