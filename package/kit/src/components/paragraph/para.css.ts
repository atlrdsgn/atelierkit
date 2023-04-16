/** @format */

import {style, styleVariants} from '@vanilla-extract/css'
import {recipe, RecipeVariants} from '@vanilla-extract/recipes'
import {kit} from '../../lib'

const SIZE_OPTIONS = {
  normal: {},
  medium: {},
  large: {},
} as const

const COLOR_OPTIONS = {} as const

const WEIGHT_OPTIONS = {
  normal: {},
  medium: {},
  bold: {},
} as const

const ALIGN_OPTIONS = {
  left: {},
  center: {},
  right: {},
} as const

const FONT_OPTIONS = {
  system: {},
  mono: {},
} as const

const size = {} as const
const color = {} as const
const weight = {} as const
const align = {} as const
const font = {} as const

/** ---------------------------------------------- */

const PARAGRAPH_BASE = style({})

export const paragraph = recipe({
  base: [PARAGRAPH_BASE],
  variants: {size, color, weight, align, font},
  defaultVariants: {},
})

export type ParagraphSizeProps = keyof typeof size
export type ParagraphColorProps = keyof typeof color
export type ParagraphWeightProps = keyof typeof weight
export type ParagraphAlignProps = keyof typeof align
export type ParagraphFontProps = keyof typeof font

export type ParagraphVariantProps = RecipeVariants<typeof paragraph>
