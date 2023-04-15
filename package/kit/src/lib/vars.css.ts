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

  /**
   *
   * @typedesign
   */
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
    lineheight: {
      XS: 'line-height-xs',
      SM: 'line-height-sm',
      MD: 'line-height-md',
      LG: 'line-height-lg',
      XL: 'line-height-xl',
      XXL: 'line-height-xxl',
      '3XL': 'line-height-3xl',
      '4XL': 'line-height-4xl',
      '5XL': 'line-height-5xl',
      '6XL': 'line-height-6xl',
      '7XL': 'line-height-7xl',
      '8XL': 'line-height-8xl',
      '9XL': 'line-height-9xl',
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

  /**
   *
   * @radius
   */
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

  /**
   *
   * @spacing
   */
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

  /**
   *
   * @zindex
   */
  z: {
    indice: {
      ZERO: null,
      DF: null,
      LOW: null,
      MED: null,
      HIGH: null,
      TOP: null,
      MAX: null,
    },
  },

  /**
   *
   * @basicshadow
   */
  shadow: {
    NO: null,
    DF: null,
    LOW: null,
    MED: null,
    HIGH: null,
  },

  /**
   *
   * @color
   */
  color: {
    transparent: null,
    current: null,
    white: null,
    black: null,

    gray100: null,
    gray200: null,
    gray300: null,

    pale100: null,
    pale200: null,
    pale300: null,
    pale400: null,
    pale500: null,

    hyper0: null,
    hyper1: null,
    hyper2: null,
    hyper3: null,
    hyper4: null,
    hyper5: null,
    hyper6: null,
    hyper7: null,
    hyper8: null,
    hyper9: null,
    hyper10: null,
    hyper11: null,
    hyper12: null,
    hyper13: null,

    lemon0: null,
    lemon1: null,
    lemon2: null,
    lemon3: null,
    lemon4: null,
    lemon5: null,
    lemon6: null,
    lemon7: null,
    lemon8: null,
    lemon9: null,
    lemon10: null,
    lemon11: null,
    lemon12: null,
    lemon13: null,

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
    slate11: null,
    slate12: null,
    slate13: null,

    sapphire0: null,
    sapphire1: null,
    sapphire2: null,
    sapphire3: null,
    sapphire4: null,
    sapphire5: null,
    sapphire6: null,
    sapphire7: null,
    sapphire8: null,
    sapphire9: null,
    sapphire10: null,
    sapphire11: null,
    sapphire12: null,
    sapphire13: null,

    volt0: null,
    volt1: null,
    volt2: null,
    volt3: null,
    volt4: null,
    volt5: null,
    volt6: null,
    volt7: null,
    volt8: null,
    volt9: null,
    volt10: null,
    volt11: null,
    volt12: null,
    volt13: null,
  },
  // ..
})

export type ColorTypes = {
  [key in keyof typeof themeVars.color]: string
}
