/** @format */

const core = {
  darkgray: `#1D1D1D`,
  gray: `#212326`,
  athensgray: `#F5F5F8`,

  saintblue: `#A2DAE4`,
  hurricane: `#847878`,

  rosebud: `#F9B38B`,
  melrose: `#B7B4FE`,
  eastside: `#9E87C5`,
} as const;

export const grays = {
  lite: `${core.athensgray}`,
  dark: `${core.gray}`,
  darkdark: `${core.darkgray}`,
} as const;

export const pales = {
  saintblue: `${core.saintblue}`,
  melrose: `${core.melrose}`,
  eastside: `${core.eastside}`,
  rosebud: `${core.rosebud}`,
  hurricane: `${core.hurricane}`,
} as const;
