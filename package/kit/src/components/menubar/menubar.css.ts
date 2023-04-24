/** @format */

import {style} from '@vanilla-extract/css'
import {kit} from '../../lib'

const CONTENT_CSS = {
  minWidth: 220,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
} as const

const ITEM_CSS = {
  BASE: {
    all: 'unset',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    padding: '0 10px',
    color: kit.color.slate8,
    borderRadius: 4,
    height: 25,
    fontSize: 13,
    lineHeight: 1,
  },
  SELECTORS: {
    // '&[data-disabled]'
    DISABLED: {
      color: kit.color.slate3,
      pointerEvents: 'none',
    },
    // '&[data-highlighted]'
    HIGHLIGHTED: {
      backgroundColor: kit.color.slate1,
      color: kit.color.slate9,
    },
  },
} as const

/** ---------------------------------------------------------- */
export const menubar_root = style({
  display: 'flex',
  backgroundColor: 'white',
  padding: 3,
  borderRadius: 6,
})

export const menubar_menu = style({})

export const menubar_trigger = style({
  all: 'unset',
  boxSizing: 'border-box',
  outline: 'none',
  userSelect: 'none',
  /**
   *
   * this should match menubar_item.
   */
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '8px 12px',
  fontWeight: 500,
  fontSize: 13,
  lineHeight: 1,

  borderRadius: 4,
  color: kit.color.slate9,
  gap: 2,

  selectors: {
    '&[data-highlighted], &[data-state="open"]': {
      backgroundColor: kit.color.slate1,
    },
  },
})

export const menubar_item = style({
  ...ITEM_CSS.BASE,
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
  ...CONTENT_CSS,
})

/** ---------------------------------------------- */

export const submenu = style({})

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
  ...CONTENT_CSS,
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
