/** @format */

import {style, styleVariants} from '@vanilla-extract/css'
import {recipe, RecipeVariants} from '@vanilla-extract/recipes'

const base = style({})

const chipSizeOps = {} as const
const chipVariantOps = {} as const

const size = {
  ...styleVariants(chipSizeOps, (size) => ({})),
}

const variant = {
  ...styleVariants(chipVariantOps, (variant) => ({})),
}

/** --------------------------------------------------------- */

export type ChipSizeProps = keyof typeof size
export type ChipVProps = keyof typeof variant
export type ChipVariantProps = RecipeVariants<typeof chip>
export const chip = recipe({
  base: [base],
  variants: {size, variant},
  defaultVariants: {},
})
