import React from 'react';
import * as AVI from '@radix-ui/react-avatar';
import * as CSS from './avi.css';
import clsx from 'clsx';

import type { AviVariantProps, AviSize, AviShape } from './avi.css';

const AviImage = AVI.Image;
const AviFallback = AVI.Fallback;

interface AVI_PROPS {
  size?: AviSize;
  shape?: AviShape;
}

type AviPrimitiveProps = AVI_PROPS &
  AviVariantProps &
  React.ComponentProps<typeof AVI.Root>;
export type AviProps = AviPrimitiveProps;
const AviComponent = React.forwardRef<React.ElementRef<typeof AVI.Root>, AviProps>(
  ({ className, size = 'xs', shape = 'rounded', ...props }, forwardedRef) => {
    return (
      <AVI.Root
        {...props}
        ref={forwardedRef}
        className={clsx(CSS.avi({ size, shape }), className)}
      />
    );
  },
);

/** ------------------------------------------------------------------------------- */

export type FallbackProps = React.ComponentProps<typeof AVI.Fallback>;
const AviFallbackComponent = React.forwardRef<HTMLDivElement, FallbackProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <AviFallback
        {...props}
        ref={forwardedRef}
        className={clsx(CSS.fall_back, className)}
      />
    );
  },
);

/** ------------------------------------------------------------------------------- */

export type ImageProps = React.ComponentProps<typeof AVI.Image> & {
  className?: string;
  /**
   *
   * A callback providing information about
   * the loading status of the image.
   *
   * This is useful in case you want to control more
   * precisely what to render as the image is loading.
   */
  onLoadingChangeState?: (status: 'idle' | 'loading' | 'loaded' | 'error') => void;
};
const AviImageComponent = React.forwardRef<
  React.ElementRef<typeof AVI.Image>,
  ImageProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <AviImage
      {...props}
      ref={forwardedRef}
      className={clsx(CSS.avi_img, className)}
    />
  );
});

/** ------------------------------------------------------------------------------- */

const demo = 'https://cdn.atlrdsgn.com/assets/github/atlrdsgn/A2.jpg';
const AviDemoImageComponent = React.forwardRef<
  React.ElementRef<typeof AVI.Image>,
  ImageProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <AviImage
      {...props}
      ref={forwardedRef}
      src={demo}
      className={clsx(CSS.avi_img, className)}
    />
  );
});

/** -------------------------- Exports --------------------------------- */

export const Avi: React.FC<AviProps> & {
  Fallback: typeof AviFallbackComponent;
  Image: typeof AviImageComponent;
  Demo: typeof AviDemoImageComponent;
} = (props) => <AviComponent {...props} />;

Avi.Fallback = AviFallbackComponent;
Avi.Image = AviImageComponent;
Avi.Demo = AviDemoImageComponent;
// ..
Avi.displayName = 'Avi';
// ..
Avi.Fallback.displayName = 'AviFallback';
Avi.Image.displayName = 'AviImage';
Avi.Demo.displayName = 'AviDemoImage';
AviFallbackComponent.displayName = 'AviFallback';
AviImageComponent.displayName = 'AviImage';
AviDemoImageComponent.displayName = 'AviDemoImage';
