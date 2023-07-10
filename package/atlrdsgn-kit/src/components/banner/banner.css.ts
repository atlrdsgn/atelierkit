import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { calc } from '@vanilla-extract/css-utils';
import { kit } from '../../lib';

const SM_HEIGHT = '26px';
const MD_HEIGHT = '32px';
const LG_HEIGHT = '40px';
const GUTTER_WIDTH = '28px';

const SIZE_MAP = {
  small: {
    height: SM_HEIGHT,
    fontSize: kit.font.size.XS,
    lineHeight: kit.font.lineheight.XS,
  },
  medium: {
    height: MD_HEIGHT,
    fontSize: kit.font.size.SM,
    lineHeight: kit.font.lineheight.SM,
  },
  large: {
    height: LG_HEIGHT,
    fontSize: kit.font.size.MD,
    lineHeight: kit.font.lineheight.MD,
  },
} as const;

const COLOR_VARIANTS = {
  one: {
    backgroundColor: kit.color.slate2,
    color: kit.color.slate10,
    borderColor: kit.color.slate4,
  },
  two: {
    backgroundColor: kit.color.sapphire3,
    color: kit.color.sapphire10,
    borderColor: kit.color.sapphire5,
  },
  three: {
    backgroundColor: kit.color.hyper3,
    color: kit.color.hyper10,
    borderColor: kit.color.hyper5,
  },
} as const;

const colorKeys = Object.keys(COLOR_VARIANTS) as Array<
  keyof typeof COLOR_VARIANTS
>;
const sizeKeys = Object.keys(SIZE_MAP) as Array<keyof typeof SIZE_MAP>;

/** ----------------- variants ---------------------- */

const size = styleVariants(SIZE_MAP, (value) => ({
  height: value.height,
  fontSize: value.fontSize,
  lineHeight: value.lineHeight,
}));

const variant = styleVariants(COLOR_VARIANTS, (value) => ({
  backgroundColor: value.backgroundColor,
  color: value.color,
  borderColor: value.borderColor,
}));

const applyBorder = {
  true: [
    ...style({
      border: '1px solid',
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: '1px',
      borderColor: 'inherit',
    }),
  ],
};

const border = styleVariants(applyBorder, (value) => value);

const borderKeys = Object.keys(applyBorder) as Array<keyof typeof applyBorder>;

/** --------------------------------------------------- */

const BASE_BANNER = style({
  width: calc.subtract('100vw', GUTTER_WIDTH),
  maxWidth: '100%',

  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  padding: 'auto',
  margin: 'auto',

  selectors: {
    '&::before': {
      boxSizing: 'border-box',
    },
    '&::after': {
      boxSizing: 'border-box',
    },
  },
});

/** ------------------------------------------------------- */
export type BannerSize = typeof sizeKeys;
export type BannerBorderBoolean = typeof borderKeys;
export type BannerVariant = typeof colorKeys;
export type BannerVariants = RecipeVariants<typeof banner>;
export const banner = recipe({
  base: BASE_BANNER,
  variants: {
    size,
    border,
    variant,
  },

  defaultVariants: {
    size: 'medium',
    border: false,
    variant: 'one',
  },
});
