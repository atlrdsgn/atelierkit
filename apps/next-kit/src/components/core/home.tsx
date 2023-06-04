'use client';

import React from 'react';
import content from '../../../web.config.json';
import { Canvas, Space, Text } from '@atlrdsgn/kit';

function HomePage({ children }: { children: React.ReactNode }) {
  const { index } = content;

  return (
    <Canvas>
      <Text
        color='slate10'
        size='4xl'
        weight='heavy'
        font='inter'>
        {index.introduction}
      </Text>

      <Space size='sm' />
      {children}
    </Canvas>
  );
}

export default HomePage;