/** @format */

import React from 'react'
import * as css from './button.css'

import type {BASE_BUTTON_PROPS} from './button.types'
import type {ButtonVariantProps} from './button.css'

type ButtonProps = BASE_BUTTON_PROPS & ButtonVariantProps & React.HTMLAttributes<HTMLButtonElement>

export const Button = ({
  children,
  type = 'button',
  as = 'a',
  onClick = () => {},
  href,
  target = '_self',
  rel = 'noopener noreferrer',
  // ..
  size = 'sm',
  variant = 'hyper',
  ...rest
}: ButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      event.preventDefault()
      window.open(href, target, rel)
    } else {
      event.preventDefault()
    }

    onClick(event)
  }

  return (
    <button {...rest} type={type} className={css.button({size, variant})} onClick={handleClick}>
      {children}
    </button>
  )
}

export type {ButtonProps}
Button.displayName = 'Button'
