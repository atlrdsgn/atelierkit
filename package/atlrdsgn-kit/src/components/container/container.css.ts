/** @format */

import {style, styleVariants} from '@vanilla-extract/css'
import {recipe, RecipeVariants} from '@vanilla-extract/recipes'
import {kit} from '../../lib'

const WIDTH_MAP = {
  small: {maxWidth: '430px'},
  medium: {maxWidth: '720px'},
  large: {maxWidth: '1145px'},
  xlarge: {maxWidth: '1440px'},

  max: {maxWidth: '100%'},
  full: {maxWidth: '100vw'},
} as const

const ALIGNMENT_MAP = {
  start: {
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  center: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  end: {
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  },
} as const

/** -------------------------------------------- */

export const width = {
  ...styleVariants(WIDTH_MAP, (value) => ({
    maxWidth: value.maxWidth,
  })),
} as const

export const align = {
  ...styleVariants(ALIGNMENT_MAP, (value) => ({
    alignItems: value.alignItems,
    alignContent: value.alignContent,
    justifyContent: value.justifyContent,
  })),
} as const

export const CONTAINER_BASE = style({
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: kit.space.DPX,
  paddingBottom: kit.space.DPX,
  paddingLeft: kit.space.JPX,
  paddingRight: kit.space.JPX,

  width: `100% !important`,
  margin: 'auto',

  '@media': {
    'screen and (max-width: 640px)': {
      paddingLeft: kit.space.IPX,
      paddingRight: kit.space.IPX,
    },
  },
})

export type ContainerAlignment = keyof typeof align
export type ContainerWidth = keyof typeof width
export type ContainerVariantProps = RecipeVariants<typeof container>
export const container = recipe({
  base: [CONTAINER_BASE],
  variants: {align, width},
  defaultVariants: {align: 'start', width: 'max'},
})
