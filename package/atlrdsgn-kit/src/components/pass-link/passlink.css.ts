/** @format */

import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { kit } from '../../lib';

const sizeOptions = {
  xs: { fontSize: kit.font.size.XS, lineHeight: kit.font.lineheight.SM },
  sm: { fontSize: kit.font.size.SM, lineHeight: kit.font.lineheight.MD },
  md: { fontSize: kit.font.size.MD, lineHeight: kit.font.lineheight.LG },
  lg: { fontSize: kit.font.size.LG, lineHeight: kit.font.lineheight.XL },
  xl: { fontSize: kit.font.size.XL, lineHeight: kit.font.lineheight.XXL },
  xxl: { fontSize: kit.font.size.XXL, lineHeight: kit.font.lineheight.XXL },
};

const colorOps = {
  inherit: {
    color: kit.color.current,
    hov: { color: kit.color.current },
    act: { color: kit.color.current },
    // ..
  },
  primary: {
    color: kit.color.hyper4,
    hov: { color: kit.color.hyper6 },
    act: { color: kit.color.hyper6 },
    // ..
  },
  secondary: {
    color: kit.color.slate4,
    hov: { color: kit.color.slate5 },
    act: { color: kit.color.slate6 },
  },
} as const;

const fontOps = {
  inherit: { fontFamily: kit.font.family.system },
  system: { fontFamily: kit.font.family.system },
  mono: { fontFamily: kit.font.family.mono },
} as const;

export const size = {
  ...styleVariants(sizeOptions, (value) => ({
    fontSize: value.fontSize,
    lineHeight: value.lineHeight,
  })),
};

export const variant = {
  ...styleVariants(colorOps, (value) => ({
    color: value.color,
    ':hover': {
      color: value.hov.color,
    },
    ':active': {
      color: value.act.color,
    },
  })),
};

export const font = {
  ...styleVariants(fontOps, (value) => ({
    fontFamily: value.fontFamily,
  })),
};

/** ------------------------------------------------------ */

export const base = style({
  all: 'unset',
  textDecoration: 'none',
  backgroundColor: 'transparent',
  background: 'none',
  margin: 0,
  padding: 0,
  // ...
  fontWeight: kit.font.weight.REGULAR,
  color: kit.color.current,
  // ...
  transition: 'all 0.2s ease-in-out',

  ':hover': {
    cursor: 'pointer',
  },

  ':focus': {
    outline: 'none',
    textDecoration: 'underline',
  },

  ':disabled': {
    color: kit.color.slate3,
  },
});

/** -------------------------------------------------------- */

export type LinkSizeProps = keyof typeof size;
export type LinkColorProps = keyof typeof variant;
export type LinkFontProps = keyof typeof font;
export type LinkVariantProps = RecipeVariants<typeof link>;
export const link = recipe({
  base: [base],
  variants: { size, variant, font },
  defaultVariants: { size: 'sm', variant: 'primary' },
});
