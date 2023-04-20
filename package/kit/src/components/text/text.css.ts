/** @format */

import {style, styleVariants} from '@vanilla-extract/css'
import {recipe, RecipeVariants} from '@vanilla-extract/recipes'
import {kit} from '../../lib'

const FONT_MAP = {
  system: {fontFamily: kit.font.family.system},
  inter: {fontFamily: kit.font.family.system},
  mono: {fontFamily: kit.font.family.mono},
} as const

const SIZE_MAP = {
  xs: {fontSize: kit.font.size.XS, lineHeight: kit.font.lineheight.XS},
  sm: {fontSize: kit.font.size.SM, lineHeight: kit.font.lineheight.SM},
  md: {fontSize: kit.font.size.MD, lineHeight: kit.font.lineheight.MD},
  lg: {fontSize: kit.font.size.LG, lineHeight: kit.font.lineheight.LG},
  xl: {fontSize: kit.font.size.XL, lineHeight: kit.font.lineheight.XL},
  xxl: {fontSize: kit.font.size.XXL, lineHeight: kit.font.lineheight.XXL},
  '3xl': {fontSize: kit.font.size['3xl'], lineHeight: kit.font.lineheight['3xl']},
  '4xl': {fontSize: kit.font.size['4xl'], lineHeight: kit.font.lineheight['4xl']},
  '5xl': {fontSize: kit.font.size['5xl'], lineHeight: kit.font.lineheight['5xl']},
  '6xl': {fontSize: kit.font.size['6xl'], lineHeight: kit.font.lineheight['6xl']},
  '7xl': {fontSize: kit.font.size['7xl'], lineHeight: kit.font.lineheight['7xl']},
  '8xl': {fontSize: kit.font.size['8xl'], lineHeight: kit.font.lineheight['8xl']},
  '9xl': {fontSize: kit.font.size['9xl'], lineHeight: kit.font.lineheight['9xl']},
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

export const font = {
  ...styleVariants(FONT_MAP, (value) => ({
    fontFamily: value.fontFamily,
  })),
} as const

export const size = {
  ...styleVariants(SIZE_MAP, (value) => ({
    fontSize: value.fontSize,
    lineHeight: value.lineHeight,
  })),
} as const

export const weight = {
  ...styleVariants(WEIGHT_MAP, (value) => ({
    fontWeight: value.fontWeight,
  })),
} as const

export const color = {
  ...styleVariants(kit.color, (value) => ({
    color: value,
  })),
} as const

export const align = {
  ...styleVariants(ALIGNMENT_MAP, (value) => ({
    textAlign: value.textAlign,
  })),
} as const

/** ------------------------------------------------------- */

const TEXT_BASE = style({
  letterSpacing: '-0.02em',
  margin: 0,
  padding: 0,
  fontVariantNumeric: 'tabular-nums',
})

export type TextFontVariants = keyof typeof font
export type TextSizeVariants = keyof typeof size
export type TextWeightVariants = keyof typeof weight
export type TextColorVariants = keyof typeof color
export type TextAlignVariants = keyof typeof align
export type TextVariantProps = RecipeVariants<typeof text>
export const text = recipe({
  base: TEXT_BASE,
  variants: {
    font,
    size,
    weight,
    color,
    align,
  },
  defaultVariants: {
    font: 'system',
    size: 'md',
    weight: 'medium',
    color: 'slate5',
    align: 'left',
  },
})
