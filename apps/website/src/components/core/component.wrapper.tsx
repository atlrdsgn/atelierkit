'use client';

import React from 'react';

import { Container, Section, Space } from '@atlrdsgn/kit';

function ComponentWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <Section>
      <Space size='xxl' />
      <Container
        style={{ border: '1px solid #6A7280', borderRadius: '12px' }}
        className={'component-wrapper'}
        width='medium'
        align='center'>
        {children}
      </Container>
    </Section>
  );
}

export default ComponentWrapper;
