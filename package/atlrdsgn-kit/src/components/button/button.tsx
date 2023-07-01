import React from 'react';

import { button } from './btn.css';

import type { BASE_BUTTON_PROPS } from './button.types';
import type { ButtonVariantProps } from './button.css';

type ButtonElementProps = BASE_BUTTON_PROPS &
  ButtonVariantProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
export type ButtonProps = ButtonElementProps;

export const Button = ({
  children,
  type = 'button',
  as = 'a',
  onClick = () => {},
  href,
  target = '_self',
  rel = 'noopener noreferrer',
  size = 'sm',
  variant = 'hyper',
  ...rest
}: ButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      event.preventDefault();
      window.open(href, target, rel);
    } else {
      event.preventDefault();
    }

    onClick(event);
  };

  return (
    <button
      {...rest}
      type={type}
      className={button({ size, variant })}
      onClick={handleClick}>
      {children}
    </button>
  );
};

Button.displayName = 'Button';
