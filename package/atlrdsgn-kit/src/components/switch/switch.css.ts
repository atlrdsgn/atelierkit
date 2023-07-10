import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { kit } from '../../lib';

const ROOT_SIZE_VARIANTS = {
  small: {
    width: '29px',
    height: 'auto',
  },
  medium: {
    width: '34px',
    height: 'auto',
  },
} as const;

const TOGGLE_SIZE_VARIANTS = {
  small: {
    width: '14px',
    height: '14px',
    transform: 'translateX(2px)',
    checked: { transform: 'translateX(13px)' },
  },
  medium: {
    width: '16px',
    height: '16px',
    transform: 'translateX(2px)',
    checked: { transform: 'translateX(13px)' },
  },
} as const;

/** --------------- common properties ----------------- */

const COMMON_PROPERTIES = {
  verticalAlign: 'middle',
  display: 'inline-flex',
  borderRadius: kit.radii.PILL,
  willChange: 'transform',
  transition: 'transform 100ms',
} as const;

const BASE_ROOT = style({
  ...COMMON_PROPERTIES,
  appearance: 'none',
  outline: 'none',
  position: 'relative',
  margin: 'auto',
  paddingTop: 2,
  paddingBottom: 2,
  paddingLeft: 0,
  paddingRight: 0,
  flexShrink: 0,
  backgroundColor: kit.color.slate2,
  border: 'none',
  borderStyle: 'none',
  ':focus': {
    outline: 'none',
    boxShadow: `0 0 0 1.4px ${kit.color.slate6}`,
  },
  selectors: {
    '&[data-state="checked"]': {
      backgroundColor: kit.color.slate3,
    },
  },
});

const BASE_TOGGLE = style({
  ...COMMON_PROPERTIES,
  backgroundColor: kit.color.hyper2,
  selectors: {
    '&[data-state="checked"]': {
      backgroundColor: kit.color.hyper6,
    },
  },
});

/** --------------- toggle variant properties ----------------- */

const rootSize = styleVariants(ROOT_SIZE_VARIANTS, (value) => ({
  width: value.width,
  height: value.height,
}));

const toggleSize = styleVariants(TOGGLE_SIZE_VARIANTS, (value) => ({
  width: value.width,
  height: value.height,
  transform: value.transform,
  selectors: {
    '&[data-state="checked"]': {
      transform: value.checked.transform,
    },
  },
}));

/** --------------- recipes ----------------- */

export const switchRoot = recipe({
  base: BASE_ROOT,
  variants: {
    size: rootSize,
  },
  defaultVariants: {
    size: 'small',
  },
});

export const switchToggle = recipe({
  base: BASE_TOGGLE,
  variants: {
    size: toggleSize,
  },
  defaultVariants: {
    size: 'small',
  },
});

export type SwitchRootVariantProps = RecipeVariants<typeof switchRoot>;
export type SwitchToggleVariantProps = RecipeVariants<typeof switchToggle>;

export type SwitchRootProps = {
  size?: SwitchRootVariantProps;
} & React.HTMLAttributes<HTMLButtonElement>;
