'use client';

import React from 'react';

function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className='mx-auto max-w-screen-lg items-center justify-center'>
      {children}
    </section>
  );
}

export default AppWrapper;
