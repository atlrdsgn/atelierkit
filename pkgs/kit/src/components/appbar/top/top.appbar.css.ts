/** @format */

import {style, styleVariants} from '@vanilla-extract/css'
import {RecipeVariants, recipe} from '@vanilla-extract/recipes'
import {kit} from '../../../lib'

export const nav_properties = {
  LINK: {
    MARGIN: {
      LEFT: '14px',
      RIGHT: '14px',
      ZERO: '0px',
    },
  },
  FONT_SETTINGS: {
    family: kit.font.family.system,
    size: kit.font.size.MD,
    weight: kit.font.weight.MEDIUM,
    lineheight: kit.font.lineheight.MD,
    letterspace: 'normal',
  },
  PADDING: {
    TOPBAR: '4px 18px',
    BOTTOMBAR: '4px 18px',
  },
  isBLUR: {
    true: {
      backdropFilter: 'blur(40px) saturate(100%)',
      WebkitBackdropFilter: 'blur(40px) saturate(100%)',
    },
  },
} as const

/** ---------------------------------------------- */

const NAV_LINK_ALIGNMENT = {
  start: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'left',
    marginLeft: nav_properties.LINK.MARGIN.ZERO,
    marginRight: nav_properties.LINK.MARGIN.RIGHT,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: nav_properties.LINK.MARGIN.LEFT,
    marginRight: nav_properties.LINK.MARGIN.RIGHT,
  },
  end: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    textAlign: 'right',
    marginLeft: nav_properties.LINK.MARGIN.LEFT,
    marginRight: nav_properties.LINK.MARGIN.ZERO,
  },
} as const

const alignment = {
  ...styleVariants(NAV_LINK_ALIGNMENT, (alignment) => ({
    justifyContent: alignment.justifyContent,
    alignItems: alignment.alignItems,
    textAlign: alignment.textAlign,
    marginLeft: alignment.marginLeft,
    marginRight: alignment.marginRight,
  })),
} as const

const color = {
  ...styleVariants(kit.color, (colorValue) => ({
    color: colorValue,
  })),
} as const

/** ----------------------------------------- */

const TOP_APPBAR_CSS = {
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

const APPBAR_LINK_BASE = style({
  all: 'unset',

  fontFamily: nav_properties.FONT_SETTINGS.family,
  fontSize: nav_properties.FONT_SETTINGS.size,
  fontWeight: nav_properties.FONT_SETTINGS.weight,
  lineHeight: nav_properties.FONT_SETTINGS.lineheight,
  letterSpacing: nav_properties.FONT_SETTINGS.letterspace,
})

/** ----------------------------------------- */

export const top_appbar = style({
  ...TOP_APPBAR_CSS,
})

export const appbar_link = recipe({
  base: [APPBAR_LINK_BASE],
  variants: {alignment, color},
  defaultVariants: {
    alignment: 'center',
    color: 'slate9',
  },
})

export type AppbarLinkAlignment = keyof typeof alignment
export type AppbarLinkColor = keyof typeof color
export type AppbarLinkVariantProps = RecipeVariants<typeof appbar_link>
