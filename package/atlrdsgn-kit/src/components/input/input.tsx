/** @format */

import React from 'react'
import * as css from './input.css'
import clsx from 'clsx'

import type {InputVariantProps} from './input.css'
import type {BASE_INPUT_PROPS, InputRootProps, InputLabelProps} from './input.types'

const InputRootComponent = React.forwardRef<HTMLDivElement, InputRootProps>(
  ({children, className, ...props}, ref) => {
    return (
      <div ref={ref} className={clsx(className, css.input_root)} {...props}>
        {children}
      </div>
    )
  }
)

const InputLabelComponent = React.forwardRef<HTMLLabelElement, InputLabelProps>(
  ({children, className, ...props}, ref) => {
    return (
      <label ref={ref} className={clsx(className, css.input_label)} {...props}>
        <span>{children}</span>
      </label>
    )
  }
)

type InputPrimitiveProps = BASE_INPUT_PROPS &
  InputVariantProps &
  React.HTMLAttributes<HTMLInputElement>
export type InputProps = InputPrimitiveProps
const InputFieldComponent = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, size = 'medium', variant = 'slate', ...rest}, ref) => {
    return (
      <input ref={ref} className={clsx(className, css.input_field({size, variant}))} {...rest} />
    )
  }
)

/** ---------------------------------------------------------- */

export const Input: React.FC<InputProps> & {
  Flex: typeof InputRootComponent
  Label: typeof InputLabelComponent
} = (props) => <InputFieldComponent {...props} />

Input.Flex = InputRootComponent
Input.Label = InputLabelComponent

Input.displayName = 'Input'
InputRootComponent.displayName = 'Input.Flex'
InputLabelComponent.displayName = 'Input.Label'
