/** @format */

import {style, styleVariants} from '@vanilla-extract/css'
import {recipe, RecipeVariants} from '@vanilla-extract/recipes'

import {kit} from '../../lib'

const property_vars = {
  width: {
    // .. max-width
    SMALL: '360px',
    MEDIUM: '420px',
  },
  padding: {
    SMALL: '6px 12px',
    MEDIUM: '8px 16px',
  },
  radii: {
    SMALL: '14px',
    MEDIUM: '17px',
  },
  shadow: {},
} as const

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
})

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
})

/** ---------------------------------------------- */

const INPUT_SIZE = {
  SMALL: {
    padding: property_vars.padding.SMALL,
    borderRadius: property_vars.radii.SMALL,
    maxWidth: property_vars.width.SMALL,
  },
  MEDIUM: {
    padding: property_vars.padding.MEDIUM,
    borderRadius: property_vars.radii.MEDIUM,
    maxWidth: property_vars.width.MEDIUM,
  },
} as const

const INPUT_COLOR_VARIANT = {
  slate: {
    background: kit.color.slate1,
    backgroundColor: kit.color.slate1,
    borderColor: kit.color.slate3,
    color: kit.color.slate8,
    boxShadow: '',
    onHover: {},
    onFocus: {},
  },
  hyper: {
    background: kit.color.hyper1,
    backgroundColor: kit.color.hyper1,
    borderColor: '#FFDAFC',
    color: kit.color.hyper6,
    boxShadow: '',
    onHover: {},
    onFocus: {},
  },
} as const

const size = {
  ...styleVariants(INPUT_SIZE, (value) => ({
    padding: value.padding,
    borderRadius: value.borderRadius,
    maxWidth: value.maxWidth,
  })),
} as const

const variant = {
  ...styleVariants(INPUT_COLOR_VARIANT, (value) => ({
    background: value.background,
    backgroundColor: value.backgroundColor,
    borderColor: value.borderColor,
    color: value.color,
    boxShadow: value.boxShadow,
    ':hover': {},
    ':focus': {},
  })),
} as const

/** ---------------------------------------------- */

const input_base = style({
  all: 'unset',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  alignContent: 'center',

  gap: 10,

  width: '100%',
  height: 'auto',
  minWidth: '400px',

  border: `2px solid`,
})

/** --------------------------------------------------------- */

export type InputSize = keyof typeof size
export type InputVariantProps = RecipeVariants<typeof input_field>
export const input_field = recipe({
  /**
   *
   * the input field.
   */
  base: [input_base],
  variants: {size, variant},
  defaultVariants: {size: 'MEDIUM', variant: 'slate'},
})
