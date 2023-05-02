import React from 'react';
import * as css from './container.css';
import type {
  ContainerVariantProps,
  ContainerWidth,
  ContainerAlignment,
  ContainerBorder,
} from './container.css';

import clsx from 'clsx';

interface BASE_CONTAINER_PROPS {
  children: React.ReactNode;

  /**
   *
   * className to be passed to the section.
   */
  className?: string;
  width?: ContainerWidth;
  align?: ContainerAlignment;
  border?: ContainerBorder | boolean;
}

type ContainerProps = BASE_CONTAINER_PROPS &
  ContainerVariantProps &
  React.HTMLAttributes<HTMLDivElement>;

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  width = 'max',
  align = 'start',
  border = false,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={clsx(className, css.container({ width, align, border }))}>
      {children}
    </div>
  );
};

Container.displayName = 'Container';

export type { ContainerProps };
