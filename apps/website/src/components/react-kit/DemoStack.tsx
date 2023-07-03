


'use client';
import React from 'react';
import { Stack } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoStack = () => {
  return (
    <ComponentWrapper>
      <Stack
        as='div'
        direction='vertical'>
        <p>Stack Test</p>
        <p>Stack test</p>
      </Stack>
    </ComponentWrapper>
  );
};
