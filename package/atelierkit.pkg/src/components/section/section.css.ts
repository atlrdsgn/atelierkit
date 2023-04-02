/** @format */

import {style, styleVariants} from '@vanilla-extract/css'
import {recipe, RecipeVariants} from '@vanilla-extract/recipes'

import {kit} from '../../lib'

export const base = style({
  all: 'unset',
  boxSizing: 'border-box',
  display: 'section',
  position: 'relative',

  backgroundColor: 'transparent',

  height: 'auto',
  width: '100%',
  maxWidth: '100vw',
  margin: 0,
})

export type SectionVariantProps = RecipeVariants<typeof section>
export const section = recipe({
  base: [base],
  variants: {},
  defaultVariants: {},
})
