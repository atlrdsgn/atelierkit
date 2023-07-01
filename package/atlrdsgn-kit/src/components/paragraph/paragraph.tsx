import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { paragraph } from './para.css';
import type {
  ParagraphAlignProps,
  ParagraphColorProps,
  ParagraphFontProps,
  ParagraphSizeProps,
  ParagraphVariantProps,
  ParagraphWeightProps,
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
export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, className, size, color, weight, align, font, ...rest }, ref) => {
    return (
      <p
        ref={ref}
        className={clsx(className, paragraph({ size, color, weight, align, font }))}
        {...rest}>
        {children}
      </p>
    );
  },
);

Paragraph.displayName = 'Paragraph';
