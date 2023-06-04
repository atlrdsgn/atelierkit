import React from 'react';
import * as CSS from './heading.css';
import clsx from 'clsx';

import type {
  HeadingVariantProps,
  //..
  HeadingFontFamily,
  HeadingSize,
  HeadingWeight,
  HeadingAlignment,
} from './heading.css';

interface BASE_HEADING_PROPS {
  className?: string;

  font?: HeadingFontFamily;
  size?: HeadingSize;
  weight?: HeadingWeight;
  align?: HeadingAlignment;
}

type HeadingPrimitiveProps = BASE_HEADING_PROPS &
  HeadingVariantProps &
  React.HTMLAttributes<HTMLHeadingElement>;

export type HeadingProps = HeadingPrimitiveProps;
export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      font = 'system',
      size = 'H1',
      weight = 'semibold',
      align = 'left',
      ...rest
    },
    // ..
    ref,
  ) => {
    return (
      <h1
        {...rest}
        ref={ref}
        className={clsx(className, CSS.heading({ font, size, weight, align }))}
      />
    );
  },
);

Heading.displayName = 'Heading';
