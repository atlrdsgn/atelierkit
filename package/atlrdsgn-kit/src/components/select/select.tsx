import React from 'react';
import * as SLCT from '@radix-ui/react-select';
import * as CSS from './select.css';
import { ArrowDownIcon, SmallArrowDownIcon, SmallArrowUpIcon } from '../../lib';
import clsx from 'clsx';

import type {
  // ..
  BASE_SELECT_PROPS,
} from './types';

export type SelectProps = BASE_SELECT_PROPS & React.ComponentProps<typeof SLCT.Root>;

const SelectRoot = ({
  children,
  className,
  open,
  defaultOpen,
  disabled,
  required,
  defaultValue,
  value,
  onValueChange,
  ...rest
}: SelectProps) => {
  return (
    <SLCT.Root
      {...rest}
      open={open}
      defaultOpen={defaultOpen}
      disabled={disabled}
      required={required}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}>
      <div
        {...rest}
        className={clsx(CSS.select_root, className)}>
        {children}
      </div>
    </SLCT.Root>
  );
};

/***************************************************************
 *
 *
 *
 * trigger.value.
 * +
 * trigger.icon.
 *
 * here we're going to pass the Select[Value] & Select[Icon]
 * to the Select[Trigger] component. I'm inferring that Select[Trigger]
 * will need to be a flex.div. Select[Value] should receive no styling,
 * in order to ensure proper placement.
 *
 */

type SelectValuePrimitiveProps = React.ComponentProps<typeof SLCT.Value> &
  React.RefAttributes<HTMLSpanElement>;
export type SelectValueProps = SelectValuePrimitiveProps;
const SelectValueComponent = React.forwardRef<
  React.ElementRef<typeof SLCT.Value>,
  SelectValueProps
>(({ children, placeholder, ...rest }, forwardedRef) => {
  return (
    <SLCT.Value
      {...rest}
      ref={forwardedRef}
      placeholder={placeholder}>
      {children}
    </SLCT.Value>
  );
});

export type SelectIconProps = React.ComponentPropsWithRef<typeof SLCT.Icon>;
const SelectIcon = React.forwardRef<React.ElementRef<typeof SLCT.Icon>, SelectIconProps>(
  ({ className, asChild, ...rest }, forwardedRef) => (
    <SLCT.Icon
      {...rest}
      ref={forwardedRef}
      asChild={asChild}
      className={clsx(CSS.select_icon, className)}>
      <ArrowDownIcon />
    </SLCT.Icon>
  ),
);

/**
 *
 * select.trigger
 */

type SelectTriggerPrimitiveProps = React.ComponentProps<typeof SLCT.Trigger> &
  React.HTMLAttributes<HTMLButtonElement>;
type SelectTriggerProps = SelectTriggerPrimitiveProps;
const SelectTriggerComponent = ({
  children,
  asChild,
  className,
  ...rest
}: SelectTriggerProps) => {
  return (
    <SLCT.Trigger
      {...rest}
      asChild={asChild}
      className={clsx(className, CSS.select_trigger)}>
      {children}
    </SLCT.Trigger>
  );
};

/***************************************************************
 *
 *
 *
 * content.
 */
export type SelectContentProps = React.ComponentProps<typeof SLCT.Content>;
const SelectContent = ({
  children,
  className,
  position = 'popper',
  side = 'bottom',
  sideOffset,
  align,
  alignOffset = 0,
  avoidCollisions = true,
  sticky = 'partial',
  hideWhenDetached = false,
  ...props
}: SelectContentProps) => (
  <SLCT.Content
    {...props}
    className={clsx(CSS.select_content, className)}
    position={position}
    side={side}
    sideOffset={sideOffset}
    align={align}
    alignOffset={alignOffset}
    avoidCollisions={avoidCollisions}
    sticky={sticky}
    hideWhenDetached={hideWhenDetached}
    /**
     *
     * portal > content > up > viewport > down > [content.items]
     */
  >
    <SLCT.ScrollUpButton className={clsx(CSS.scroll_up, className)}>
      <SmallArrowUpIcon />
    </SLCT.ScrollUpButton>
    <SLCT.Viewport>{children}</SLCT.Viewport>
    <SLCT.ScrollDownButton className={clsx(CSS.scroll_down, className)}>
      <SmallArrowDownIcon />
    </SLCT.ScrollDownButton>
  </SLCT.Content>
);

export type SelectItemProps = React.ComponentPropsWithRef<typeof SLCT.Item> &
  React.ComponentProps<typeof SLCT.ItemText>;
const SelectItemComponent = React.forwardRef<
  React.ElementRef<typeof SLCT.Item>,
  SelectItemProps
>(({ children, className, ...rest }, forwardedRef) => (
  <SLCT.Item
    {...rest}
    ref={forwardedRef}
    className={clsx(CSS.select_item, className)}>
    <SLCT.ItemText>{children}</SLCT.ItemText>
    <SelectItemIndicator />
  </SLCT.Item>
));

export type SelectItemIndicatorProps = React.ComponentPropsWithRef<
  typeof SLCT.ItemIndicator
>;
const SelectItemIndicator = ({ className, ...rest }: SelectItemIndicatorProps) => (
  <SLCT.ItemIndicator
    {...rest}
    className={clsx(CSS.select_item_indicate, className)}
  />
);

export type SelectSeparatorProps = React.ComponentPropsWithRef<typeof SLCT.Separator>;
const SelectSeparator = ({ className, ...rest }: SelectSeparatorProps) => (
  <SLCT.Separator
    {...rest}
    className={clsx(CSS.select_separator, className)}
  />
);

export type SelectLabelProps = React.ComponentPropsWithRef<typeof SLCT.Label>;
const SelectLabel = ({ children, className, ...rest }: SelectLabelProps) => (
  <SLCT.Label
    {...rest}
    className={clsx(CSS.select_label, className)}>
    {children}
  </SLCT.Label>
);

export type SelectGroupProps = React.ComponentPropsWithRef<typeof SLCT.Group>;
const SelectGroup = ({ children, className, ...rest }: SelectGroupProps) => (
  <SLCT.Group
    {...rest}
    className={clsx(CSS.select_group, className)}>
    {children}
  </SLCT.Group>
);

export const Select: React.FC<SelectProps> & {
  Trigger: typeof SelectTriggerComponent;
  Value: typeof SelectValueComponent;
  Content: typeof SelectContent;
  Item: typeof SelectItemComponent;
  Icon: typeof SelectIcon;
  Viewport: typeof SLCT.Viewport;
  Portal: typeof SLCT.Portal;
  // ..
  Indicator: typeof SelectItemIndicator;
  Separator: typeof SelectSeparator;
  Label: typeof SelectLabel;
  Group: typeof SelectGroup;
  // ..
  ScrollUpButton: typeof SLCT.ScrollUpButton;
  ScrollDownButton: typeof SLCT.ScrollDownButton;
} = (props) => <SelectRoot {...props} />;

Select.Trigger = SelectTriggerComponent;
Select.Value = SelectValueComponent;
Select.Content = SelectContent;
Select.Item = SelectItemComponent;
Select.Viewport = SLCT.Viewport;
Select.Portal = SLCT.Portal;
Select.Icon = SelectIcon;
Select.Indicator = SelectItemIndicator;
Select.Separator = SelectSeparator;
Select.Label = SelectLabel;
Select.Group = SelectGroup;
Select.ScrollUpButton = SLCT.ScrollUpButton;
Select.ScrollDownButton = SLCT.ScrollDownButton;
// ..
Select.displayName = 'Select';
// ..
Select.Value.displayName = 'Select.Value';
Select.Item.displayName = 'Select.Item';
Select.Viewport.displayName = 'Select.Viewport';
Select.Portal.displayName = 'Select.Portal';
Select.ScrollUpButton.displayName = 'Select.ScrollUpButton';
Select.ScrollDownButton.displayName = 'Select.ScrollDownButton';
