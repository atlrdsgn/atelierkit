import { style } from '@vanilla-extract/css';
import { globalStyle } from '@vanilla-extract/css';
import { kit } from '../kit.css';

/**
 *
 * the following code is
 * pulled from the Braid Design System..
 *
 * https://github.com/seek-oss/braid-design-system/blob/master/packages/braid-design-system/lib/css/reset/reset.css.ts
 */

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  color: kit.color.slate10,
  backgroundColor: kit.color.gray300,
  fontFamily: kit.font.family.system,
});

export const globalCss = style({
  ...globalStyle,
});
