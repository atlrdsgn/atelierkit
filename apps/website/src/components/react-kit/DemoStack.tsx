


'use client';
import React from 'react';
import { Stack } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoStack = () => {
  return (
    <ComponentWrapper>
      <Stack
        as='div'
        align='center'
        direction='vertical'>
        <p>Stack Test</p>
        <p>Stack test</p>
      </Stack>

      <Stack
        as='div'
        direction='horizontal'
        /**
         *
         * need to fix the gap property here,
         */
        space='8px 8px'
        align='stretch'
        justify='flex-start'>
        <p>Stack Test</p>
        <p>Stack test</p>
      </Stack>
    </ComponentWrapper>
  );
};
