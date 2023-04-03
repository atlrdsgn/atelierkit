/** @format */

import {style, styleVariants} from '@vanilla-extract/css'
import {recipe, RecipeVariants} from '@vanilla-extract/recipes'

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

export const input_field = recipe({})
