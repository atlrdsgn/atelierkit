/** @format */

import React from 'react'
import * as css from './container.css'
import type {ContainerVariantProps, ContainerWidth, ContainerAlignment} from './container.css'

import clsx from 'clsx'

interface BASE_CONTAINER_PROPS {
  children: React.ReactNode

  /**
   *
   * className to be passed to the section.
   */
  className?: string
  width?: ContainerWidth
  align?: ContainerAlignment
}

export type ContainerProps = BASE_CONTAINER_PROPS &
  ContainerVariantProps &
  React.HTMLAttributes<HTMLDivElement>

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  width = 'max',
  align = 'start',
  ...rest
}) => {
  return (
    <div {...rest} className={clsx(className, css.container({width, align}))}>
      {children}
    </div>
  )
}

Container.displayName = 'Container'
