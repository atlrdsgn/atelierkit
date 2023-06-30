import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { kit } from '../../lib';

export const avi_img = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: 'inherit',
});

export const fall_back = style({
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'inherit',
  color: kit.color.slate9,
  fontFamily: kit.font.family.mono,
  fontSize: kit.font.size.SM,
  fontWeight: kit.font.weight.MEDIUM,
  lineHeight: kit.font.lineheight.SM,
});

/** --------------------------------------- */

const AVI_SIZE_XS = '32px';
const AVI_SIZE_SM = '48px';
const AVI_SIZE_MD = '64px';
const AVI_SIZE_LG = '70px';
const AVI_CIRCLE = '999px';
const AVI_SQUARE = '0px';
const AVI_ROUNDED = '8px';

const AVI_SIZES = {
  xs: {
    width: AVI_SIZE_XS,
    height: AVI_SIZE_XS,
    border: '2px solid',
  },
  sm: {
    width: AVI_SIZE_SM,
    height: AVI_SIZE_SM,
    border: '2px solid',
  },
  md: {
    width: AVI_SIZE_MD,
    height: AVI_SIZE_MD,
    border: '2px solid',
  },
  lg: {
    width: AVI_SIZE_LG,
    height: AVI_SIZE_LG,
    border: '2px solid',
  },
} as const;

const AVI_SHAPE = {
  circle: {
    borderRadius: AVI_CIRCLE,
  },
  square: {
    borderRadius: AVI_SQUARE,
  },
  rounded: {
    borderRadius: AVI_ROUNDED,
  },
} as const;

export const size = {
  ...styleVariants(AVI_SIZES, (size) => ({
    width: size.width,
    height: size.height,
    border: size.border,
  })),
} as const;

export const shape = {
  ...styleVariants(AVI_SHAPE, (shape) => ({
    borderRadius: shape.borderRadius,
  })),
} as const;

/** --------------------------------------- */

const AVI_BASE = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  backgroundColor: kit.color.slate3,
  /**
   *
   * add box-shadow to the base.
   */
});

/** -------------------------------------------- */

export type AviSize = keyof typeof size;
export type AviShape = keyof typeof shape;
export type AviVariantProps = RecipeVariants<typeof avi>;
export const avi = recipe({
  base: [AVI_BASE],
  variants: { size, shape },
  defaultVariants: { size: 'sm', shape: 'rounded' },
});
