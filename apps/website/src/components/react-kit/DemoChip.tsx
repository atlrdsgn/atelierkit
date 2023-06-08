
'use client';
import React from 'react';
import { Chip } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoChip = () => {
  return (
    <ComponentWrapper>
      <Chip
        size={'medium'}
        variant={'slate'}
        shape={'pill'}>
        Small Chip
      </Chip>
    </ComponentWrapper>
  );
};