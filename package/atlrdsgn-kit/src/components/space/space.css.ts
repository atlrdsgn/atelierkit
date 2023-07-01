import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { kit } from '../../lib';

const SIZE_MAP = {
  xs: { height: kit.space.DPX },
  sm: { height: kit.space.GPX },
  md: { height: kit.space.KPX },
  lg: { height: kit.space.OPX },
  xl: { height: kit.space.RPX },
  xxl: { height: kit.space.UPX },
  '3xl': { height: kit.space.VPX },
  '4xl': { height: kit.space.WPX },
  '5xl': { height: kit.space.XPX },
  '6xl': { height: kit.space.YPX },
  '7xl': { height: kit.space.ZPX },
} as const;

export const size = {
  ...styleVariants(SIZE_MAP, (value) => ({
    height: value.height,
  })),
} as const;

/** --------------------------------- */

const SPACE_BASE = style({
  display: 'block',
  appearance: 'none',
  outline: 'none',
  position: 'relative',
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
  padding: '0px',
  margin: '0px',
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
});

/** ---------------------------------- */

export type SpaceSizeProps = keyof typeof size;
export type SpaceVariantProps = RecipeVariants<typeof space>;
export const space = recipe({
  base: SPACE_BASE,
  variants: { size },
  defaultVariants: { size: 'sm' },
});
