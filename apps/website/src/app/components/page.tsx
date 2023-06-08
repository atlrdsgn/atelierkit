import React from 'react';
import { PageLayout } from '@/components/core';

import ComponentsPage from '@/components/core/components.page';
import { DemoButton, DemoChip } from '@/components/react-kit';

const ComponentsIndex = () => {
  return (
    <>
      <PageLayout type={'Production'}>
        <ComponentsPage>
          <DemoButton />
          <DemoChip />
        </ComponentsPage>
      </PageLayout>
    </>
  );
};

export default ComponentsIndex;