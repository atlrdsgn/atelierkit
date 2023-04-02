/** @format */

import {createThemeContract} from '@vanilla-extract/css'

export type ThemeContractProps = typeof themeVars
export const themeVars = createThemeContract({
  media: {
    small: null,
    medium: null,
    large: null,
    xlarge: null,
  },

  font: {
    family: {
      system: 'font-system',
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
  color: {
    transparent: null,
    current: null,
    white: null,
    black: null,

    slate1: 'color-slate1',
    slate2: null,
    slate3: null,
    slate4: null,
    slate5: null,
    slate6: null,
    slate7: null,
    slate8: null,
    slate9: null,
    slate10: null,
  },
  // ..
})

export type ColorTypes = {
  [key in keyof typeof themeVars.color]: string
}
