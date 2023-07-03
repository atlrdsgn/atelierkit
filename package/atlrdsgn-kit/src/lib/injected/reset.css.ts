import { style as styleRes } from '@vanilla-extract/css';
import { kit } from '../kit.css';
/**
 *
 * the following code is
 * pulled from the Braid Design System..
 *
 * https://github.com/seek-oss/braid-design-system/blob/master/packages/braid-design-system/lib/css/reset/reset.css.ts
 */

export const base = styleRes({
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: 'border-box',
  fontSize: '100%',
  font: 'inherit',
  verticalAlign: 'baseline',
  WebkitTapHighlightColor: 'transparent',
  textDecoration: 'none',
});

// HTML5 display-role reset for older browsers
const block = styleRes({
  display: 'block',
});

const body = styleRes({
  lineHeight: 1,
});

const list = styleRes({
  listStyle: 'none',
});

const quote = styleRes({
  quotes: 'none',
  selectors: {
    '&:before, &:after': {
      content: "''",
    },
  },
});

const table = styleRes({
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

const appearance = styleRes({
  appearance: 'none',
});

const transparent = styleRes({
  backgroundColor: 'transparent',
});

const field = styleRes([
  block,
  appearance,
  styleRes({
    outline: 'none',
    '::placeholder': {
      color: kit.color.slate5,
      opacity: 1,
    },
  }),
]);

// Custom reset rules
const mark = styleRes([
  transparent,
  {
    color: 'inherit',
  },
]);

const select = styleRes([
  field,
  styleRes({
    ':disabled': {
      opacity: 1,
    },
    selectors: {
      '&::-ms-expand': {
        display: 'none',
      },
    },
  }),
]);

const input = styleRes([
  field,
  styleRes({
    selectors: {
      ['&[type="number"]']: {},
      [[
        '&[type="number"]::-webkit-inner-spin-button',
        '&[type="number"]::-webkit-outer-spin-button',
      ].join(',')]: {
        WebkitAppearance: 'none',
        margin: 0,
      },
      '&::-ms-clear': {
        display: 'none',
      },
      '&::-webkit-search-cancel-button': {
        WebkitAppearance: 'none',
      },
    },
  }),
]);

const button = styleRes([transparent]);

const a = styleRes({
  textDecoration: 'none',
  color: 'inherit',
});

/**
 *
 *
 * type of elements..
 */
export const element = {
  article: block,
  aside: block,
  details: block,
  figcaption: block,
  figure: block,
  footer: block,
  header: block,
  hgroup: block,
  menu: block,
  nav: block,
  section: block,
  ul: list,
  ol: list,
  blockquote: quote,
  q: quote,
  body,
  a,
  table,
  mark,
  select,
  button,
  textarea: field,
  input,
};

export type KitElement = keyof typeof element;
