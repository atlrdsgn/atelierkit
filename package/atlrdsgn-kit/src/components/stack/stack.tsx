import * as React from 'react';

import {
  OptionalResponsiveObject,
  OptionalResponsiveValue,
  mapResponsiveValue,
} from '../../lib';
import { ReactNodeNoStrings } from '../_shared/types';

import { Rect, type DivProps } from '../rect';

export type Direction = 'horizontal' | 'vertical';
export type Wrap = 1 | 0;

const wrapToFlexWrapLookup = {
  1: 'wrap',
  0: 'nowrap',
} as const;

const directionToFlexDirectionLookup = {
  horizontal: 'row',
  vertical: 'column',
} as const;

export const directionToFlexDirection = (
  direction: OptionalResponsiveValue<Direction> | undefined,
) =>
  direction
    ? mapResponsiveValue(direction, (value) => directionToFlexDirectionLookup[value])
    : undefined;

export const wrapToFlexWrap = (
  wrap: OptionalResponsiveObject<true | false> | undefined,
) =>
  wrap
    ? typeof wrap === 'boolean'
      ? wrapToFlexWrapLookup[1]
      : mapResponsiveValue(
          wrap as any,
          // Hack to convert boolean to number since Sprinkles does not support
          // boolean responsive keys
          (value) => wrapToFlexWrapLookup[+value as Wrap],
        )
    : undefined;

/** ------------------------------------------- */

export const validStackComponents = [
  'a',
  'article',
  'div',
  'form',
  'header',
  'label',
  'li',
  'main',
  'section',
  'span',
] as const;

type Props = {
  as?: (typeof validStackComponents)[number];
  align?: DivProps['alignItems'];
  children: ReactNodeNoStrings;
  direction?: OptionalResponsiveValue<Direction>;
  flex?: DivProps['flex'];
  justify?: DivProps['justifyContent'];
  space?: DivProps['gap'];
  wrap?: OptionalResponsiveObject<true | false>;
};

export const Stack = ({
  as = 'div',
  align,
  children,
  justify,
  flex,
  direction = 'vertical',
  space = '4px 4px',
  wrap,
}: React.PropsWithChildren<Props>) => {
  const flexDirection = directionToFlexDirection(direction);
  const flexWrap = wrapToFlexWrap(wrap);
  return (
    <Rect
      alignItems={align}
      as={as}
      display='flex'
      flex={flex}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      gap={space}
      justifyContent={justify}>
      {children}
    </Rect>
  );
};
