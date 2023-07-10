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
  DemoGrid,
} from '@/components/react-kit';
import { DemoInput } from '@/components/react-kit/DemoInput';

export default function ComponentsIndex() {
  return (
    <>
      <PageLayout type={'Standard'}>
        <ComponentsPage>
          <DemoSection />
          <DemoContainer />
          <DemoGrid />
          <DemoButton />
          <DemoChip />
          <DemoSwitch />
          <DemoStack />
          <DemoAvi />
          <DemoInline />
          <DemoInput />
          <DemoSelect />
          <DemoPopover />
        </ComponentsPage>
      </PageLayout>
    </>
  );
}
