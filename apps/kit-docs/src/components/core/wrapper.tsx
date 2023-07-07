'use client';

import React from 'react';

function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className='mx-auto w-full max-w-screen-lg items-center justify-center'>
      {children}
    </main>
  );
}

export default AppWrapper;
