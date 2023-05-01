/** @format */

import {style, styleVariants} from '@vanilla-extract/css'
import {recipe, RecipeVariants} from '@vanilla-extract/recipes'
import {kit} from '../../lib'

const SIZE_MAP = {
  display: {fontSize: kit.font.size['6XL'], lineHeight: kit.font.lineheight['6XL']},
  H1: {fontSize: kit.font.size['5XL'], lineHeight: kit.font.lineheight['5XL']},
  H2: {fontSize: kit.font.size['4XL'], lineHeight: kit.font.lineheight['4XL']},
  H3: {fontSize: kit.font.size['3XL'], lineHeight: kit.font.lineheight['3XL']},
  H4: {fontSize: kit.font.size['2XL'], lineHeight: kit.font.lineheight['2XL']},
  H5: {fontSize: kit.font.size.XL, lineHeight: kit.font.lineheight.XL},
  H6: {fontSize: kit.font.size.MD, lineHeight: kit.font.lineheight.MD},
} as const

const WEIGHT_MAP = {
  superlite: {fontWeight: kit.font.weight.SUPRLITE},
  lite: {fontWeight: kit.font.weight.LITE},
  normal: {fontWeight: kit.font.weight.REGULAR},
  medium: {fontWeight: kit.font.weight.MEDIUM},
  semibold: {fontWeight: kit.font.weight.SEMIBOLD},
  bold: {fontWeight: kit.font.weight.BOLD},
  heavy: {fontWeight: kit.font.weight.HEAVY},
  black: {fontWeight: kit.font.weight.BLACK},
} as const

const ALIGNMENT_MAP = {
  left: {textAlign: 'left'},
  center: {textAlign: 'center'},
  right: {textAlign: 'right'},
} as const

/**
 *
 * Font, Size, Weight, Alignment
 */

export const font = {
  ...styleVariants(kit.font.family, (KIT_FAMILY) => ({
    fontFamily: KIT_FAMILY,
  })),
} as const

export const size = {
  ...styleVariants(SIZE_MAP, (HEADING_SIZE) => ({
    fontSize: HEADING_SIZE.fontSize,
    lineHeight: HEADING_SIZE.lineHeight,
  })),
} as const

export const weight = {
  ...styleVariants(WEIGHT_MAP, (HEADING_WEIGHT) => ({
    fontWeight: HEADING_WEIGHT.fontWeight,
  })),
} as const

export const align = {
  ...styleVariants(ALIGNMENT_MAP, (HEADING_ALIGNMENT) => ({
    textAlign: HEADING_ALIGNMENT.textAlign,
  })),
} as const

/** ---------------------------------------- */

const HEADING_BASE = style({
  letterSpacing: '-0.02em',
  margin: 0,
  padding: 0,
  fontVariantNumeric: 'tabular-nums',
})

/** -------------------------------------------- */

export type HeadingFontFamily = keyof typeof font
export type HeadingSize = keyof typeof size
export type HeadingWeight = keyof typeof weight
export type HeadingAlignment = keyof typeof align

export type HeadingVariantProps = RecipeVariants<typeof heading>
export const heading = recipe({
  base: HEADING_BASE,
  variants: {font, size, weight, align},
  defaultVariants: {
    font: 'system',
    size: 'H1',
    weight: 'semibold',
    align: 'left',
  },
})
