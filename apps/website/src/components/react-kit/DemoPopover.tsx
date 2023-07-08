'use client';
import React from 'react';
import { Popover, Flex } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoPopover = () => {
  return (
    <ComponentWrapper>
      <Flex
        direction={'row'}
        align={'center'}
        justify={'center'}
        gap={'xs'}>
        <Popover>
          <Popover.Trigger>Popover Trigger</Popover.Trigger>
          <Popover.Content>Popover Content</Popover.Content>
        </Popover>
      </Flex>
    </ComponentWrapper>
  );
};
