'use client';

import React from 'react';
import clsx from 'clsx';
import { Container, Section, Space } from '@atlrdsgn/kit';

function ComponentWrapper({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <main>
      <Section>
        <Space size='xxl' />
        <Container
          className={clsx('component-wrapper', className)}
          width='medium'
          align='center'>
          {children}
        </Container>
      </Section>
    </main>
  );
}

export default ComponentWrapper;