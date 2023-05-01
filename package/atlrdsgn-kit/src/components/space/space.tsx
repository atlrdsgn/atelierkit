/** @format */

import React from 'react'
import * as css from './space.css'

import type {SpaceVariantProps, SpaceSizeProps} from './space.css'

interface BASE_SPACE_PROPS {
  className?: string
  size?: SpaceSizeProps
}

export type SpaceProps = BASE_SPACE_PROPS & SpaceVariantProps & React.HTMLAttributes<HTMLDivElement>

export const Space = React.forwardRef<HTMLDivElement, SpaceProps>(
  ({size = 'sm', ...props}, forwardedRef) => (
    <div {...props} ref={forwardedRef} className={css.space({size})} />
  )
)

Space.displayName = 'Space'
