import React from 'react';
import { inline } from './inline.css';
import clsx from 'clsx';

import type { InlineFontOptions, InlineVariantProps } from './inline.css';

interface BASE_INLINE_PROPS {
  children?: React.ReactNode;
  className?: string;
  font?: InlineFontOptions;
  hover?: InlineVariantProps;
  strong?: InlineVariantProps;
}

export type InlineProps = BASE_INLINE_PROPS &
  InlineVariantProps &
  React.HTMLAttributes<HTMLSpanElement>;
export const Inline = React.forwardRef<HTMLSpanElement, InlineProps>(
  (
    { children, className, font = 'inherit', hover = false, strong = false, ...props },
    forwardedRef,
  ) => {
    return (
      <span
        ref={forwardedRef}
        className={clsx(className, inline({ font, hover, strong }))}
        {...props}>
        {children}
      </span>
    );
  },
);

Inline.displayName = 'SpanInline';
