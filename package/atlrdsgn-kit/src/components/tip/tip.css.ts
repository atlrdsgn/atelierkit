import { style } from '@vanilla-extract/css';
import {
  slideFadeDown,
  slideFadeLeft,
  slideFadeRight,
  slideFadeUp,
} from '../_shared/keyframes.css';
import { kit } from '../../lib';

/** ------------------------------------------------
 * provided variables
 * 
const RADIX = `--radix-tooltip`
const TRIGGER_WIDTH = `var(${RADIX}-trigger-width)`
const TRIGGER_HEIGHT = `var(${RADIX}-trigger-height)`
const AVAILABLE_HEIGHT = `var(${RADIX}-content-available-height)`
const AVAILABLE_WIDTH = `var(${RADIX}-content-available-width)`
const TRANSFORM_ORIGIN = `var(${RADIX}-content-transform-origin)`
 ------------------------------------------------------ */

export const tip_trigger = style({
  all: 'unset',
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
  border: 'none',
  width: 'fit-content',
  height: 'auto',
});

export const tip_content = style({
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  position: 'relative',

  width: 'fit-content',
  height: 'auto',

  paddingTop: '12px',
  paddingBottom: '10px',
  paddingLeft: '15px',
  paddingRight: '15px',

  color: kit.color.slate6,
  backgroundColor: kit.color.slate1,

  border: '2px solid',
  borderRadius: kit.radii.LG,
  borderColor: kit.color.slate7,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',

  animationDuration: '500ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  selectors: {
    '&[data-placement^="top"]': {
      animationName: slideFadeDown,
    },
    '&[data-placement^="bottom"]': {
      animationName: slideFadeUp,
    },
    '&[data-placement^="left"]': {
      animationName: slideFadeRight,
    },
    '&[data-placement^="right"]': {
      animationName: slideFadeLeft,
    },
  },
});
