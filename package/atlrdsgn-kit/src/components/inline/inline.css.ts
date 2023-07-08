import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { atoms } from '../../lib';
import { kit } from '../../lib';

const FONT_MAP = {
  inherit: { fontFamily: 'inherit' },
  system: { fontFamily: kit.font.family.system },
  mono: { fontFamily: kit.font.family.mono },
} as const;

const font = styleVariants(FONT_MAP, (value) => ({
  fontFamily: value.fontFamily,
}));

/** ----------------------------------------------- */

const INLINE_BASE = style({
  padding: 'inherit',
  margin: 'inherit',
  fontSize: 'inherit',
  display: 'inline',
  verticalAlign: 'baseline',
  whiteSpace: 'normal',
  wordBreak: 'normal',
  wordSpacing: 'normal',
  wordWrap: 'normal',
  overflowWrap: 'normal',
  color: 'inherit',
  textDecoration: 'inherit',
  textTransform: 'inherit',
  textAlign: 'inherit',
});

/**
 * The `text` recipe combines the `font`, `size`, `weight`, `color`, and `align` style variants
 * into a single CSS rule, with default values set.
 *
 * Usage:
 *
 * <Text font="system" size="md" weight="medium" color="slate5" align="left" />
 * (or)
 * `className={text({ font: 'system', size: 'md', weight: 'medium', color: 'slate5', align: 'left' })}`
 */
export type InlineFontOptions = keyof typeof font;
export type InlineVariantProps = RecipeVariants<typeof inline>;
export const inline = recipe({
  base: INLINE_BASE,
  variants: {
    font,
    hover: {
      true: atoms({
        transitionProperty: 'all',
        transitionDuration: '150ms',
        transitionTimingFunction: 'linear',
      }),
      false: {},
    },
    strong: {
      true: atoms({
        fontWeight: 'bold',
      }),
      false: {},
    },
  },
  defaultVariants: {
    font: 'inherit',
    hover: false,
    strong: false,
  },
});
