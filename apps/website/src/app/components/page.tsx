import React from 'react';
import { PageLayout } from '@/components/core';

import ComponentsPage from '@/components/core/components.page';
import {
  DemoButton,
  DemoChip,
  DemoStack,
  DemoSwitch,
} from '@/components/react-kit';

export default function ComponentsIndex() {
  return (
    <>
      <PageLayout type={'Production'}>
        <ComponentsPage>
          <DemoButton />
          <DemoChip />
          <DemoSwitch />
          <DemoStack />
        </ComponentsPage>
      </PageLayout>
    </>
  );
}
