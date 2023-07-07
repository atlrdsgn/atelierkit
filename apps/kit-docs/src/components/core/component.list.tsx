'use client';

import React from 'react';
import Link from 'next/link';
import { Container, Button, Text } from '@atlrdsgn/kit';
import { siteConfig } from 'config/site.config';
import { cn } from '@/lib/utils';

function ComponentList() {
  return (
    <>
      <Container
        width='medium'
        align='start'>
        {siteConfig.sections.map((section, i) => {
          return (
            <Container
              key={i}
              width='medium'
              align='start'>
              <div
                // key={i}
                className={cn('my-3 w-full items-start justify-start p-4')}>
                <Text
                  // key={i}
                  size='md'
                  weight='bold'>
                  {section.title}
                </Text>
                <Button
                  // key={i}
                  size='sm'
                  className='btn'>
                  <Link
                    // key={i}
                    href={section.href}>
                    Go to example
                  </Link>
                </Button>
              </div>
            </Container>
          );
        })}
      </Container>
    </>
  );
}

export default ComponentList;
