/** @format */

import {style} from '@vanilla-extract/css'
import {kit} from '../../lib'

const ROOT_RADII = '9px'
const ITEM_RADII = '6px'
const TRIGGER_RADII = '6px'
const ITEM_PADDING = '4px 14px'

const ITEM_CSS = {
  BASE: {
    all: 'unset',
    boxSizing: 'border-box',
    userSelect: 'none',
    outline: 'none',
    cursor: 'pointer',
    fontVariantNumeric: 'tabular-nums',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',

    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: ITEM_PADDING,

    color: kit.color.slate8,
    backgroundColor: kit.color.slate1,

    borderRadius: ITEM_RADII,
    minHeight: '28px',
    height: 'auto',

    fontFamily: kit.font.family.system,
    fontWeight: kit.font.weight.MEDIUM,
    fontSize: kit.font.size.XS,
    lineHeight: kit.font.lineheight.XS,
  },
  SELECTORS: {
    // '&[data-disabled]'
    DISABLED: {
      color: kit.color.slate3,
      pointerEvents: 'none',
    },
    // '&[data-highlighted]'
    HIGHLIGHTED: {
      backgroundColor: kit.color.sapphire3,
      color: kit.color.slate9,
    },
  },
} as const

/** ---------------------------------------------------------- */
export const menubar_root = style({
  boxSizing: 'border-box',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: kit.color.slate1,
  border: `0.5px solid ${kit.color.slate3}`,
  borderRadius: ROOT_RADII,
  padding: '3px',
  gap: '3px',

  width: 'auto',
  margin: 'auto',
})

export const menubar_trigger = style({
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  outline: 0,
  cursor: 'pointer',
  fontVariantNumeric: 'tabular-nums',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  /**
   *
   * this should match menubar_item.
   */
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  padding: ITEM_PADDING,

  fontFamily: kit.font.family.system,
  fontWeight: kit.font.weight.MEDIUM,
  fontSize: kit.font.size.XS,
  lineHeight: kit.font.lineheight.XS,

  borderRadius: TRIGGER_RADII,
  color: kit.color.slate9,

  /**
   * if we add icons.
   */
  gap: '4px',

  selectors: {
    '&[data-highlighted], &[data-state="open"]': {
      backgroundColor: kit.color.sapphire4,
    },
  },
})

export const menubar_item = style({
  userSelect: 'none',
  outline: 'none',
  cursor: 'pointer',
  fontVariantNumeric: 'tabular-nums',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: ITEM_PADDING,

  color: kit.color.slate8,
  backgroundColor: kit.color.slate1,

  borderRadius: ITEM_RADII,
  minHeight: '28px',
  height: 'auto',

  fontFamily: kit.font.family.system,
  fontWeight: kit.font.weight.MEDIUM,
  fontSize: kit.font.size.XS,
  lineHeight: kit.font.lineheight.XS,

  ':hover': {
    cursor: 'pointer',
    outline: 'none',
  },

  ':focus': {
    outline: 'none',
  },

  selectors: {
    '&[data-disabled]': {
      color: ITEM_CSS.SELECTORS.DISABLED.color,
      pointerEvents: ITEM_CSS.SELECTORS.DISABLED.pointerEvents,
    },
    '&[data-highlighted]': {
      backgroundColor: ITEM_CSS.SELECTORS.HIGHLIGHTED.backgroundColor,
      color: ITEM_CSS.SELECTORS.HIGHLIGHTED.color,
    },
  },
})

export const menubar_content = style({
  width: 'auto',
  minWidth: '220px',
  maxWidth: '380px',
  padding: '3px',

  backgroundColor: kit.color.slate1,
  border: `0.5px solid ${kit.color.slate3}`,
  borderRadius: ROOT_RADII,

  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  selectors: {
    '&[data-state="open"]': {},
    '&[data-state="closed"]': {},
    '&[data-side="top"], &[data-side="bottom"]': {},
    '&[data-side="left"], &[data-side="right"]': {},

    '&[data-state="open"][data-side="top"]': {},
    '&[data-state="open"][data-side="bottom"]': {},
    '&[data-state="open"][data-side="left"]': {},
    '&[data-state="open"][data-side="right"]': {},
  },
})

/** ---------------------------------------------- */

export const submenu_trigger = style({
  ...ITEM_CSS.BASE,
  selectors: {
    '&[data-state="open"]': {
      backgroundColor: kit.color.slate1,
      color: kit.color.slate8,
    },
  },
})

export const submenu_content = style({
  width: 'auto',
  minWidth: '220px',
  maxWidth: '380px',
  padding: '3px',

  backgroundColor: kit.color.slate1,
  border: `0.5px solid ${kit.color.slate3}`,
  borderRadius: ROOT_RADII,

  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
})

/** ----------------------------------------------- */

export const menubar_item_indicator = style({
  position: 'absolute',
  left: 0,
  width: 20,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const item_right_slot = style({
  marginLeft: 'auto',
  paddingLeft: 20,
  color: kit.color.slate6,
  selectors: {
    '[data-highlighted] > &': {color: 'white'},
    '[data-disabled] &': {color: kit.color.slate3},
  },
})

export const menubar_separator = style({
  height: 1,
  backgroundColor: kit.color.slate5,
  margin: 5,
})
