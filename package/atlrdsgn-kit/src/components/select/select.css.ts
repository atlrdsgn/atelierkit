import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { kit } from '../../lib';

const TRGGR_PADDING_LEFT = 14;
const TRGGR_PADDING_RIGHT = 6;

/** ------------------------------------ */

export const select_root = style({
  all: 'unset',
  position: 'relative',
  backgroundColor: kit.color.transparent,
  selectors: {
    '&[data-state="open"]': {},
  },
});

export const select_trigger = style({
  display: 'inline-flex',
  flexDirection: 'row',
  margin: 'auto',
  alignItems: 'center',
  justifyContent: 'space-between',

  gap: 20,
  width: 'auto',
  height: 32,
  minWidth: 140,

  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.SM,
  fontWeight: kit.font.weight.SEMIBOLD,
  lineHeight: kit.font.lineheight.SM,

  color: kit.color.slate9,
  border: `1.5px solid ${kit.color.slate6}`,
  borderRadius: kit.radii.LG,
  backgroundColor: kit.color.slate1,

  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: TRGGR_PADDING_LEFT,
  paddingRight: TRGGR_PADDING_RIGHT,
  // boxShadow: `0 2px 3px ${KitColors.slateA7}`,
  ':hover': { backgroundColor: kit.color.slate3 },
  ':focus': { boxShadow: `0 0 0 2px ${kit.color.hyper4}` },

  selectors: {
    '&[data-placeholder]': { color: kit.color.slate9 },
    '&[data-disabled]': {},
  },
});

export const select_content = style({
  zIndex: 999,

  maxHeight: 'var(--radix-select-content-available-height)',
  width: 'var(--radix-select-trigger-width)',

  color: kit.color.slate9,
  borderRadius: kit.radii.LG,

  backgroundColor: kit.color.white,
  backdropFilter: 'blur(20px) saturate(180%)',
  WebkitBackdropFilter: 'blur(20px) saturate(180%)',

  overflow: 'hidden',
  scrollbarWidth: 'none',

  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',

  selectors: {
    '&::-webkit-scrollbar': {},
    '&[data-state="open"]': {},
    '&[data-state="closed"]': {},
  },
});

export const select_item = style({
  userSelect: 'none',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 24,

  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.SM,
  fontWeight: kit.font.weight.MEDIUM,
  lineHeight: kit.font.lineheight.SM,

  backgroundColor: kit.color.slate1,
  color: kit.color.slate11,
  borderRadius: kit.radii.LG,

  paddingLeft: 8,
  paddingRight: 8,
  paddingTop: 2,
  paddingBottom: 2,

  ':hover': {
    cursor: 'pointer',
    outline: 'none',
  },

  ':focus': {
    outline: 'none',
  },

  ':disabled': {
    color: kit.color.slate8,
    pointerEvents: 'none',
  },

  selectors: {
    '&[data-highlighted]': {
      backgroundImage: kit.color.hyper5,
      backgroundColor: kit.color.hyper5,
      background: kit.color.hyper5,
      color: kit.color.slate1,
    },
  },
});

export const select_item_indicate = style({
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const select_label = style({
  all: 'unset',
  fontFamily: kit.font.family.system,
  fontSize: kit.font.size.XS,
  fontWeight: kit.font.weight.MEDIUM,
  color: kit.color.hyper5,
  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 8,
  paddingRight: 8,
  textAlign: 'left',
  lineHeight: '32px',
});

export const select_separator = style({
  all: 'unset',
  height: 1,
  backgroundColor: kit.color.slate4,
  margin: 5,
});

export const select_icon = style({});

export const select_group = style({});

/** ------------------------------------------------ */

const SCROLL = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: kit.color.slate12,
  cursor: 'default',
} as const;

export const scroll_down = style({
  ...SCROLL,
});

export const scroll_up = style({
  ...SCROLL,
});
