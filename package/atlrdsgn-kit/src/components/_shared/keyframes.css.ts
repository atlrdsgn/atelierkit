import { keyframes, style } from '@vanilla-extract/css';

const SLIDE_UP_FADE = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const SLIDE_DOWN_FADE = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const SLIDE_RIGHT_FADE = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const SLIDE_LEFT_FADE = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

/* -------------------------------------------------------------------------- */

const threeSixty = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const oneEighty = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(180deg)' },
});

const eighty = keyframes({
  from: {
    transform: `rotate(0deg)`,
  },
  to: {
    transform: `rotate(180deg)`,
  },
});

/* -------------------------------------------------------------------------- */

export const slideFadeUp = style({
  animationName: SLIDE_UP_FADE,
  animation: `${SLIDE_UP_FADE} 0.2s`,
});

export const slideFadeDown = style({
  animationName: SLIDE_DOWN_FADE,
  animation: `${SLIDE_DOWN_FADE} 0.2s`,
});

export const slideFadeRight = style({
  animationName: SLIDE_RIGHT_FADE,
  animation: `${SLIDE_RIGHT_FADE} 0.2s`,
});

export const slideFadeLeft = style({
  animationName: SLIDE_LEFT_FADE,
  animation: `${SLIDE_LEFT_FADE} 0.2s`,
});

/* -------------------------------------------------------------------------- */

export const spin = style({
  animationName: threeSixty,
  animationDuration: '3s',
});

export const spinAgain = style({
  animation: `${threeSixty} 3s`,
});

export const rotate180 = style({
  animationName: oneEighty,
  animationDuration: '2s',
  animation: `${oneEighty} 2s`,
});

export const rotate = style({
  animation: `${eighty} 2s`,
});
