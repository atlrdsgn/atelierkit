import React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import clsx from 'clsx';
import { popoverContent } from './popover.css';

const PopoverPortal = PopoverPrimitive.Portal;
const PopoverRoot = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;

type PopoverPrimitiveProps = {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
} & React.ComponentProps<typeof PopoverRoot>;
type PopoverProps = PopoverPrimitiveProps;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(
  (
    { className, align = 'center', sideOffset = 6, side = 'bottom', ...props },
    ref,
  ) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        side={side}
        className={clsx(popoverContent, className)}
        {...props}
      />
    </PopoverPrimitive.Portal>
  ),
);

export const Popover: React.FC<PopoverProps> & {
  Trigger: typeof PopoverTrigger;
  Content: typeof PopoverContent;
  Portal: typeof PopoverPortal;
  //..
  Anchor: typeof PopoverPrimitive.Anchor;
  Arrow: typeof PopoverPrimitive.Arrow;
  Close: typeof PopoverPrimitive.Close;
} = (props) => <PopoverRoot {...props} />;

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
Popover.Portal = PopoverPortal;
Popover.Anchor = PopoverPrimitive.Anchor;
Popover.Arrow = PopoverPrimitive.Arrow;
Popover.Close = PopoverPrimitive.Close;
// ..
Popover.displayName = 'Popover';
// ..
Popover.Trigger.displayName = 'PopoverTrigger';
Popover.Content.displayName = 'PopoverContent';
Popover.Portal.displayName = 'PopoverPortal';
Popover.Anchor.displayName = 'PopoverAnchor';
Popover.Arrow.displayName = 'PopoverArrow';
Popover.Close.displayName = 'PopoverClose';
// ..
export type { PopoverProps };
