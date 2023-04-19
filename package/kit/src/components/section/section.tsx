/** @format */

import React from 'react'
import * as css from './section.css'
import type {SectionVariantProps, SectionSize} from './section.css'

import clsx from 'clsx'

interface BASE_SECTION_PROPS {
  children: React.ReactNode

  /**
   *
   * className to be passed to the section.
   */
  className?: string
  size?: SectionSize
}

export type SectionProps = BASE_SECTION_PROPS &
  SectionVariantProps &
  React.HTMLAttributes<HTMLDivElement>

export const Section: React.FC<SectionProps> = ({children, className, size = 'vw', ...rest}) => {
  return (
    <div {...rest} className={clsx(className, css.section({size}))}>
      {children}
    </div>
  )
}

Section.displayName = 'Section'
