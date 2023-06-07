'use client';

import React from 'react';
import content from '../../../web.config.json';
import { Container, Space, Text } from '@atlrdsgn/kit';

function HomePage({ children }: { children: React.ReactNode }) {
  const { index } = content;

  return (
    <Container
      width={'small'}
      align={'center'}>
      <Space size={'xxl'} />
      <Text
        align='center'
        color='slate10'
        size='5xl'
        weight='semibold'
        font='inter'>
        {index.introduction}
      </Text>
      <Space size='sm' />
      <Text
        color='slate7'
        size='md'
        align='center'
        weight='medium'
        font='inter'>
        {index.subtitle}
      </Text>

      <Space size='xxl' />
      <Text
        color='slate5'
        size='xs'
        align='center'
        weight='normal'
        font='inter'>
        Copyright © 2023 atlrdsgn®. All rights reserved.
      </Text>
      {children}
    </Container>
  );
}

export default HomePage;