import React from 'react';

import type { PageProps } from '@/ts/page';

export const PageLayout = ({ children, type = 'Production' }: PageProps) => {
  if (type === 'Article') {
    return <>{children}</>;
  }

  if (type === 'Standard') {
    return (
      <>
        <main className='main-content'>{children}</main>
      </>
    );
  }

  return <>{children}</>;
};
