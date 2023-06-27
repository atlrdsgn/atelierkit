import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { kit } from '../../lib';

const SIZE_MAP = {
  xs: { fontSize: kit.font.size.XS, lineHeight: kit.font.lineheight.XS },
  sm: { fontSize: kit.font.size.SM, lineHeight: kit.font.lineheight.SM },
  md: { fontSize: kit.font.size.MD, lineHeight: kit.font.lineheight.MD },
  lg: { fontSize: kit.font.size.LG, lineHeight: kit.font.lineheight.LG },
  xl: { fontSize: kit.font.size.XL, lineHeight: kit.font.lineheight.XL },
} as const;

const WEIGHT_MAP = {
  superlite: { fontWeight: kit.font.weight.SUPRLITE },
  lite: { fontWeight: kit.font.weight.LITE },
  normal: { fontWeight: kit.font.weight.REGULAR },
  medium: { fontWeight: kit.font.weight.MEDIUM },
  semibold: { fontWeight: kit.font.weight.SEMIBOLD },
  bold: { fontWeight: kit.font.weight.BOLD },
  heavy: { fontWeight: kit.font.weight.HEAVY },
  black: { fontWeight: kit.font.weight.BLACK },
} as const;

const ALIGN_OPTIONS = {
  left: {
    textAlign: 'left',
    alignItems: 'flex-start',
  },
  center: {
    textAlign: 'center',
    alignItems: 'center',
  },
  right: {
    textAlign: 'right',
    alignItems: 'flex-end',
  },
} as const;

const FONT_MAP = {
  system: { fontFamily: kit.font.family.system },
  inter: { fontFamily: kit.font.family.system },
  mono: { fontFamily: kit.font.family.mono },
} as const;

/** ---------------------------------------------- */

const size = {
  ...styleVariants(SIZE_MAP, (value) => ({
    fontSize: value.fontSize,
    lineHeight: value.lineHeight,
  })),
} as const;

const color = {
  ...styleVariants(kit.color, (value) => ({
    color: value,
  })),
} as const;

const weight = {
  ...styleVariants(WEIGHT_MAP, (value) => ({
    fontWeight: value.fontWeight,
  })),
} as const;

const align = {
  ...styleVariants(ALIGN_OPTIONS, (value) => ({
    textAlign: value.textAlign,
    alignItems: value.alignItems,
  })),
} as const;

export const font = {
  ...styleVariants(FONT_MAP, (value) => ({
    fontFamily: value.fontFamily,
  })),
} as const;

/** ---------------------------------------------- */

const PARAGRAPH_BASE = style({});

export const paragraph = recipe({
  base: [PARAGRAPH_BASE],
  variants: { size, color, weight, align, font },
  defaultVariants: {
    size: 'sm',
    color: 'slate12',
    weight: 'normal',
    align: 'left',
    font: 'system',
  },
});

export type ParagraphSizeProps = keyof typeof size;
export type ParagraphColorProps = keyof typeof color;
export type ParagraphWeightProps = keyof typeof weight;
export type ParagraphAlignProps = keyof typeof align;
export type ParagraphFontProps = keyof typeof font;

export type ParagraphVariantProps = RecipeVariants<typeof paragraph>;
