/**
 * shadows
 *
 * @format
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
    initial: `0px 1px 2px rgba(${HYPER_RGB_8}, 0.3)`, // 0px 1px 2px
    hover: `0px 2px 3px rgba(${HYPER_RGB_9}, 0.4)`, // 0px 2px 3px
    focus: `0px 1px 2px rgba(${HYPER_RGB_9}, 0.3), 0px 0px 1px 3px rgba(${HYPER_RGB_5}, 0.4)`, // 0px 1px 2px, 0px 0px 1px 3px
  },
  hyper: {
    initial: `0px 1px 2px rgba(${SLATE_RGB_5}, 0.3)`, // 0px 1px 2px
    hover: `0px 2px 3px rgba(${SLATE_RGB_4}, 0.4)`, // 0px 2px 3px
    focus: `0px 1px 2px rgba(${SLATE_RGB_5}, 0.3), 0px 0px 1px 3px rgba(${SLATE_RGB_3}, 0.4)`, // 0px 1px 2px, 0px 0px 1px 3px
  },
} as const
