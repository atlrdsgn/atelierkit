/** @format */
import {style, styleVariants} from '@vanilla-extract/css'
import {RecipeVariants, recipe} from '@vanilla-extract/recipes'
import {kit} from '../../lib'

import {nav_properties} from './top.appbar.css'

const BOTTOM_APPBAR_LINK_BASE = style({
  all: 'unset',

  fontFamily: nav_properties.FONT_SETTINGS.family,
  fontSize: nav_properties.FONT_SETTINGS.size,
  fontWeight: nav_properties.FONT_SETTINGS.weight,
  lineHeight: nav_properties.FONT_SETTINGS.lineheight,
  letterSpacing: nav_properties.FONT_SETTINGS.letterspace,
})

/** ----------------------------------------- */

const BOTTOM_APPBAR_CSS = {
  all: 'unset',
  display: 'flex',
  flexDirection: 'row',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: kit.z.indice.MAX,

  padding: nav_properties.PADDING.TOPBAR,
  margin: 'auto',

  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '100%',
  minWidth: '100%',
  height: 'auto',
  maxHeight: '40px',
} as const

export const bottom_appbar = style({
  ...BOTTOM_APPBAR_CSS,
})
