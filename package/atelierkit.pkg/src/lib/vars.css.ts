/** @format */

import {createThemeContract} from '@vanilla-extract/css'

export type ThemeContractProps = typeof themeVars
export const themeVars = createThemeContract({
  media: {
    small: null,
    medium: null,
    large: null,
    xlarge: null,
  },

  font: {
    family: {
      system: 'font-system',
      mono: 'font-mono',
    },
    heading: {
      H1: 'font-heading-h1',
      H2: 'font-heading-h2',
      H3: 'font-heading-h3',
      H4: 'font-heading-h4',
      H5: 'font-heading-h5',
      H6: 'font-heading-h6',
    },
    body: {},
    size: {
      XS: 'font-size-xs',
      SM: 'font-size-sm',
      MD: 'font-size-md',
      LG: 'font-size-lg',
      XL: 'font-size-xl',
      XXL: 'font-size-xxl',
      '3XL': 'font-size-3xl',
      '4XL': 'font-size-4xl',
      '5XL': 'font-size-5xl',
      '6XL': 'font-size-6xl',
      '7XL': 'font-size-7xl',
      '8XL': 'font-size-8xl',
      '9XL': 'font-size-9xl',
    },
    weight: {
      SUPRLITE: 'font-weight-suprlite',
      ULTRALITE: 'font-weight-ultralite',
      LITE: 'font-weight-lite',
      REGULAR: 'font-weight-regular',
      MEDIUM: 'font-weight-medium',
      SEMIBOLD: 'font-weight-semibold',
      BOLD: 'font-weight-bold',
      HEAVY: 'font-weight-heavy',
      BLACK: 'font-weight-black',
    },
  },

  radii: {
    NO: null,
    DF: null,
    XS: null,
    SM: null,
    MD: null,
    LG: null,
    XL: null,
    XXL: null,
    PILL: null,
  },
  space: {
    ZERO: null,
    NO: null,
    DF: null,

    APX: null,
    BPX: null,
    CPX: null,
    DPX: null,
    EPX: null,
    FPX: null,
    GPX: null,
    HPX: null,
    IPX: null,
    JPX: null,
    KPX: null,
    LPX: null,
    MPX: null,
    NPX: null,
    OPX: null,
    PPX: null,
    QPX: null,
    RPX: null,
    SPX: null,
    TPX: null,
    UPX: null,
    VPX: null,
    WPX: null,
    XPX: null,
    YPX: null,
    ZPX: null,
  },

  z: {
    indice: {
      ZERO: null,
      DF: null,
      LOW: null,
      MED: null,
      HIGH: null,
      MAX: null,
    },
  },
  /** ------------------------------------------- */
  shadow: {
    NO: null,
    DF: null,
    LOW: null,
    MED: null,
    HIGH: null,
  },

  /** ------------------------------------------- */

  color: {
    transparent: null,
    current: null,
    white: null,
    black: null,

    slate1: 'color-slate1',
    slate2: null,
    slate3: null,
    slate4: null,
    slate5: null,
    slate6: null,
    slate7: null,
    slate8: null,
    slate9: null,
    slate10: null,
  },
  // ..
})

export type ColorTypes = {
  [key in keyof typeof themeVars.color]: string
}
