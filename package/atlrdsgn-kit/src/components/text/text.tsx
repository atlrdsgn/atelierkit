import React from 'react';
import { text } from './text.css';
import clsx from 'clsx';

import type {
  TextFontVariants,
  TextSizeVariants,
  TextAlignVariants,
  TextColorVariants,
  TextWeightVariants,
  TextCasingVariants,
  TextVariantProps,
} from './text.css';

interface BASE_TEXT_PROPS {
  children?: React.ReactNode;
  className?: string;
  font?: TextFontVariants;
  size?: TextSizeVariants;
  align?: TextAlignVariants;
  color?: TextColorVariants;
  weight?: TextWeightVariants;
  casing?: TextCasingVariants;
}

export type TextProps = BASE_TEXT_PROPS &
  TextVariantProps &
  React.HTMLAttributes<HTMLParagraphElement>;
export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      children,
      className,
      font = 'inter',
      size = 'md',
      align = 'left',
      color = 'slate5',
      weight = 'medium',
      casing,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <p
        ref={forwardedRef}
        className={clsx(className, text({ font, size, align, color, weight, casing }))}
        {...props}>
        {children}
      </p>
    );
  },
);

Text.displayName = 'Text';
