'use client';

import React from 'react';
// import { ThemeProvider as NextThemesProvider } from 'next-themes';
// import type { ThemeProviderProps } from 'next-themes/dist/types';

import { KitProvider } from '@atlrdsgn/kit';
import type { KitProviderProps } from '@atlrdsgn/kit';

export function ThemeProvider({ children, ...props }: KitProviderProps) {
  return (
    <KitProvider defaultTheme='light'>
      <>{children}</>
    </KitProvider>
  );
}
