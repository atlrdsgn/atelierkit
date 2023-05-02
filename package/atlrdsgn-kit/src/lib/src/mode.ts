import type { StyleRule } from '@vanilla-extract/css';
import { themes } from '../kit.css';

export type CSSProps = Omit<StyleRule, 'selectors' | '@media' | '@supports'>;

export const colorModeSelectors = {
  light: themes.light, // `html:not(${darkMode}) &`,
  dark: themes.dark, // `html${darkMode} &`,
};

const makeSelector = (mode: keyof typeof colorModeSelectors, styles?: CSSProps) =>
  !styles || Object.keys(styles).length === 0
    ? {}
    : {
        [colorModeSelectors[mode]]: styles,
      };

interface ColorMode {
  lightMode?: CSSProps;
  darkMode?: CSSProps;
}

export const colorModeStyle = ({ lightMode, darkMode }: ColorMode): StyleRule => ({
  ...(lightMode || darkMode
    ? {
        selectors: {
          ...makeSelector('light', lightMode),
          ...makeSelector('dark', darkMode),
        },
      }
    : {}),
});
