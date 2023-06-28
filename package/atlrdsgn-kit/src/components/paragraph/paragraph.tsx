import React from 'react';
import * as css from './para.css';
import clsx from 'clsx';

import type {
  ParagraphVariantProps,
  //..
  ParagraphSizeProps,
  ParagraphColorProps,
  ParagraphWeightProps,
  ParagraphAlignProps,
  ParagraphFontProps,
} from './para.css';

interface BASE_PARAGRAPH_PROPS {
  children?: React.ReactNode;
  className?: string;

  size?: ParagraphSizeProps;
  color?: ParagraphColorProps;
  weight?: ParagraphWeightProps;
  align?: ParagraphAlignProps;
  font?: ParagraphFontProps;
}

type PARAGRAPH_PRIMITIVE_PROPS = BASE_PARAGRAPH_PROPS &
  ParagraphVariantProps &
  React.HTMLAttributes<HTMLParagraphElement>;
export type ParagraphProps = PARAGRAPH_PRIMITIVE_PROPS;
export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, className, size, color, weight, align, font, ...rest }, ref) => {
    return (
      <p
        ref={ref}
        className={clsx(className, css.paragraph({ size, color, weight, align, font }))}
        {...rest}>
        {children}
      </p>
    );
  },
);

Paragraph.displayName = 'Paragraph';
