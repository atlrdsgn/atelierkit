/** @format */

import React from 'react'
import {PageLayout} from '@/components/core'
import {Canvas, Text} from '@atlrdsgn/kit'

const AppIndex = () => (
  <>
    <PageLayout type={'Production'}>
      <Canvas>
        <Text size={'lg'} weight={'bold'} color={'slate4'}>
          ATELIER.KIT®
        </Text>
        <Text size={'sm'} font={'mono'} weight={'medium'} color={'slate5'}>
          welcome to next.kit
        </Text>
      </Canvas>
    </PageLayout>
  </>
)

export default AppIndex
