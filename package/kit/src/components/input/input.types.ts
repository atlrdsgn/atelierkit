/** @format */

import type {InputSize, InputColorVariant} from './input.css'

export interface BASE_INPUT_PROPS {
  /**
   *
   * class prop for clsx
   */
  className?: string
  /**
   *
   * input size prop
   */
  size?: InputSize
  variant?: InputColorVariant
}

export interface InputRootProps {
  className?: string
  children?: React.ReactNode
}

export interface InputLabelProps {
  className?: string
  children?: React.ReactNode
}
