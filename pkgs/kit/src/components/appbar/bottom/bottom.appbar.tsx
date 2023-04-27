/** @format */

import React from 'react'
import * as css from './bottom.appbar.css'
import clsx from 'clsx'

import type {
  AppbarLinkVariantProps,
  //..
  AppbarLinkAlignment,
  AppbarLinkColor,
} from './bottom.appbar.css'

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

/** ---------------------------------------------------------- */

type BottomAppbarLinkPrimitiveProps = {
  children: React.ReactNode
  /**
   *
   *
   */
  href?: string
  target?: '_self' | '_blank' | '_parent' | '_top' | string
  /**
   *
   * the size of the link.
   * -- font-size.
   */
  className?: string
  alignment?: AppbarLinkAlignment
  color?: AppbarLinkColor
} & AppbarLinkVariantProps &
  React.HTMLAttributes<HTMLAnchorElement>
export type BottomAppbarLinkProps = BottomAppbarLinkPrimitiveProps
const TopAppbarLinkComponent = React.forwardRef<HTMLAnchorElement, BottomAppbarLinkProps>(
  (
    {className, children, href, target = '_self', alignment, color = 'slate9', ...rest},
    forwardedRef
  ) => {
    return (
      <a
        ref={forwardedRef}
        href={href}
        target={target}
        className={clsx(className, css.appbar_link({alignment, color}))}
        {...rest}
      >
        {children}
      </a>
    )
  }
)
