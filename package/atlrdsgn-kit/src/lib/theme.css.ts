import { kitColorPalette, darkKitColorPalette } from './color';
import type { ColorTypes } from './vars.css';

export const theme = {
  media: {
    small: '460px',
    medium: '768px',
    large: '1024px',
    xlarge: '1200px',

    /**
     * @mediaqueries
     */
    queries: {
      XS: 'screen and (max-width: 460px)',
      SM: 'screen and (max-width: 640px)',
      MD: 'screen and (max-width: 768px)',
      LG: 'screen and (max-width: 1024px)',
      XL: 'screen and (max-width: 1200px)',

      LIGHT: 'screen and (prefers-color-scheme: light)',
      DARK: 'screen and (prefers-color-scheme: dark)',
    },
  },

  /**
   *
   * @typedesign
   */
  font: {
    family: {
      system:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Ubuntu', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif;",
      sf: `'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,
      aspekta: `'Aspekta', sans-serif`,

      mono: `'SF Mono', monospace`,
    },
    heading: {
      H1: '2.25rem', // 36px
      H2: '1.875rem', // 30px
      H3: '1.5rem', // 24px
      H4: '1.25rem', // 20px
      H5: '1.125rem', // 18px
      H6: '1rem', // 16px
    },
    size: {
      MINI: '0.688rem', // 11px
      XS: '0.75rem', // 12px
      SM: '0.875rem', // 14px
      MD: '1rem', // 16px
      LG: '1.125rem', // 18px
      XL: '1.25rem', // 20px
      XXL: '1.5rem', // 24px
      ['3XL']: '1.875rem', // 30px
      ['4XL']: '2.25rem', // 36px
      ['5XL']: '3rem', // 48px
      ['6XL']: '3.75rem', // 60px
      ['7XL']: '4.5rem', // 72px
      ['8XL']: '6rem', // 96px
      ['9XL']: '8rem', // 128px
    },
    lineheight: {
      /**
       *
       * these should have the exact same
       * tokens as font.size.
       *
       * (not values, but keys)
       *
       */
      MINI: '0.875rem', // 14px
      XS: '1rem', // 16px
      SM: '1.25rem', // 20px
      MD: '1.5rem', // 24px
      LG: '1.75rem', // 28px
      XL: '1.75rem', // 28px
      XXL: '2rem', // 32px
      ['3XL']: '2.25rem', // 36px
      ['4XL']: '2.5rem', // 40px
      ['5XL']: '1', // 1
      ['6XL']: '1', // 1
      ['7XL']: '1', // 1
      ['8XL']: '1', // 1
      ['9XL']: '1', // 1
    },
    weight: {
      SUPRLITE: '100',
      ULTRALITE: '200',
      LITE: '300',
      REGULAR: '400',
      MEDIUM: '500',
      SEMIBOLD: '600',
      BOLD: '700',
      HEAVY: '800',
      BLACK: '900',
    },
  },

  /**
   *
   * @radius
   */
  radii: {
    ZERO: '0px',
    NO: '0px',
    DF: '14px',
    XS: '6px',
    SM: '12px',
    MD: '14px',
    LG: '16px',
    XL: '18px',
    XXL: '20px',
    PILL: '1000px',
  },

  /**
   *
   * @spacing
   */
  space: {
    ZERO: '0px',
    NO: '0px',
    DF: '16px', // IPX
    APX: '1px',
    BPX: '2px',
    CPX: '0.25rem', // 4px
    DPX: '0.375rem', // 6px
    EPX: '0.5rem', // 8px
    FPX: '0.625rem', // 10px
    GPX: '0.75rem', // 12px
    HPX: '0.875rem', // 14px
    IPX: '1rem', // 16px
    JPX: '1.125rem', // 18px
    KPX: '1.25rem', // 20px
    LPX: '1.5rem', // 24px
    MPX: '1.75rem', // 28px
    NPX: '2rem', // 32px
    OPX: '2.25rem', // 36px
    PPX: '2.5rem', // 40px
    QPX: '2.75rem', // 44px
    RPX: '3rem', // 48px
    SPX: '3.5rem', // 56px
    TPX: '4rem', // 64px
    UPX: '4.5rem', // 72px
    VPX: '6rem', // 96px
    WPX: '8rem', // 128px
    XPX: '12rem', // 192px
    YPX: '15rem', // 240px
    ZPX: '20rem', // 320px
  },

  /**
   *
   * @zindex
   */
  z: {
    indice: {
      ZERO: '0',
      DF: '1',
      LOW: '2',
      MED: '10',
      HIGH: '30',
      TOP: '100',
      MAX: '99999',
    },
  },

  /**
   *
   * @basicshadow
   */
  shadow: {
    NO: 'none',
    DF: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    LOW: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    MED: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    HIGH: '0px 12px 24px rgba(0, 0, 0, 0.1)',
  },

  // ..
} as const;

const lightModeColors: ColorTypes = {
  ...kitColorPalette,
};

const darkModeColors: ColorTypes = {
  ...darkKitColorPalette,
};

export const BASE_KIT_THEME = {
  ...theme,
  color: {
    ...lightModeColors,
  },
};

export const DARK_KIT_THEME = {
  ...theme,
  color: {
    ...darkModeColors,
  },
};
