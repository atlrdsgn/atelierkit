import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { breakpoints } from './constants';
import { kit } from '../kit.css';

const media = ['small', 'medium', 'large', 'xlarge'] as const;
const alignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const;
const vertical = ['top', 'middle', 'bottom', 'baseline'] as const;
const global = ['initial', 'inherit', 'unset'] as const;

const responsiveProperties = defineProperties({
  defaultCondition: 'small',
  responsiveArray: media,
  conditions: mapValues(breakpoints, (bp: number) =>
    bp === 0 ? {} : { '@media': `screen and (min-width: ${bp}px)` },
  ),
  properties: {
    // resets..
    all: ['unset'],
    boxSizing: ['border-box'],
    appearance: ['none'],
    outline: ['none'],

    // non-standard..
    userSelect: ['none', 'auto'],
    fontVariantNumeric: ['tabular-nums'],
    WebkitTapHighlightColor: [`rgba(0,0,0,0)`],

    // flexbox properties..
    display: ['none', 'flex', 'block', 'inline-block', 'inline-flex', 'inline'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    justifyContent: [...alignment, 'space-between', 'space-around'],
    alignItems: [...alignment, 'baseline'],
    alignContent: [...alignment],
    verticalAlign: [...vertical, 'text-top', 'text-bottom'],

    // positioning..
    position: [...global, 'relative', 'absolute', 'fixed', 'sticky'],
    margin: [...global, '0', 'auto', 'none'],
    padding: [
      ...global,
      '0',
      'none',
      'auto',
      '4px',
      '8px',
      '10px',
      '12px',
      '16px',
      '20px',
    ],
    width: ['auto', '100%'],
    height: ['auto', '100%'],

    // misc..
    gap: [0, '4px 4px', '8px 8px', '10px 10px', '12px 12px', '16px 16px', '20px 20px'],
    mixBlendMode: [...global, 'difference', 'multiply', 'screen', 'overlay'],

    // etc.
  },
  shorthands: {
    // ..
  },
});

/* <!-- 
attempting to create a color map
so that i can add colors as needed..
--------------------------------------------------
type Color = keyof typeof kit.color
const colors = Object.keys(kit.color)
const colorConstants = colors.map((color) => color as Color)
--------------------------------------------------
--> */

const colorProperties = defineProperties({
  defaultCondition: 'light',
  conditions: {
    light: {},
    dark: { '@media': '(prefers-color-scheme: dark)' }, // dark mode
    // or: {selectors: colorModeSelectors.light}
  },
  properties: {
    // etc.
    color: kit.color,
    backgroundColor: kit.color,
    borderColor: kit.color,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];

/**
 *
 * This is a helper function that
 * we can use to map over the breakpoint object.
 */
function mapValues(
  breakpoints: Record<string, number>,
  callback: (bp: number) => { '@media'?: undefined } | { '@media': string },
): Record<string, { '@media'?: undefined } | { '@media': string }> {
  const result: Record<string, { '@media'?: undefined } | { '@media': string }> = {};
  for (const key in breakpoints) {
    const value = breakpoints[key];
    result[key] = value === 0 ? {} : { '@media': `screen and (min-width: ${value}px)` };
  }
  return result;
}
