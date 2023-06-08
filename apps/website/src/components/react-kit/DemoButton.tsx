
'use client';
import React from 'react';
import { Button } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoButton = () => {
  return (
    <>
      <ComponentWrapper>
        <Button
          size='sm'
          variant='slate'
          href={'/components'}
          target='_self'>
          View components
        </Button>
      </ComponentWrapper>
    </>
  );
};


