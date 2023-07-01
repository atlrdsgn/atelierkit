'use client';

import React from 'react';
import content from '../../../web.config.json';
import { Container, Section, Text, Heading, Space } from '@atlrdsgn/kit';

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
            color='volt7'
            align='center'
            size='lg'
            weight='medium'
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
