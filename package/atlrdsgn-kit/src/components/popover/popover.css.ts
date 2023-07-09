import { style } from '@vanilla-extract/css';
import { slideFadeDown, slideFadeUp } from '../_shared/keyframes.css';

export const popoverRoot = style({});

// content
export const popoverContent = style({
  borderRadius: '6px',
  padding: '20px',
  width: '260px',
  backgroundColor: 'white',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  ':focus': {
    boxShadow:
      'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px,0 0 0 2px hsl(206 22% 7% / 35%) ',
  },

  selectors: {
    '&[data-state="open"][data-side="bottom"]': {
      animationName: `${slideFadeDown}`,
    },
    '&[data-state="closed"]': { animationName: `${slideFadeUp}` },
  },
});

export const popoverClose = style({
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: '25px',
  width: '25px',
  padding: '0',
  margin: '0',
  border: 'none',
  backgroundColor: 'transparent',
  color: 'inherit',
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
  ':hover': {},
  ':focus': {},
});
export const popoverArrow = style({});
