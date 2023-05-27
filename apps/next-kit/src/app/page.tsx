import React from 'react';
import { PageLayout } from '@/components/core';
import content from '../../web.config.json';
import HomePage from '@/components/core/home';

const AppIndex = () => {
  const { index } = content;

  return (
    <>
      <PageLayout type={'Production'}>
        <HomePage>
          <p>{index.introduction}</p>
        </HomePage>
      </PageLayout>
    </>
  );
};

export default AppIndex;
