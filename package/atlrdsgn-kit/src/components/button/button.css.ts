/** @format */

import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { rainbow_shadow } from '../../lib/properties';
import { kit } from '../../lib';

const style_properties = {
  padding: {
    XSMALL: `6px 10px`,
    SMALL: `8px 12px`,
    MEDIUM: `10px 12px`,
    LARGE: `12px 18px`,
  },
  radii: {
    XSMALL: `9px`,
    SMALL: `9px`,
    MEDIUM: `12px`,
    LARGE: `14px`,
  },
  border: {
    XSMALL: `1.5px solid`,
    SMALL: `1.5px solid`,
    MEDIUM: `2px solid`,
    LARGE: `2px solid`,
  },
  shadows: {
    // slate_shadows
    SLATE: {
      INITIAL: {
        XS: `0px 1px 2px -1px rgba(0, 0, 0, 0.25)`,
        SM: `none`,
        MD: `none`,
        LG: `none`,
      },
      HOVER: {
        XS: `0px 2px 4px rgba(0, 0, 0, 0.3)`,
        SM: `none`,
        MD: `none`,
        LG: `none`,
      },
      FOCUS: {
        XS: `0px 1px 2px rgba(0, 0, 0, 0.25), 0px 0px 0px 3.5px rgba(0, 0, 0, 0.2)`,
        SM: `none`,
        MD: `0px 2px 4px rgba(17, 12, 34, 0.18), 0px 0px 0px 5px rgba(236, 236, 237, 1)`,
        LG: `0px 2px 4px rgba(17, 12, 34, 0.12), 0px 0px 0px 6px rgba(236, 236, 237, 1)`,
      },
    },
    // hyper_shadows
    HYPER: {
      INITIAL: {
        XS: `0px 1px 2px -1px rgba(102, 27, 95, 0.75)`,
        SM: `none`,
        MD: `none`,
        LG: `none`,
      },
      HOVER: {
        XS: `0px 2px 4px rgba(102, 27, 95, 0.3)`,
        SM: `0px 3px 6px -1px rgba(102, 27, 95, 0.4)`,
        MD: `none`,
        LG: `none`,
      },
      FOCUS: {
        XS: `0px 1px 2px rgba(102, 27, 95, 0.3), 0px 0px 0px 3.5px rgba(226, 220, 255, 1)`,
        SM: `0px 1px 2px rgba(102, 27, 95, 0.3), 0px 0px 0px 4.5px rgba(255, 105, 241, 0.2)`,
        MD: `none`,
        LG: `none`,
      },
    },
  },
} as const;

const sp = style_properties;

/** ---------------------------------------------- */

const SIZE_MAP = {
  xs: {
    fontSize: kit.font.size.MINI,
    lineHeight: kit.font.lineheight.MINI,
    padding: sp.padding.XSMALL,
    border: sp.border.XSMALL,
    borderRadius: sp.radii.XSMALL,

    onHOVER: {
      boxShadow: sp.shadows.SLATE.HOVER.XS,
    },
    onFOCUS: {
      boxShadow: sp.shadows.SLATE.FOCUS.XS,
    },
  },
  sm: {
    fontSize: kit.font.size.XS,
    lineHeight: kit.font.lineheight.XS,
    padding: sp.padding.SMALL,
    border: sp.border.SMALL,
    borderRadius: sp.radii.SMALL,

    onHOVER: {
      boxShadow: sp.shadows.SLATE.HOVER.SM,
    },
    onFOCUS: {
      boxShadow: sp.shadows.SLATE.FOCUS.SM,
    },
  },
  md: {
    fontSize: kit.font.size.MD,
    lineHeight: kit.font.lineheight.MD,
    padding: sp.padding.MEDIUM,
    border: sp.border.MEDIUM,
    borderRadius: sp.radii.MEDIUM,

    onHOVER: {
      boxShadow: sp.shadows.SLATE.HOVER.MD,
    },
    onFOCUS: {
      boxShadow: sp.shadows.SLATE.FOCUS.MD,
    },
  },
  lg: {
    fontSize: kit.font.size.LG,
    lineHeight: kit.font.lineheight.LG,
    padding: sp.padding.LARGE,
    border: sp.border.LARGE,
    borderRadius: sp.radii.LARGE,

    onHOVER: {
      boxShadow: sp.shadows.SLATE.HOVER.LG,
    },
    onFOCUS: {
      boxShadow: sp.shadows.SLATE.FOCUS.LG,
    },
  },
} as const;

const COLOR_MAP = {
  slate: {
    backgroundColor: kit.color.slate1,
    borderColor: kit.color.slate2,
    color: kit.color.slate6,
    onHOVER: {
      boxShadow: 'none',
    },
    onFOCUS: {
      boxShadow: 'none',
    },
  },
  hyper: {
    backgroundColor: kit.color.hyper5,
    borderColor: kit.color.hyper6,
    color: kit.color.white,
    onHOVER: {
      boxShadow: 'none',
    },
    onFOCUS: {
      boxShadow: 'none',
    },
  },
  neon: {
    backgroundColor: kit.color.slate1,
    borderColor: kit.color.slate2,
    color: kit.color.slate6,
    onHOVER: {
      boxShadow: rainbow_shadow.LIGHT.HOVER,
    },
    onFOCUS: {
      boxShadow: 'none',
    },
  },
} as const;

const size = {
  ...styleVariants(SIZE_MAP, (value) => ({
    fontSize: value.fontSize,
    lineHeight: value.lineHeight,
    padding: value.padding,
    border: value.border,
    borderRadius: value.borderRadius,

    ':hover': {},
    ':focus': {},
  })),
} as const;

const variant = {
  ...styleVariants(COLOR_MAP, (value) => ({
    backgroundColor: value.backgroundColor,
    color: value.color,

    ':hover': {
      boxShadow: value.onHOVER.boxShadow,
    },
    ':focus': {
      boxShadow: value.onFOCUS.boxShadow,
    },
  })),
} as const;

/** --------------------------------------------- */

const BUTTON_BASE = style({
  boxSizing: 'border-box',
  userSelect: 'none',
  outline: 0,
  cursor: 'pointer',
  fontVariantNumeric: 'tabular-nums',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  verticalAlign: 'middle',
  gap: '4px',

  fontFamily: kit.font.family.system,
  fontWeight: kit.font.weight.MEDIUM,
  letterSpacing: '-0.03em',

  transition: '0.2s cubic-bezier(0.3, 0, 0.5, 1)',
  transitionProperty: 'color, backgroundColor, borderColor',
  willChange: 'color, backgroundColor, borderColor, boxShadow',

  ':hover': {},
  ':focus': {},
  ':active': {},
  ':disabled': {},

  selectors: {},
});

/** -------------------------------------------- */

export type ButtonSize = keyof typeof size;
export type ButtonVariant = keyof typeof variant;
export type ButtonVariantProps = RecipeVariants<typeof button>;
export const button = recipe({
  base: BUTTON_BASE,
  variants: { size, variant },
  defaultVariants: {
    size: 'sm',
    variant: 'slate',
  },
});
