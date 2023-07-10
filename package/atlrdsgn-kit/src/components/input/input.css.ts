import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { kit } from '../../lib';

const property_vars = {
  width: {
    // .. max-width
    SMALL: '360px',
    MEDIUM: '420px',
  },
  padding: {
    SMALL: '8px 16px',
    MEDIUM: '8px 16px',
  },
  radii: {
    SMALL: '14px',
    MEDIUM: '17px',
  },
  shadow: {
    onHOVER: `0px 2px 4px rgba(17, 12, 34, 0.12)`,
    onFOCUS: `0px 2px 4px rgba(113, 119, 134, 0.4), 0px 0px 0px 5px rgba(196, 198, 205, 0.6)`,
  },
} as const;

/** ----------------------------------------------- */

export const input_root = style({
  /**
   *
   * the root flex container
   * for the input + label.
   */
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  justifyContent: 'flex-start',

  gap: 8,
  flexWrap: 'nowrap',
  flexShrink: 0,
  flexGrow: 0,
  flexBasis: 'auto',

  width: '100%',
  height: 'auto',
  minWidth: '400px',
  margin: 'auto',
});

export const input_label = style({
  /**
   *
   * base styles for the label.
   */
  all: 'unset',
  boxSizing: 'border-box',
  appearance: 'none',
  outline: 'none',
  fontVariantNumeric: 'tabular-nums',
  position: 'relative',

  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.XS,
  fontWeight: kit.font.weight.MEDIUM,
  lineHeight: kit.font.lineheight.XS,
  letterSpacing: 'normal',
  textAlign: 'left',

  color: kit.color.slate8,

  marginLeft: '3px',
  marginRight: '3px',
  marginTop: '2px',
  marginBottom: '2px',
  padding: 0,
});

/** ---------------------------------------------- */

const INPUT_SIZE = {
  small: {
    padding: property_vars.padding.SMALL,
    borderRadius: property_vars.radii.SMALL,
    maxWidth: property_vars.width.SMALL,
  },
  medium: {
    padding: property_vars.padding.MEDIUM,
    borderRadius: property_vars.radii.MEDIUM,
    maxWidth: property_vars.width.MEDIUM,
  },
} as const;

const INPUT_COLOR_VARIANT = {
  slate: {
    backgroundColor: kit.color.slate1,
    borderColor: kit.color.slate3,
    color: kit.color.slate8,
    boxShadow: 'none',
    onHover: {
      backgroundColor: kit.color.slate1,
      borderColor: kit.color.slate4,
      boxShadow: property_vars.shadow.onHOVER,
    },
    onFocus: {
      backgroundColor: kit.color.slate1,
      borderColor: kit.color.slate3,
      boxShadow: property_vars.shadow.onFOCUS,
    },
  },
  hyper: {
    backgroundColor: kit.color.hyper1,
    borderColor: kit.color.hyper3,
    color: kit.color.hyper6,
    boxShadow: 'none',
    onHover: {
      backgroundColor: kit.color.slate1,
      borderColor: kit.color.hyper4,
      boxShadow: property_vars.shadow.onHOVER,
    },
    onFocus: {
      backgroundColor: kit.color.slate1,
      borderColor: kit.color.hyper3,
      boxShadow: property_vars.shadow.onFOCUS,
    },
  },
} as const;

const size = {
  ...styleVariants(INPUT_SIZE, (value) => ({
    padding: value.padding,
    borderRadius: value.borderRadius,
    maxWidth: value.maxWidth,
  })),
} as const;

const variant = {
  ...styleVariants(INPUT_COLOR_VARIANT, (value) => ({
    backgroundColor: value.backgroundColor,
    borderColor: value.borderColor,
    color: value.color,
    boxShadow: value.boxShadow,
    ':hover': {
      backgroundColor: value.onHover.backgroundColor,
      borderColor: value.onHover.borderColor,
      boxShadow: value.onHover.boxShadow,
    },
    ':focus': {
      backgroundColor: value.onFocus.backgroundColor,
      borderColor: value.onFocus.borderColor,
      boxShadow: value.onFocus.boxShadow,
    },
  })),
} as const;

/** ---------------------------------------------- */

const input_base = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  alignContent: 'center',

  gap: 10,

  width: '100%',
  height: 'auto',
  minWidth: '400px',

  border: `2px solid transparent`,
});

/** --------------------------------------------------------- */

export type InputSize = keyof typeof size;
export type InputColorVariant = keyof typeof variant;
export type InputVariantProps = RecipeVariants<typeof input_field>;
export const input_field = recipe({
  /**
   *
   * the input field.
   */
  base: [input_base],
  variants: { size, variant },
  defaultVariants: { size: 'medium', variant: 'slate' },
});
