import React from 'react';
import { HomePage, GlobalFooter, PageLayout } from '@/components/core';

const AppIndex = () => {
  return (
    <>
      <PageLayout type={'Standard'}>
        <HomePage />
        <GlobalFooter />
      </PageLayout>
    </>
  );
};

export default AppIndex;
