'use client';

import * as React from 'react';
import { KitProvider } from '@atlrdsgn/kit';
import type { KitProviderProps } from '@atlrdsgn/kit';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

type ThemeProps = KitProviderProps & ThemeProviderProps;

export function ThemeProvider({ children, ...props }: ThemeProps) {
  return (
    <NextThemesProvider {...props}>
      <KitProvider {...props}>{children}</KitProvider>
    </NextThemesProvider>
  );
}
