import React from 'react';
import clsx from 'clsx';
import { container } from './container.css';
import type {
  ContainerAlignment,
  ContainerBorder,
  ContainerVariantProps,
  ContainerWidth,
} from './container.css';

export type ContainerProps = ContainerVariantProps &
  React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    className?: string;
    width?: ContainerWidth;
    align?: ContainerAlignment;
    border?: ContainerBorder | boolean;
  };

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
      className={clsx(className, container({ width, align, border }))}>
      {children}
    </div>
  );
};

Container.displayName = 'Container';
