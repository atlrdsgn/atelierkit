/** @format */

import {kitColorPalette} from './color'
import {themeVars} from './vars.css'

import type {ColorTypes} from './vars.css'

export const theme = {
  media: {
    small: '460px',
    medium: '768px',
    large: '1024px',
    xlarge: '1200px',
  },

  font: {
    family: {
      system: `"Inter", sans-serif`,
    },
    heading: {},
    body: {},
    size: {},
    weight: {},
  },

  radii: {},
  space: {},

  z: {
    indice: {},
  },

  shadow: {},

  // ..
} as const // <--- this is the important part

const lightModeColors: ColorTypes = {
  ...kitColorPalette,
} as const

export const BASE_KIT_THEME = {
  ...theme,
  color: {
    ...lightModeColors,
  },
} as const
