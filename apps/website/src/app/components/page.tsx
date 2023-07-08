import React from 'react';
import { PageLayout } from '@/components/core';

import ComponentsPage from '@/components/core/components.page';
import {
  DemoAvi,
  DemoButton,
  DemoChip,
  DemoContainer,
  DemoSection,
  DemoStack,
  DemoSwitch,
  DemoInline,
  DemoSelect,
  DemoPopover,
} from '@/components/react-kit';

export default function ComponentsIndex() {
  return (
    <>
      <PageLayout type={'Standard'}>
        <ComponentsPage>
          <DemoSection />
          <DemoContainer />
          <DemoButton />
          <DemoChip />
          <DemoSwitch />
          <DemoStack />
          <DemoAvi />
          <DemoInline />
          <DemoSelect />
          <DemoPopover />
        </ComponentsPage>
      </PageLayout>
    </>
  );
}
