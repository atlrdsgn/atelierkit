import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { kit } from '../../lib';

const styleProperties = {
  padding: {
    xsmall: '6px 10px',
    small: '8px 12px',
    medium: '10px 12px',
    large: '12px 18px',
  },
  radii: {
    xsmall: '9px',
    small: '9px',
    medium: '12px',
    large: '14px',
  },
  border: {
    xsmall: '1.5px solid',
    small: '1.5px solid',
    medium: '2px solid',
    large: '2px solid',
  },
  shadows: {
    slate: {
      initial: {
        xs: '0px 1px 2px -1px rgba(0, 0, 0, 0.25)',
        sm: 'none',
        md: 'none',
        lg: 'none',
      },
      hover: {
        xs: '0px 2px 4px rgba(0, 0, 0, 0.3)',
        sm: 'none',
        md: 'none',
        lg: 'none',
      },
      focus: {
        xs: '0px 1px 2px rgba(0, 0, 0, 0.25), 0px 0px 0px 3.5px rgba(0, 0, 0, 0.2)',
        sm: 'none',
        md: '0px 2px 4px rgba(17, 12, 34, 0.18), 0px 0px 0px 5px rgba(236, 236, 237, 1)',
        lg: '0px 2px 4px rgba(17, 12, 34, 0.12), 0px 0px 0px 6px rgba(236, 236, 237, 1)',
      },
    },
    hyper: {
      initial: {
        xs: '0px 1px 2px -1px rgba(102, 27, 95, 0.75)',
        sm: 'none',
        md: 'none',
        lg: 'none',
      },
      hover: {
        xs: '0px 2px 4px rgba(102, 27, 95, 0.3)',
        sm: '0px 3px 6px -1px rgba(102, 27, 95, 0.4)',
        md: 'none',
        lg: 'none',
      },
      focus: {
        xs: '0px 1px 2px rgba(102, 27, 95, 0.3), 0px 0px 0px 3.5px rgba(226, 220, 255, 1)',
        sm: '0px 1px 2px rgba(102, 27, 95, 0.3), 0px 0px 0px 4.5px rgba(255, 105, 241, 0.2)',
        md: 'none',
        lg: 'none',
      },
    },
  },
} as const;

const size = styleVariants(
  {
    xs: {
      fontSize: kit.font.size.MINI,
      lineHeight: kit.font.lineheight.MINI,
      padding: styleProperties.padding.xsmall,
      border: styleProperties.border.xsmall,
      borderRadius: styleProperties.radii.xsmall,
    },
    sm: {
      fontSize: kit.font.size.XS,
      lineHeight: kit.font.lineheight.XS,
      padding: styleProperties.padding.small,
      border: styleProperties.border.small,
      borderRadius: styleProperties.radii.small,
    },
    md: {
      fontSize: kit.font.size.MD,
      lineHeight: kit.font.lineheight.MD,
      padding: styleProperties.padding.medium,
      border: styleProperties.border.medium,
      borderRadius: styleProperties.radii.medium,
    },
    lg: {
      fontSize: kit.font.size.LG,
      lineHeight: kit.font.lineheight.LG,
      padding: styleProperties.padding.large,
      border: styleProperties.border.large,
      borderRadius: styleProperties.radii.large,
    },
  },
  (value) => ({
    fontSize: value.fontSize,
    lineHeight: value.lineHeight,
    padding: value.padding,
    border: value.border,
    borderRadius: value.borderRadius,

    ':hover': {},
    ':focus': {},
  }),
);

const variant = styleVariants(
  {
    slate: {
      backgroundColor: kit.color.slate1,
      borderColor: kit.color.slate2,
      color: kit.color.slate6,
    },
    jade: {
      backgroundColor: kit.color.volt8,
      borderColor: kit.color.volt9,
      color: kit.color.volt1,
    },
    hyper: {
      backgroundColor: kit.color.hyper5,
      borderColor: kit.color.hyper6,
      color: kit.color.white,
    },
    neon: {
      backgroundColor: kit.color.slate1,
      borderColor: kit.color.slate2,
      color: kit.color.slate6,
    },
  },
  (value) => ({
    backgroundColor: value.backgroundColor,
    color: value.color,

    ':hover': {},
    ':focus': {},
  }),
);

const buttonBase = style({
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
  gap: '8px',

  fontFamily: kit.font.family.system,
  fontWeight: kit.font.weight.MEDIUM,
  letterSpacing: 'normal',

  transition: '0.2s cubic-bezier(0.3, 0, 0.5, 1)',
  transitionProperty: 'color, backgroundColor, borderColor',
  willChange: 'color, backgroundColor, borderColor, boxShadow',

  ':hover': {},
  ':focus': {},
  ':active': {},
  ':disabled': {},

  selectors: {},
});

export type ButtonSize = keyof typeof size;
export type ButtonVariant = keyof typeof variant;
export type ButtonVariantProps = RecipeVariants<typeof button>;
export const button = recipe({
  base: buttonBase,
  variants: { size, variant },
  defaultVariants: {
    size: 'sm',
    variant: 'slate',
  },
});
