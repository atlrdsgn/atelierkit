import clsx from 'clsx';

import * as styleRes from '../injected/reset.css';
import { Sprinkles, sprinkles } from './sprinkles.css';

export type Atomss = Sprinkles & {
  reset?: styleRes.KitElement & keyof JSX.IntrinsicElements;
};

export type Atoms = Sprinkles & {
  reset?: (styleRes.KitElement & keyof JSX.IntrinsicElements & React.ElementType) | 'div';
};

export const atomss = ({ reset, ...rest }: Atoms) => {
  const sprinklesClasses = sprinkles(rest);

  return clsx(reset && [styleRes.base, styleRes.element[reset]], sprinklesClasses);
};

export const atoms = ({ reset, ...rest }: Atoms) => {
  const sprinklesClasses = sprinkles(rest);

  const resetClass = reset ? [styleRes.base, styleRes.element[reset]] : null;

  return clsx(resetClass, sprinklesClasses);
};
