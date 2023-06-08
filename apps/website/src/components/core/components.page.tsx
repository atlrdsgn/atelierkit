'use client';

import React from 'react';
import content from '../../../web.config.json';
import { Container, Section, Text } from '@atlrdsgn/kit';
import { Heading } from '@atlrdsgn/kit';
import { Space } from '@atlrdsgn/kit';

function ComponentsPage({ children }: { children?: React.ReactNode }) {
  const { components } = content;

  return (
    <main>
      <Section>
        <Space size='xxl' />
        <Container
          width='small'
          align='center'>
          <Heading
            align='center'
            size='H1'
            weight='bold'
            font='sf'>
            {components.introduction}
          </Heading>

          <Text
            color='volt5'
            align='center'
            size='xxl'
            weight='normal'
            font='inter'>
            {components.subtitle}
          </Text>
        </Container>
      </Section>

      {children}
    </main>
  );
}

export default ComponentsPage;