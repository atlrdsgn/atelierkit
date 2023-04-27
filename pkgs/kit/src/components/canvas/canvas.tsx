/** @format */

import React from 'react'
import * as css from './canvas.css'

import clsx from 'clsx'

interface CanvasProps {
  children?: React.ReactNode
  className?: string
}

export const Canvas = React.forwardRef<HTMLDivElement, CanvasProps>(
  ({children, ...props}, forwardedRef) => {
    return (
      <div ref={forwardedRef} className={clsx(css.canvas)} {...props}>
        {children}
      </div>
    )
  }
)

export const BlurredCanvas = React.forwardRef<HTMLDivElement, CanvasProps>(
  ({children, ...props}, forwardedRef) => {
    return (
      <div ref={forwardedRef} className={clsx(css.canvas_blur)} {...props}>
        {children}
      </div>
    )
  }
)

Canvas.displayName = 'Canvas'
BlurredCanvas.displayName = 'Blurred-Canvas'

export type {CanvasProps}
