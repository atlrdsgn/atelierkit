import React, { forwardRef } from 'react';
import { space as createSpace, SpaceSizeProps } from './space.css';

interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  size?: SpaceSizeProps;
}

export const Space = forwardRef<HTMLDivElement, SpaceProps>(
  ({ size = 'sm', className, ...props }, forwardedRef) => {
    const spaceClassName = createSpace({ size });

    return (
      <div
        {...props}
        ref={forwardedRef}
        className={className ? `${className} ${spaceClassName}` : spaceClassName}
      />
    );
  },
);

Space.displayName = 'Space';
