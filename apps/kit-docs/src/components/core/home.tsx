'use client';

import Link from 'next/link';
import { Button, Section, Text } from '@atlrdsgn/kit';
import { siteConfig } from 'config/site.config';

export const HomePage = () => {
  return (
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
  );
};
