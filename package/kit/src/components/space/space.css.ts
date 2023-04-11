/** @format */

import {style, styleVariants} from '@vanilla-extract/css'
import {recipe, RecipeVariants} from '@vanilla-extract/recipes'
import {kit} from '../../lib'

const sizeOpts = {
  xs: {height: kit.space.DPX},
  sm: {height: kit.space.GPX},
  md: {height: kit.space.KPX},
  lg: {height: kit.space.OPX},
  xl: {height: kit.space.RPX},
  xxl: {height: kit.space.UPX},
} as const

export const size = {
  ...styleVariants(sizeOpts, (value) => ({
    height: value.height,
  })),
} as const

/** --------------------------------- */

const SPACE_BASE = style({
  all: 'unset',
  display: 'flex',
  appearance: 'none',
  outline: 'none',
  position: 'relative',
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
  padding: '0',
  margin: '0',
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
})

/** ---------------------------------- */

export type SpaceSizeProps = keyof typeof size
export type SpaceVariantProps = RecipeVariants<typeof space>
export const space = recipe({
  base: [SPACE_BASE],
  variants: {size},
  defaultVariants: {size: 'sm'},
})
