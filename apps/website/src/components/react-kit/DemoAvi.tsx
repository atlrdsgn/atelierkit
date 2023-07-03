
'use client';
import React from 'react';
import { Stack, Avi } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

const aviUrl = 'https://avatars.githubusercontent.com/u/70621588?v=4';

export const DemoAvi = () => {
  return (
    <ComponentWrapper>
      <Stack direction='horizontal'>
        <Avi
          size='sm'
          shape='circle'>
          <Avi.Image src={aviUrl} />
          <Avi.Fallback>CH</Avi.Fallback>
        </Avi>
      </Stack>
    </ComponentWrapper>
  );
};
