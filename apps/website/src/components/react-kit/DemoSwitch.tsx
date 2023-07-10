'use client';
import React from 'react';
import { Switch, Flex } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoSwitch = () => {
  return (
    <ComponentWrapper>
      <Flex
        direction={'row'}
        align={'start'}
        justify={'start'}
        gap={'xs'}
        wrap={'wrap'}
        style={{ marginBottom: '20px', marginTop: '20px' }}>
        <Switch size='small'>
          <Switch.Toggle />
        </Switch>
      </Flex>
    </ComponentWrapper>
  );
};
