'use client';
import React from 'react';
import { Input } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoInput = () => {
  return (
    <ComponentWrapper>
      <Input.Flex>
        <Input.Label>First Name</Input.Label>
        <Input
          size='small'
          variant='slate'
          placeholder='First Name'
        />
      </Input.Flex>
    </ComponentWrapper>
  );
};
