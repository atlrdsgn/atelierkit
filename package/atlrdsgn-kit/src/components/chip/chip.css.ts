import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { component_shadows } from '../../lib/properties';
import { kit } from '../../lib';

const BORDER_RADIUS_XSMALL = '7px';
const BORDER_RADIUS_SMALL = '8px';
const BORDER_RADIUS_MEDIUM = '12px';

const SIZE_MAP = {
  xsmall: {
    fontSize: kit.font.size.MINI,
    lineHeight: kit.font.lineheight.MINI,
    padding: '3px 6px',
    borderRadius: BORDER_RADIUS_XSMALL,
  },
  small: {
    fontSize: kit.font.size.XS,
    lineHeight: kit.font.lineheight.XS,
    padding: '3px 6px',
    borderRadius: BORDER_RADIUS_SMALL,
  },
  medium: {
    fontSize: kit.font.size.SM,
    lineHeight: kit.font.size.MD,
    padding: '4px 8px',
    borderRadius: BORDER_RADIUS_MEDIUM,
  },
} as const;

const SHAPE_MAP = {
  rounded: {
    borderRadius: `${BORDER_RADIUS_MEDIUM} !important`,
  },
  pill: {
    borderRadius: '50px !important',
  },
} as const;

const VARIANT_COLOR_MAP = {
  slate: {
    backgroundColor: kit.color.slate1,
    border: `1px solid ${kit.color.slate3}`,
    color: kit.color.slate5,
    boxShadow: component_shadows.primary.initial,
    onHover: {
      backgroundColor: kit.color.slate1,
      border: `1px solid ${kit.color.slate4}`,
      color: kit.color.slate5,
      boxShadow: component_shadows.primary.hover,
    },
    onFocus: {
      boxShadow: component_shadows.primary.focus,
    },
  },
  hyper: {
    backgroundColor: kit.color.hyper6,
    border: `1px solid ${kit.color.hyper7}`,
    color: kit.color.hyper1,
    boxShadow: component_shadows.hyper.initial,
    onHover: {
      backgroundColor: kit.color.hyper5,
      border: `1px solid ${kit.color.hyper6}`,
      color: kit.color.hyper1,
      boxShadow: component_shadows.hyper.hover,
    },
    onFocus: {
      boxShadow: component_shadows.hyper.focus,
    },
  },
} as const;

/** --------------------------------------------------- */

const size = styleVariants(
  SIZE_MAP,
  ({ fontSize, lineHeight, padding, borderRadius }) => ({
    fontSize,
    lineHeight,
    padding,
    borderRadius,
  }),
);

const shape = styleVariants(SHAPE_MAP, ({ borderRadius }) => ({
  borderRadius,
}));

const variant = styleVariants(VARIANT_COLOR_MAP, (variant) => ({
  backgroundColor: variant.backgroundColor,
  border: variant.border,
  color: variant.color,
  boxShadow: variant.boxShadow,

  ':hover': {
    backgroundColor: variant.onHover.backgroundColor,
    border: variant.onHover.border,
    color: variant.onHover.color,
    boxShadow: variant.onHover.boxShadow,
  },

  ':focus': {
    boxShadow: variant.onFocus.boxShadow,
  },
}));

/** --------------------------------------------------- */

const CHIP_ROOT = style({
  userSelect: 'none',
  textDecoration: 'none',
  outline: 'none',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  whiteSpace: 'nowrap',
  display: 'flex',
  flexDirection: 'row',
  flexShrink: 0,
  margin: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: 'auto',
  textAlign: 'center',
  verticalAlign: 'middle',
  fontFamily: kit.font.family.system,
  fontWeight: kit.font.weight.MEDIUM,
  fontVariantNumeric: 'tabular-nums',
  gap: '4px',

  '@media': {},

  selectors: {
    '&::before': {
      boxSizing: 'border-box',
      content: '""',
    },
    '&::after': {
      boxSizing: 'border-box',
      content: '""',
    },
  },
});

export type ChipSizeProps = keyof typeof size;
export type ChipShapeProps = keyof typeof shape;
export type ChipVProps = keyof typeof variant;
export type ChipVariantProps = RecipeVariants<typeof chip>;
export const chip = recipe({
  base: CHIP_ROOT,
  variants: { size, shape, variant },
  defaultVariants: {
    size: 'small',
    shape: 'pill',
    variant: 'slate',
  },
});
