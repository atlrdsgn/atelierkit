import React from 'react';
import { PageLayout } from '@/components/core';
import { Button, Canvas, Container, Text } from '@atlrdsgn/kit';

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
          <Button
            href={'https://google.com'}
            target='_blank'
            variant={'hyper'}
            size={'xs'}>
            Extra Small Button
          </Button>
        </Container>
      </Canvas>
    </PageLayout>
  </>
);

export default AppIndex;
