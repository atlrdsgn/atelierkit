/** @format */

import {kit} from '../kit.css'
/**
 * shadows
 *
 * @format
 *
 *
 *
 * @large_shadow
 */
export const large_shadow = {
  LIGHT: {
    INITIAL: `0px 0.7079948583634852px 0.7079948583634852px -0.625px rgba(0, 0, 0, 0.15), 
  0px 1.8096906216668867px 1.8096906216668867px -1.25px rgba(0, 0, 0, 0.14397), 
  0px 3.6205156475884093px 3.6205156475884093px -1.875px rgba(0, 0, 0, 0.13793), 
  0px 6.870631714892718px 6.870631714892718px -2.5px rgba(0, 0, 0, 0.1271), 
  0px 13.644368889910274px 13.644368889910274px -3.125px rgba(0, 0, 0, 0.10452), 
  0px 30px 30px -3.75px rgba(0, 0, 0, 0.05)`,
    HOVER: `0px 0.7079948583634852px 0.7079948583634852px -0.625px rgba(0, 0, 0, 0.15), 
  0px 1.8096906216668867px 1.8096906216668867px -1.25px rgba(0, 0, 0, 0.14397), 
  0px 3.6205156475884093px 3.6205156475884093px -1.875px rgba(0, 0, 0, 0.13793), 
  0px 6.870631714892718px 6.870631714892718px -2.5px rgba(0, 0, 0, 0.1271), 
  0px 13.644368889910274px 13.644368889910274px -3.125px rgba(0, 0, 0, 0.10452), 
  0px 30px 30px -3.75px rgba(0, 0, 0, 0.05)`,
  },
  DARK: {
    INITIAL: `0px 0.7079948583634852px 0.7079948583634852px -0.625px rgba(0, 0, 0, 0.15), 
  0px 1.8096906216668867px 1.8096906216668867px -1.25px rgba(0, 0, 0, 0.14397), 
  0px 3.6205156475884093px 3.6205156475884093px -1.875px rgba(0, 0, 0, 0.13793), 
  0px 6.870631714892718px 6.870631714892718px -2.5px rgba(0, 0, 0, 0.1271), 
  0px 13.644368889910274px 13.644368889910274px -3.125px rgba(0, 0, 0, 0.10452), 
  0px 30px 30px -3.75px rgba(0, 0, 0, 0.05)`,
    HOVER: `0px 0.7079948583634852px 0.7079948583634852px -0.625px rgba(0, 0, 0, 0.15), 
  0px 1.8096906216668867px 1.8096906216668867px -1.25px rgba(0, 0, 0, 0.14397), 
  0px 3.6205156475884093px 3.6205156475884093px -1.875px rgba(0, 0, 0, 0.13793), 
  0px 6.870631714892718px 6.870631714892718px -2.5px rgba(0, 0, 0, 0.1271), 
  0px 13.644368889910274px 13.644368889910274px -3.125px rgba(0, 0, 0, 0.10452), 
  0px 30px 30px -3.75px rgba(0, 0, 0, 0.05)`,
  },
} as const

/** ------------------------------------------------------------------
 * @rainbow_shadow
 * --------------------------------------------------------------------*/
export const rainbow_shadow = {
  LIGHT: {
    INITIAL: `none`,
    HOVER: `2px 0px 4px 0px ${kit.color.hyper6}, 0px 2px 3px 0px ${kit.color.sapphire6}, -2px 0px 4px 0px ${kit.color.volt5}`,
  },
  DARK: {
    INITIAL: `none`,
    HOVER: `2px 0px 4px 0px ${kit.color.hyper6}, 0px 2px 3px 0px ${kit.color.sapphire6}, -2px 0px 4px 0px ${kit.color.volt5}`,
  },
} as const

/**
 *
 * @component_shadows
 */

const HYPER_RGB_5 = `255, 105, 241`
const HYPER_RGB_8 = `159, 41, 150`
const HYPER_RGB_9 = `112, 26, 104`

const SLATE_RGB_3 = `140, 145, 158`
const SLATE_RGB_4 = `102, 102, 102`
const SLATE_RGB_5 = `43, 43, 43`
export type ComponentShadows = keyof typeof component_shadows
export const component_shadows = {
  primary: {
    initial: `0px 1px 2px rgba(${SLATE_RGB_5}, 0.3)`, // 0px 1px 2px
    hover: `0px 2px 3px rgba(${SLATE_RGB_4}, 0.3)`, // 0px 2px 3px
    focus: `0px 1px 2px rgba(${SLATE_RGB_5}, 0.3), 0px 0px 1px 3px rgba(${SLATE_RGB_3}, 0.4)`, // 0px 1px 2px, 0px 0px 1px 3px
  },
  hyper: {
    initial: `0px 1px 2px rgba(${HYPER_RGB_8}, 0.3)`, // 0px 1px 2px
    hover: `0px 2px 3px rgba(${HYPER_RGB_9}, 0.4)`, // 0px 2px 3px
    focus: `0px 1px 2px rgba(${HYPER_RGB_9}, 0.3), 0px 0px 1px 3px rgba(${HYPER_RGB_5}, 0.4)`, // 0px 1px 2px, 0px 0px 1px 3px
  },
} as const
