'use client';

import React from 'react';

import { Container, Section, Space } from '@atlrdsgn/kit';

function ComponentWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <Section>
      <Space size='lg' />
      <Container
        className='component-wrapper'
        width='medium'
        align='center'>
        {children}
      </Container>
      <Space size='lg' />
    </Section>
  );
}

export default ComponentWrapper;
