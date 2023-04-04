/** @format */

import {createTheme} from '@vanilla-extract/css'
import {themeVars} from './vars.css'
import {BASE_KIT_THEME} from './theme.css'

export const [kitClass, tokens] = createTheme(themeVars)
const liteMode = createTheme(tokens, BASE_KIT_THEME)

export const kit = tokens

export const themes = {
  base: kitClass,
  light: liteMode,
} as const
