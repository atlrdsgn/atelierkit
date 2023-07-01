import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { link } from './passlink.css';
import type { LinkColorProps, LinkFontProps, LinkSizeProps } from './passlink.css';

interface LinkElementProps {
  children: React.ReactNode;
  /**
   *
   *
   */
  href?: string;
  target?: '_self' | '_blank' | '_parent' | '_top' | string;
  /**
   *
   * the size of the link.
   * -- font-size.
   */
  className?: string;
  size?: LinkSizeProps;
  variant?: LinkColorProps;
  font?: LinkFontProps;
}

export type PassLinkProps = LinkElementProps & React.HTMLAttributes<HTMLAnchorElement>;
export const PassLink = forwardRef<HTMLAnchorElement, PassLinkProps>(
  (
    {
      children,
      className,
      href,
      variant,
      target = '_self',
      size = 'sm',
      font = 'inherit',
      ...rest
    },
    forwardedRef,
  ) => (
    <a
      ref={forwardedRef}
      href={href}
      target={target}
      className={clsx(link({ size, variant }), className)}
      {...rest}>
      {children}
    </a>
  ),
);

PassLink.displayName = 'PassLink';
