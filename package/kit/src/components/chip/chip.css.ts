/** @format */

import {style, styleVariants} from '@vanilla-extract/css'
import {recipe, RecipeVariants} from '@vanilla-extract/recipes'
import {kit} from '../../lib'

const chipSizeOps = {
  small: {
    fontSize: kit.font.size.XS,
    lineHeight: kit.font.lineheight.XS,
    padding: `3px 8px`,
  },
  medium: {
    fontSize: kit.font.size.SM,
    lineHeight: kit.font.lineheight.SM,
    padding: `4px 12px`,
  },
} as const

const chipVariantOps = {
  primary: {},
  secondary: {},
} as const

const size = {
  ...styleVariants(chipSizeOps, (size) => ({
    fontSize: size.fontSize,
    lineHeight: size.lineHeight,
    padding: size.padding,
  })),
}

const variant = {
  ...styleVariants(chipVariantOps, (variant) => ({})),
}

/** --------------------------------------------------------- */

const CHIP_ROOT = style({
  all: 'unset',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  flexShrink: 0,

  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: '',
  verticalAlign: 'middle',
  outline: 'none',
  padding: 'auto',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  textAlign: 'center',
  margin: 'auto',
  whiteSpace: 'nowrap',

  fontFamily: kit.font.family.system,
  fontWeight: kit.font.weight.MEDIUM,
  fontVariantNumeric: 'tabular-nums',

  borderRadius: 'inherit',

  gap: '4px',

  ':focus': {},
  ':hover': {},
  ':active': {},

  '@media': {},

  selectors: {
    '&::before': {
      boxSizing: 'border-box',
      content: '""',
    },
    '&::after': {
      boxSizing: 'border-box',
      content: '""',
    },
  },
})

/** --------------------------------------------------------- */

export type ChipSizeProps = keyof typeof size
export type ChipVProps = keyof typeof variant
export type ChipVariantProps = RecipeVariants<typeof chip>
export const chip = recipe({
  base: [CHIP_ROOT],
  variants: {size, variant},
  defaultVariants: {},
})
