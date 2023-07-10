import React, { Children } from 'react';
import * as styles from './grid.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Rect, type DivProps } from '../rect';

export interface GridProps extends DivProps {
  gridItemMinWidth?: string;
  /** TODO: Different columns API? See https://css-tricks.com/responsive-layouts-fewer-media-queries/ */
  gridMaxRowItems?: number;
}

type Ref = HTMLDivElement;

export const gridStyles = styles ?? {};

/**
 * Grid layout with with responsive defaults, but also fully customizable with standard CSS grid properties.
 */
export const Grid = React.forwardRef<Ref, GridProps>(function Split(
  {
    children,
    gridItemMinWidth = '300px',
    gridMaxRowItems,
    style = {},
    ...props
  },
  ref,
) {
  return (
    <Rect
      {...props}
      ref={ref}
      className={`${styles.grid} ${props.className ?? ''}`}
      style={{
        ...style,
        ...assignInlineVars({
          [styles.gridItemMinWidth]: gridItemMinWidth,
          [styles.gridMaxRowItems]:
            (gridMaxRowItems && String(gridMaxRowItems)) ||
            String(Children.count(children)),
        }),
      }}
      flexDirection='row'>
      {children}
    </Rect>
  );
});
