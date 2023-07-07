import React from 'react';
import * as HOV from '@radix-ui/react-hover-card';
import clsx from 'clsx';

// css
import * as H from './hover.card.css';

const HoverCardArrow = HOV.Arrow;
const HoverCardRoot = HOV.Root;
const HoverCardPortal = HOV.Portal;

type HoverCardTriggerProps = {
  children?: React.ReactNode;
  className?: string;
} & React.ComponentProps<typeof HOV.Trigger>;

const HoverCardTrigger = React.forwardRef<
  React.ElementRef<typeof HOV.Trigger>,
  HoverCardTriggerProps
>((props, ref) => {
  return (
    <HOV.Trigger
      ref={ref}
      type='button'
      className={clsx(H.hoverCardTrigger, props.className)}
      {...props}>
      {props.children}
    </HOV.Trigger>
  );
});

/** -------------------------------- */

type HoverCardContentProps = {
  children?: React.ReactNode;
  className?: string;
} & React.ComponentProps<typeof HOV.Content>;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HOV.Content>,
  HoverCardContentProps
>((props, ref) => {
  return (
    <HoverCardPortal>
      <HOV.Content
        ref={ref}
        className={clsx(H.hoverCardContent, props.className)}
        {...props}>
        {props.children}
      </HOV.Content>
    </HoverCardPortal>
  );
});

/** ----------------------------------------- */

export type HoverCardProps = React.ComponentProps<typeof HOV.Root>;
export const HoverCard: React.FC<HoverCardProps> & {
  Trigger: typeof HoverCardTrigger;
  Content: typeof HoverCardContent;
  Arrow: typeof HoverCardArrow;
  Portal: typeof HoverCardPortal;
} = (props) => <HoverCardRoot {...props} />;

HoverCard.Trigger = HoverCardTrigger;
HoverCard.Content = HoverCardContent;
HoverCard.Arrow = HoverCardArrow;
HoverCard.Portal = HoverCardPortal;
//..
HoverCard.displayName = 'HoverCard';
//..
HoverCardTrigger.displayName = 'HoverCardTrigger';
HoverCardContent.displayName = 'HoverCardContent';
HoverCardArrow.displayName = 'HoverCardArrow';
HoverCardPortal.displayName = 'HoverCardPortal';
