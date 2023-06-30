import React from 'react';
import * as css from './flex.css';

import type {
  FlexDirectionProps,
  FlexAlignProps,
  FlexJustifyProps,
  FlexGapProps,
  // ..
  FlexVariantProps,
} from './flex.css';

interface BASE_FLEX_PROPS {
  children?: React.ReactNode;
  className?: string;

  direction?: FlexDirectionProps;
  align?: FlexAlignProps;
  justify?: FlexJustifyProps;
  gap?: FlexGapProps;
}

type FlexAttributeProps = BASE_FLEX_PROPS & React.HTMLAttributes<HTMLDivElement>;
export type FlexProps = FlexAttributeProps & FlexVariantProps;
export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      children,
      direction = 'row',
      align = 'center',
      justify = 'center',
      gap = 'sm',

      ...props
      //..
    },
    forwardedRef,
  ) => {
    return (
      <div
        {...props}
        ref={forwardedRef}
        /**
         *
         * @see if this produces what we want.
         */
        className={css.flex({ direction, align, justify, gap })}>
        {children}
      </div>
    );
  },
);

Flex.displayName = 'Flex';
