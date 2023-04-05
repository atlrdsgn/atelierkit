/** @format */

import {style, styleVariants} from '@vanilla-extract/css'
import {recipe, RecipeVariants} from '@vanilla-extract/recipes'

import {kit} from '../../lib'

export const avi_img = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: 'inherit',
})

export const fall_back = style({
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: 'inherit',
  color: kit.color.slate9,

  fontFamily: kit.font.family.mono,
  fontSize: kit.font.size.SM,
  fontWeight: kit.font.weight.MEDIUM,
  lineHeight: kit.font.lineheight.SM,
})

/** --------------------------------------- */

export const AVI_BASE = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  backgroundColor: kit.color.slate3,
  /**
   *
   * add box-shadow to the base.
   */
})
