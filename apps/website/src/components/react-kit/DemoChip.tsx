
'use client';
import React from 'react';
import { Chip, Flex } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoChip = () => {
  return (
    <ComponentWrapper>
      <Flex
        direction={'row'}
        align={'center'}
        justify={'between'}
        gap={'xs'}
        wrap={'wrap'}
        // style={{ maxWidth: '400px' }}
      >
        <Chip
          size={'small'}
          variant={'hyper'}
          shape={'pill'}>
          Small Chip
        </Chip>
        <Chip
          size={'small'}
          variant={'slate'}
          shape={'pill'}
          color={'volt5'}>
          Small Chip
        </Chip>
        <Chip
          size={'medium'}
          shape={'pill'}>
          Medium Chip
        </Chip>
        <Chip
          size={'medium'}
          variant={'hyper'}
          shape={'pill'}>
          Medium Chip
        </Chip>
      </Flex>
    </ComponentWrapper>
  );
};
