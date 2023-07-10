'use client';
import React from 'react';
import { Section, Rect, Grid, Text } from '@atlrdsgn/kit';

export const DemoGrid = () => {
  return (
    <Section size='vw'>
      <Grid
        gridItemMinWidth='8em'
        gap='4px 4px'>
        <Rect
          backgroundColor='slate8'
          width='auto'
          style={{ minWidth: '50px', minHeight: '50px' }}>
          <Text color='slate1'>Grid</Text>
        </Rect>
        <Rect
          backgroundColor='slate6'
          width='auto'
          style={{ minWidth: '50px', minHeight: '50px' }}>
          <Text color='slate1'>Grid</Text>
        </Rect>
      </Grid>
    </Section>
  );
};
