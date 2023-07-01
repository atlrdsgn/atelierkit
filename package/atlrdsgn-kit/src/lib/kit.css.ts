import { createTheme } from '@vanilla-extract/css';
import { themeVars } from './vars.css';
import { BASE_KIT_THEME, DARK_KIT_THEME } from './theme.css';

/**
 * Create the base theme class.
 *
 * [kitClass] refers to a css class, representing the base theme.
 * [tokens] represents the generated tokens used for theming.
 */
export const [kitClass, tokens] = createTheme(themeVars);

const lightTheme = createTheme(tokens, BASE_KIT_THEME);
const darkTheme = createTheme(tokens, DARK_KIT_THEME);

export const themes = {
  base: kitClass,
  light: lightTheme,
  dark: darkTheme,
};

export const kit = tokens;
