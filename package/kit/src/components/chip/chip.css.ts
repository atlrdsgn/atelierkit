/** @format */

import {style, styleVariants} from '@vanilla-extract/css'
import {recipe, RecipeVariants} from '@vanilla-extract/recipes'
import {component_shadows, kit} from '../../lib'

const BR_SMALL = '8px'
const BR_MEDIUM = '12px'

const chipSizeOps = {
  small: {
    fontSize: kit.font.size.XS,
    lineHeight: kit.font.lineheight.XS,
    padding: `3px 6px`,
    borderRadius: BR_SMALL,
  },
  medium: {
    fontSize: kit.font.size.SM,
    lineHeight: kit.font.lineheight.SM,
    padding: `4px 8px`,
    borderRadius: BR_MEDIUM,
  },
} as const

const chipVariantOps = {
  /**
   *
   * slate_variant
   */
  slate: {
    backgroundColor: kit.color.slate1,
    border: `1px solid ${kit.color.slate3}`,
    color: kit.color.slate5,
    boxShadow: component_shadows.primary.initial,
    onHover: {
      backgroundColor: kit.color.slate1,
      border: `1px solid ${kit.color.slate4}`,
      color: kit.color.slate5,
      boxShadow: component_shadows.primary.hover,
    },
    onFocus: {
      boxShadow: component_shadows.primary.focus,
    },
  },

  /**
   *
   * hyper_variant
   */
  hyper: {
    backgroundColor: kit.color.hyper6,
    border: `1px solid ${kit.color.hyper7}`,
    color: kit.color.hyper1,
    boxShadow: component_shadows.hyper.initial,
    onHover: {
      backgroundColor: kit.color.hyper5,
      border: `1px solid ${kit.color.hyper6}`,
      color: kit.color.hyper1,
      boxShadow: component_shadows.hyper.hover,
    },
    onFocus: {
      boxShadow: component_shadows.hyper.focus,
    },
  },
} as const

/** --------------------------------------------------------- */

const size = {
  ...styleVariants(chipSizeOps, (size) => ({
    fontSize: size.fontSize,
    lineHeight: size.lineHeight,
    padding: size.padding,
    borderRadius: size.borderRadius,
  })),
}

const variant = {
  ...styleVariants(chipVariantOps, (variant) => ({
    backgroundColor: variant.backgroundColor,
    border: variant.border,
    color: variant.color,
    boxShadow: variant.boxShadow,
    ':hover': {
      backgroundColor: variant.onHover.backgroundColor,
      border: variant.onHover.border,
      color: variant.onHover.color,
      boxShadow: variant.onHover.boxShadow,
    },
    ':focus': {
      boxShadow: variant.onFocus.boxShadow,
    },
    ':active': {},
    ':disabled': {},
  })),
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
  defaultVariants: {
    size: 'small',
    variant: 'slate',
  },
})
