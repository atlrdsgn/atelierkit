/** @format */

import React from 'react';
import * as css from './canvas.css';

import clsx from 'clsx';

interface CanvasProps {
  children?: React.ReactNode;
  className?: string;
}

export const Canvas = React.forwardRef<HTMLDivElement, CanvasProps>(({ children, ...rest }, forwardedRef) => {
  return (
    <div
      ref={forwardedRef}
      className={clsx(css.canvas)}
      {...rest}>
      {children}
    </div>
  );
});

export const CanvasBlur = React.forwardRef<HTMLDivElement, CanvasProps>(({ children, ...rest }, forwardedRef) => {
  return (
    <div
      ref={forwardedRef}
      className={clsx(css.canvas_blur)}
      {...rest}>
      {children}
    </div>
  );
});

Canvas.displayName = 'Canvas';
CanvasBlur.displayName = 'Blurred-Canvas';

export type { CanvasProps };
