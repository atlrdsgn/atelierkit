export const breakpoints = {
  small: 0,
  medium: 768,
  large: 1200,
  xlarge: 1600,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const breakpointNames = Object.keys(breakpoints) as Breakpoint[];
