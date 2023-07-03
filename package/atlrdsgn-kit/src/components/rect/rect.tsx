import React, { createElement, forwardRef } from 'react';
import clsx, { ClassValue } from 'clsx';
import { atoms, sprinkles, type Atoms } from '../../lib';

type HTMLProperties = Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'as' | 'className' | 'color' | 'height' | 'width'
>;

type Props = Atoms &
  HTMLProperties & {
    as?: React.ElementType;
    className?: ClassValue;
    reset?: string; // Update this line
  };

export const Rect = forwardRef<HTMLElement, Props>(
  ({ as = 'div', className, ...props }: Props, ref) => {
    const atomProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};

    for (const key in props) {
      if (sprinkles.properties.has(key as keyof Omit<Atoms, 'reset'>)) {
        atomProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    const atomicClasses = atoms({
      reset: typeof as === 'string' ? (as as Atoms['reset']) : 'div',

      ...atomProps,
    });

    return createElement(as, {
      className: clsx(atomicClasses, className),
      ...nativeProps,
      ref,
    });
  },
);

export type DivProps = Parameters<typeof Rect>[0];

Rect.displayName = 'RectBox';
