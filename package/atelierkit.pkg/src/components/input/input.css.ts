/** @format */

import {style, styleVariants} from '@vanilla-extract/css'
import {recipe, RecipeVariants} from '@vanilla-extract/recipes'

const property_vars = {
  radii: {
    SMALL: 14,
    MEDIUM: 17,
  },
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

export const input_label = style({})

const input_base = style({
  all: 'unset',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  alignContent: 'center',

  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 16,
  paddingRight: 16,
  gap: 10,

  width: '100%',
  height: 'auto',
  minWidth: '400px',

  border: `2px solid #FFDAFC`,
  borderRadius: property_vars.radii.MEDIUM,
})

export const input_field = recipe({
  /**
   *
   * the input field.
   */
  base: [input_base],
  variants: {},
  defaultVariants: {},
})
