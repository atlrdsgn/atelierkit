import React from 'react';
import Logo from '../components/kit.logo';
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
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Copyright © 2023 atlrdsgn®, All rights reserved.',
  },
  primaryHue: 146,
};

export default config;
