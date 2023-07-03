/** @format */

import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { kit } from '../../lib';

const SIZE_MAP = {
  sm: {
    paddingTop: kit.space.GPX,
    paddingBottom: kit.space.GPX,
    paddingLeft: kit.space.ZERO,
    paddingRight: kit.space.ZERO,
  },
  md: {
    paddingTop: kit.space.MPX,
    paddingBottom: kit.space.MPX,
    paddingLeft: kit.space.ZERO,
    paddingRight: kit.space.ZERO,
  },
  lg: {
    paddingTop: kit.space.SPX,
    paddingBottom: kit.space.SPX,
    paddingLeft: kit.space.ZERO,
    paddingRight: kit.space.ZERO,
  },
  vw: {
    paddingTop: kit.space.KPX,
    paddingBottom: kit.space.KPX,
    paddingLeft: kit.space.ZERO,
    paddingRight: kit.space.ZERO,
  },
} as const;

const size = {
  ...styleVariants(SIZE_MAP, (value) => ({
    paddingTop: value.paddingTop,
    paddingBottom: value.paddingBottom,
    paddingLeft: value.paddingLeft,
    paddingRight: value.paddingRight,
  })),
};

/** ------------------------------------------------------- */

export const SEC_ROOT = style({
  boxSizing: 'border-box',
  display: 'inline-block',
  position: 'relative',
  backgroundColor: 'transparent',
  height: 'auto',
  width: '100%',
  maxWidth: '100vw',
  margin: 0,
});

/** ------------------------------------------------------- */

export type SectionSize = keyof typeof size;
export type SectionVariantProps = RecipeVariants<typeof section>;
export const section = recipe({
  base: SEC_ROOT,
  variants: { size },
  defaultVariants: {
    // ..
    size: 'vw',
  },
});
