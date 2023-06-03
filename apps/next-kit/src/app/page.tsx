import React from 'react';
import { PageLayout } from '@/components/core';
import HomePage from '@/components/core/home';
import { DemoButton } from '@/components/react-kit';

const AppIndex = () => {
  return (
    <>
      <PageLayout type={'Production'}>
        <HomePage>
          <DemoButton />
        </HomePage>
      </PageLayout>
    </>
  );
};

export default AppIndex;
