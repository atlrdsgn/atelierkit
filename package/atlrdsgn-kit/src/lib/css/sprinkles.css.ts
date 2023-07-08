import {
  defineProperties,
  createSprinkles,
  ConditionalValue,
  RequiredConditionalValue,
} from '@vanilla-extract/sprinkles';
import { createMapValueFn } from '@vanilla-extract/sprinkles';
import { breakpoints, breakpointNames } from './constants';
import { kit } from '../kit.css';

type Breakpoint = keyof typeof breakpoints;

const media = ['small', 'medium', 'large', 'xlarge'] as const;
const alignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const;
const vertical = ['top', 'middle', 'bottom', 'baseline'] as const;
const global = ['initial', 'inherit', 'unset'] as const;

const durations = ['150ms', '300ms', '500ms', '700ms', '1000ms'] as const;

/**
 * Responsive properties
 *
 * These properties are responsive, meaning
 * they change at different breakpoints.
 */
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
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
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
    fontWeight: ['inherit', 'normal', 'bold', 'strong'],
    textTransform: ['capitalize', 'lowercase', 'uppercase'],
    transitionProperty: ['none', 'all', 'initial'],
    transitionTimingFunction: [
      'linear',
      'cubic-bezier(0.4, 0, 1, 1)',
      'cubic-bezier(0, 0, 0.2, 1)',
      'cubic-bezier(0.42, 0, 0.58, 1)',
    ],
    transitionDuration: [...durations],
  },
  shorthands: {
    // ..
  },
});

/**
 * Non-responsive properties
 *
 * These properties are not responsive, meaning
 * they do not change at different breakpoints.
 */

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

export const mapResponsiveValue = createMapValueFn(responsiveProperties);
// export const mapNonResponsiveValue = createMapValueFn(nonResponsiveProperties);
export const mapColorValue = createMapValueFn(colorProperties);

export type OptionalResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveProperties,
  Value
>;
export type RequiredResponsiveValue<Value extends string | number> =
  RequiredConditionalValue<typeof responsiveProperties, Value>;

export type OptionalResponsiveObject<Value> = Value | Partial<Record<Breakpoint, Value>>;
export type RequiredResponsiveObject<Value> = Partial<Record<Breakpoint, Value>> &
  Record<(typeof breakpointNames)[0], Value>;

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
