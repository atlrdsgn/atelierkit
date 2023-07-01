import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { kit } from '../../lib';

export const switchRoot = style({
  all: 'unset',
  appearance: 'none',
  outline: 'none',
  display: 'inline-flex',
  position: 'relative',
  verticalAlign: 'middle',
  width: '29px',
  height: 'auto',
  margin: 'auto',
  paddingTop: 2,
  paddingBottom: 2,
  paddingLeft: 0,
  paddingRight: 0,
  flexShrink: 0,
  backgroundColor: kit.color.slate2,
  borderRadius: kit.radii.PILL,
  border: 'none',
  borderStyle: 'none',
  // ':active': {},
  // ':hover': {},
  ':focus': {
    outline: 'none',
    boxShadow: `0 0 0 1.4px ${kit.color.slate6}`,
  },
  selectors: {
    // '&[data-disabled]': {},
    '&[data-state="checked"]': {
      backgroundColor: kit.color.slate3,
    },
  },
});

/** --------------- toggle variant properties ----------------- */

const TOGGLE_SIZE_MAP = {
  small: { width: '14px', height: '14px' },
  medium: { width: '16px', height: '16px' },
  large: { width: '18px', height: '18px' },
} as const;

const TOGGLE_VARIANT_MAP = {
  default: { backgroundColor: kit.color.slate6 },
  hyper: { backgroundColor: kit.color.hyper6 },
  volt: { backgroundColor: kit.color.volt6 },
} as const;

export const size = styleVariants(TOGGLE_SIZE_MAP, (value) => ({
  width: value.width,
  height: value.height,
}));

export const variant = styleVariants(TOGGLE_VARIANT_MAP, (value) => ({
  backgroundColor: value.backgroundColor,
}));

/** --------------- base.css ----------------- */

export const toggleBase = style({
  verticalAlign: 'middle',
  display: 'inline-flex',
  // width: TOGGLE_WIDTH,
  // height: TOGGLE_HEIGHT,
  // backgroundColor: kit.color.slate6,
  borderRadius: kit.radii.PILL,
  willChange: 'transform',
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  selectors: {
    '&[data-state="checked"]': {
      transform: 'translateX(13px)',
      backgroundColor: kit.color.hyper6,
    },
  },
});

/** ------------- toggle ----------------- */

export type SwitchSizeProps = keyof typeof size;
export type SwitchVariantProps = keyof typeof variant;
export type SwitchToggleVariantProps = RecipeVariants<typeof switchToggle>;
export const switchToggle = recipe({
  base: toggleBase,
  variants: { size, variant },
  defaultVariants: { size: 'small', variant: 'default' },
});
