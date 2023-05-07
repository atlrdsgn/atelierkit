import React from 'react';
import { PageLayout } from '@/components/core';
import { Canvas, Container, PassLink, Text } from '@atlrdsgn/kit';
import content from '../../web.config.json';

const AppIndex = () => {
  const { index, footer } = content;

  return (
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
              {index.introduction}
            </Text>
            <Text
              size={'sm'}
              font={'mono'}
              weight={'medium'}
              color={'slate5'}>
              {index.subtitle}
            </Text>
          </Container>

          <footer>
            <Container
              width={'medium'}
              align={'center'}>
              <Text
                size={'sm'}
                font={'mono'}
                weight={'medium'}
                color={'slate5'}>
                {footer.copyright} ––{' '}
                <PassLink
                  href='./components'
                  target='_self'>
                  {footer.componentlink}
                </PassLink>
              </Text>
            </Container>
          </footer>
        </Canvas>
      </PageLayout>
    </>
  );
};

export default AppIndex;
