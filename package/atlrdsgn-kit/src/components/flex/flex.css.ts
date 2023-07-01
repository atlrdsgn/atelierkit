import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { kit } from '../../lib';

const DIR_MAP = {
  row: { flexDirection: 'row' },
  column: { flexDirection: 'column' },
  rowReverse: { flexDirection: 'row-reverse' },
  columnReverse: { flexDirection: 'column-reverse' },
} as const;

const ALIGN_MAP = {
  start: { alignItems: 'flex-start' },
  center: { alignItems: 'center' },
  end: { alignItems: 'flex-end' },
  stretch: { alignItems: 'stretch' },
  baseline: { alignItems: 'baseline' },
} as const;

const JUSTIFY_MAP = {
  start: { justifyContent: 'flex-start', alignContent: 'flex-start' },
  center: { justifyContent: 'center', alignContent: 'center' },
  end: { justifyContent: 'flex-end', alignContent: 'flex-end' },
  between: { justifyContent: 'space-between', alignContent: 'space-between' },
} as const;

const GAP_MAP = {
  xs: { gap: kit.space.DPX },
  sm: { gap: kit.space.EPX },
  md: { gap: kit.space.FPX },
  lg: { gap: kit.space.GPX },
  xl: { gap: kit.space.IPX },
} as const;

const WRAP_MAP = {
  wrap: { flexWrap: 'wrap' },
  nowrap: { flexWrap: 'nowrap' },
  wrapReverse: { flexWrap: 'wrap-reverse' },
} as const;

/** ------------------------------------------------------ */

const direction = styleVariants(DIR_MAP, (value) => ({
  flexDirection: value.flexDirection,
}));

const align = styleVariants(ALIGN_MAP, (value) => ({
  alignItems: value.alignItems,
}));

const justify = styleVariants(JUSTIFY_MAP, (value) => ({
  justifyContent: value.justifyContent,
  alignContent: value.alignContent,
}));

const gap = styleVariants(GAP_MAP, (value) => ({
  gap: value.gap,
}));

const wrap = styleVariants(WRAP_MAP, (value) => ({
  flexWrap: value.flexWrap,
}));

/** ------------------------------------------- */

const FLEX_BASE = style({
  boxSizing: 'border-box',
  display: 'flex',
  backgroundColor: 'transparent',
  padding: 0,
  margin: 'auto',
  width: '100% !important',
  height: 'auto',
});

/**
 *
 * export flex.
 */
export type FlexDirectionProps = keyof typeof direction;
export type FlexAlignProps = keyof typeof align;
export type FlexJustifyProps = keyof typeof justify;
export type FlexGapProps = keyof typeof gap;
export type FlexVariantProps = RecipeVariants<typeof flex>;
export const flex = recipe({
  base: FLEX_BASE,
  variants: { direction, align, justify, gap, wrap },
  defaultVariants: {
    direction: 'row',
    align: 'start',
    justify: 'start',
    gap: 'sm',
    wrap: 'wrap',
  },
});
