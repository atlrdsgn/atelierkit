import { style } from '@vanilla-extract/css';
import { kit } from '../../lib';
import {
  slideFadeDown,
  slideFadeLeft,
  slideFadeRight,
  slideFadeUp,
} from '../_shared/keyframes.css';

export const hoverCardTrigger = style({
  all: 'unset',
  cursor: 'pointer',
  borderRadius: '100%',
  display: 'inline-block',

  ':focus': {
    boxShadow: `0 0 0 2px ${kit.color.white}`,
  },

  selectors: {},
});

export const hoverCardContent = style({
  borderRadius: '6px',
  padding: '20px',
  width: '300px',
  backgroundColor: kit.color.white,
  boxShadow: `${kit.color.sapphire6} 0px 10px 38px -10px, ${kit.color.sapphire4} 0px 10px 20px -15px`,
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  selectors: {
    '&[data-side="top"]': { animationName: `${slideFadeDown}` },
    '&[data-side="right"]': { animationName: `${slideFadeLeft}` },
    '&[data-side="bottom"]': { animationName: `${slideFadeUp}` },
    '&[data-side="left"]': { animationName: `${slideFadeRight}` },
  },
});
