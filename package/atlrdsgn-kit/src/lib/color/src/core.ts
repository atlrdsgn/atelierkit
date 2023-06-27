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

export const ashe = {
  ashe0: `#FAFAFA`,
  ashe1: `#F5F5F5`,
  ashe2: `#E5E5E5`,
  ashe3: `#D4D4D4`,
  ashe4: `#A3A3A3`,
  ashe5: `#737373`,
  ashe6: `#525252`,
  ashe7: `#404040`,
  ashe8: `#262626`,
  ashe9: `#171717`,
  ashe10: `#0A0A0A`,
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
