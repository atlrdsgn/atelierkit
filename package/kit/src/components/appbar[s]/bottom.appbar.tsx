/** @format */

import React from 'react'
import * as css from './bottom.appbar.css'
import clsx from 'clsx'

interface BASE_APPBAR_PROPS {
  className?: string
  children?: React.ReactNode
}

type BottomAppbarPrimitiveProps = BASE_APPBAR_PROPS & React.HTMLAttributes<HTMLDivElement>
export type BottomAppbarProps = BottomAppbarPrimitiveProps
export const BottomAppbar = React.forwardRef<HTMLDivElement, BottomAppbarProps>(
  ({className, children, ...rest}, forwardedRef) => {
    return (
      <div ref={forwardedRef} className={clsx(css.bottom_appbar, className)} {...rest}>
        {children}
      </div>
    )
  }
)
