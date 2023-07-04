'use client';

import React from 'react';
import { KitProvider } from '@atlrdsgn/kit';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <KitProvider>
        <>{children}</>
      </KitProvider>
    </>
  );
};

export default ThemeProvider;
