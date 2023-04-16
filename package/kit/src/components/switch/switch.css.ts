/** @format */

import {style} from '@vanilla-extract/css'
import {kit} from '../../lib'

const SWITCH_WIDTH = '29px'
const SWITCH_HEIGHT = 'auto'
const TOGGLE_WIDTH = '14px'
const TOGGLE_HEIGHT = '14px'

export const switch_root = style({
  all: 'unset',
  appearance: 'none',
  outline: 'none',
  display: 'inline-flex',
  position: 'relative',
  verticalAlign: 'middle',

  width: SWITCH_WIDTH,
  height: SWITCH_HEIGHT,
  margin: 'auto',
  paddingTop: 2,
  paddingBottom: 2,
  paddingLeft: 0,
  paddingRight: 0,

  flexShrink: 0,
  backgroundColor: kit.color.slate2,
  borderRadius: kit.radii.PILL,
  border: 'none',
  borderStyle: 'none',

  ':active': {},
  ':hover': {},
  ':focus': {
    outline: 'none',
    boxShadow: `0 0 0 1.4px ${kit.color.slate6}`,
  },

  selectors: {
    '&[data-disabled]': {},
    '&[data-state="checked"]': {
      backgroundColor: kit.color.slate3,
    },
  },
})

export const switch_toggle = style({
  verticalAlign: 'middle',
  display: 'inline-flex',
  width: TOGGLE_WIDTH,
  height: TOGGLE_HEIGHT,
  backgroundColor: kit.color.slate6,
  borderRadius: kit.radii.PILL,
  willChange: 'transform',
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  selectors: {
    '&[data-state="checked"]': {
      transform: 'translateX(13px)',
      backgroundColor: kit.color.hyper6,
    },
  },
})
