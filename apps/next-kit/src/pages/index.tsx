import React from 'react';
import { PageLayout } from '@/components/core';
import { Canvas, Container, Space, Text } from '@atlrdsgn/kit';
import { DemoButton } from '@/components/react-kit';

const AppIndex = () => (
  <>
    <PageLayout type={'Production'}>
      <Canvas>
        <Container
          width={'medium'}
          align={'center'}>
          <Text
            size={'lg'}
            weight={'bold'}
            color={'slate4'}>
            ATELIER.KIT®
          </Text>
          <Text
            size={'sm'}
            font={'mono'}
            weight={'medium'}
            color={'slate5'}>
            welcome to next.kit
          </Text>
          <Space size={'xl'} />
          <DemoButton />
        </Container>
      </Canvas>
    </PageLayout>
  </>
);

export default AppIndex;
