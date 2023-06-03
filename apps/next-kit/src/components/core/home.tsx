'use client';

import React from 'react';
import content from '../../../web.config.json';
import { Canvas, Text } from '@atlrdsgn/kit';

function HomePage({ children }: { children: React.ReactNode }) {
  const { index } = content;

  return (
    <Canvas>
      <Text
        size='sm'
        weight='bold'
        font='inter'>
        {index.introduction}
      </Text>
      {children}
    </Canvas>
  );
}

export default HomePage;