'use client';

import React from 'react';
import content from '../../../web.config.json';
import { Container, Section, Text } from '@atlrdsgn/kit';
import { Heading } from '@atlrdsgn/kit';
import { Space } from '@atlrdsgn/kit';
import { DemoParagraph, DemoTypography } from '../react-kit';

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
            size='H3'
            weight='semibold'
            font='sf'>
            {components.introduction}
          </Heading>
          <Text
            color='volt7'
            align='center'
            size='xl'
            weight='medium'
            font='inter'>
            {components.subtitle}
          </Text>
        </Container>
      </Section>

      <Section>
        <DemoTypography />
      </Section>

      <Space size='xxl' />

      <Section>
        <DemoParagraph />
      </Section>

      {children}
    </main>
  );
}

export default ComponentsPage;
