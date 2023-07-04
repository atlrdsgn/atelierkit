'use client';

import React from 'react';
import Link from 'next/link';
import { Button, Section, Text } from '@atlrdsgn/kit';
import { siteConfig } from 'config/site.config';

function HomePage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Section size='lg'>
        <div>
          {siteConfig.sections.map((section, i) => {
            return (
              <>
                <Text
                  key={i}
                  size='md'
                  weight='bold'>
                  {section.title}
                </Text>

                <Button
                  key={i}
                  size='sm'
                  className='btn'>
                  <Link
                    key={i}
                    href={section.href}>
                    Go to example
                  </Link>
                </Button>
              </>
            );
          })}
        </div>
      </Section>
      {children}
    </>
  );
}

export default HomePage;
