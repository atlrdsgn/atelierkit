import React from 'react';
import { slugifyWithCounter } from '@sindresorhus/slugify';

/**
 * Source: https://github.com/dylanmeivis/nextjs13-starter-markdoc
 */

type HeadingProps = {
  children: any;
  level: number;
  id: string;
  className?: string;
};

export default function Heading({ children, level, id }: HeadingProps) {
  const headerId = id || slugifyWithCounter()(children);

  let headingClass = 'text-base font-semibold';

  switch (level) {
    case 1:
      headingClass = 'text-4xl font-extrabold lg:text-5xl';
      break;
    case 2:
      headingClass = 'border-b pb-2 text-3xl font-semibold transition-colors first:mt-0';
      break;
    case 3:
      headingClass = 'text-2xl font-semibold';
      break;
    case 4:
      headingClass = 'text-xl font-semibold';
      break;
    case 5:
      headingClass = 'text-lg font-semibold';
      break;
  }

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag
      id={headerId}
      className={headingClass}>
      {children}
    </HeadingTag>
  );
}

export function BoldHeading({ id = '', level = 1, children, className }: HeadingProps) {
  return React.createElement(
    `h${level}`,
    {
      id,
      className: ['heading', className].filter(Boolean).join(' '),
    },
    children,
  );
}
