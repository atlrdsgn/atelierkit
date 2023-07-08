'use client';
import React from 'react';
import { Select, Flex } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

const options = [
  {
    type: 'Icon',
    value: 'Icon',
  },
  {
    type: 'Accordion',
    value: 'Accordion',
  },
  {
    type: 'Button',
    value: 'Button',
  },
  {
    type: 'Checkbox',
    value: 'Checkbox',
  },
  {
    type: 'Container',
    value: 'Container',
  },
  {
    type: 'Switch',
    value: 'Switch',
  },
];

export const DemoSelect = () => {
  return (
    <ComponentWrapper>
      <Flex
        direction={'row'}
        align={'start'}
        justify={'start'}
        gap={'xs'}
        wrap={'wrap'}
        style={{ marginBottom: '20px', marginTop: '20px' }}>
        <>
          <Select style={{ minWidth: '200px', margin: 'auto', alignItems: 'center' }}>
            <Select.Trigger>
              <Select.Value placeholder={'Select an option..'} />
              <Select.Icon />
            </Select.Trigger>

            <Select.Content sideOffset={5}>
              <Select.Group>
                <Select.Label>Primitives</Select.Label>

                {/* <!--- Map the values to the options --> */}
                {options.map((options) => (
                  <Select.Item
                    key={options.type}
                    value={options.value}>
                    {options.value}
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Content>
          </Select>
        </>
      </Flex>
    </ComponentWrapper>
  );
};
