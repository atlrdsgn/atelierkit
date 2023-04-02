/** @format */

import React from 'react'
import * as css from './chip.css'
import clsx from 'clsx'

import type {
  ChipVariantProps,
  //..
  ChipSizeProps,
  ChipVProps,
} from './chip.css'

type BASE_CHIP_PROPS = {
  size?: ChipSizeProps
  variant?: ChipVProps

  className?: string
} & ChipVariantProps &
  React.HTMLAttributes<HTMLDivElement>

export type ChipProps = BASE_CHIP_PROPS
export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({children, className, ...rest}, ref) => {
    return (
      <div {...rest} className={clsx(className, css.chip({}))} ref={ref}>
        {children}
      </div>
    )
  }
)
