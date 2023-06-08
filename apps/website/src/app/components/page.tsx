import React from 'react';
import { PageLayout } from '@/components/core';

import ComponentsPage from '@/components/core/components.page';

const ComponentsIndex = () => {
  return (
    <>
      <PageLayout type={'Production'}>
        <ComponentsPage></ComponentsPage>
      </PageLayout>
    </>
  );
};

export default ComponentsIndex;