'use client';
import React from 'react';
import { Section, Text } from '@atlrdsgn/kit';

export const DemoSection = () => {
  return (
    <Section size='vw'>
      <Section
        size='sm'
        style={{ backgroundColor: '#DDDDDD', marginBottom: '10px' }}>
        <Text
          size='sm'
          weight='medium'
          color='gray300'
          align='center'>
          section = sm
        </Text>
      </Section>

      <Section
        size='md'
        style={{ backgroundColor: '#DDDDDD', marginBottom: '10px' }}>
        <Text
          size='sm'
          weight='medium'
          color='gray300'
          align='center'>
          section = md
        </Text>
      </Section>

      <Section
        size='lg'
        style={{ backgroundColor: '#DDDDDD', marginBottom: '10px' }}>
        <Text
          size='sm'
          weight='medium'
          color='gray300'
          align='center'>
          section = lg
        </Text>
      </Section>

      <Section
        size='vw'
        style={{ backgroundColor: '#DDDDDD', marginBottom: '10px' }}>
        <Text
          size='sm'
          weight='medium'
          color='gray300'
          align='center'>
          section = vw
        </Text>
      </Section>
    </Section>
  );
};
