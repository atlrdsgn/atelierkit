/** @format */

import React from 'react'
import * as css from './top.appbar.css'
import clsx from 'clsx'

import type {
  AppbarLinkVariantProps,
  //..
  AppbarLinkAlignment,
  AppbarLinkColor,
} from './top.appbar.css'

interface BASE_APPBAR_PROPS {
  className?: string
  children?: React.ReactNode
}

type TopAppbarPrimitiveProps = BASE_APPBAR_PROPS & React.HTMLAttributes<HTMLDivElement>
export type TopAppbarProps = TopAppbarPrimitiveProps
const TopAppbarComponent = React.forwardRef<HTMLDivElement, TopAppbarProps>(
  ({className, children, ...rest}, forwardedRef) => {
    return (
      <div ref={forwardedRef} className={clsx(css.top_appbar, className)} {...rest}>
        {children}
      </div>
    )
  }
)

/** ---------------------------------------------------------- */

type TopAppbarLinkPrimitiveProps = {
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
export type TopAppbarLinkProps = TopAppbarLinkPrimitiveProps
const TopAppbarLinkComponent = React.forwardRef<HTMLAnchorElement, TopAppbarLinkProps>(
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

/** ---------------------------------------------------------- */

export const TopAppbar: React.FC<TopAppbarProps> & {
  Link: typeof TopAppbarLinkComponent
} = (props) => <TopAppbarComponent {...props} />

TopAppbar.Link = TopAppbarLinkComponent

TopAppbar.displayName = 'Appbar'
TopAppbar.Link.displayName = 'Appbar.Link'
