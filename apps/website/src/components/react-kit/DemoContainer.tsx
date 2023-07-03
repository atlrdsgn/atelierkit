'use client';
import React from 'react';
import { Section, Container, Text, Flex } from '@atlrdsgn/kit';

export const DemoContainer = () => {
  return (
    <Section size='vw'>
      <Container
        width='small'
        style={{ borderBottom: '1px solid #DDDDDD', marginBottom: '10px' }}>
        <Flex
          direction='row'
          justify='between'
          style={{ width: '100%' }}>
          <Text
            align='left'
            size='xs'
            weight='semibold'>
            container = small
          </Text>
          <Text
            align='right'
            size='xs'
            weight='semibold'
            font='mono'>
            430px
          </Text>
        </Flex>
      </Container>

      <Container
        width='medium'
        style={{ borderBottom: '1px solid #DDDDDD', marginBottom: '10px' }}>
        <Flex
          direction='row'
          justify='between'
          style={{ width: '100%' }}>
          <Text
            align='left'
            size='xs'
            weight='semibold'>
            container = medium
          </Text>
          <Text
            align='right'
            size='xs'
            weight='semibold'
            font='mono'>
            720px
          </Text>
        </Flex>
      </Container>

      <Container
        width='large'
        style={{ borderBottom: '1px solid #DDDDDD', marginBottom: '10px' }}>
        <Flex
          direction='row'
          justify='between'
          style={{ width: '100%' }}>
          <Text
            align='left'
            size='xs'
            weight='semibold'>
            container = large
          </Text>
          <Text
            align='right'
            size='xs'
            weight='semibold'
            font='mono'>
            1145px
          </Text>
        </Flex>
      </Container>

      <Container
        width='xlarge'
        style={{ borderBottom: '1px solid #DDDDDD', marginBottom: '10px' }}>
        <Flex
          direction='row'
          justify='between'
          style={{ width: '100%' }}>
          <Text
            align='left'
            size='xs'
            weight='semibold'>
            container = xlarge
          </Text>
          <Text
            align='right'
            size='xs'
            weight='semibold'
            font='mono'>
            1440px
          </Text>
        </Flex>
      </Container>

      <Container
        width='full'
        style={{ borderBottom: '1px solid #DDDDDD', marginBottom: '10px' }}>
        <Flex
          direction='row'
          justify='between'
          style={{ width: '100%' }}>
          <Text
            align='left'
            size='xs'
            weight='semibold'>
            container = full
          </Text>
          <Text
            align='right'
            size='xs'
            weight='semibold'
            font='mono'>
            100vw
          </Text>
        </Flex>
      </Container>
    </Section>
  );
};
