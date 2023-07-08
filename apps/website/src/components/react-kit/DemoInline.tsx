'use client';
import React from 'react';
import { Inline, Text } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoInline = () => {
  return (
    <ComponentWrapper>
      <Text
        size='sm'
        weight='normal'
        align='center'>
        Lorem velit id culpa consectetur ullamco id commodo sunt elit. Eiusmod anim eu et
        occaecat et aliquip elit.{' '}
        <Inline
          font='mono'
          strong>
          Veniam magna
        </Inline>{' '}
        labore deserunt quis laborum excepteur occaecat. Ullamco officia labore ipsum.
      </Text>
    </ComponentWrapper>
  );
};
