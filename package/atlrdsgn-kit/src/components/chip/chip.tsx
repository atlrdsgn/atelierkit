import React from 'react';
import clsx from 'clsx';
import { chip } from './chip.css';
import type { ChipVariantProps } from './chip.css';

export type ChipProps = ChipVariantProps &
  React.HTMLAttributes<HTMLSpanElement> & { className?: string };

export const Chip: React.FC<ChipProps> = ({
  children,
  className,
  size = 'small',
  shape = 'pill',
  variant = 'slate',
  ...rest
}) => (
  <span
    {...rest}
    className={clsx(className, chip({ size, shape, variant }))}>
    {children}
  </span>
);

Chip.displayName = 'Chip';
