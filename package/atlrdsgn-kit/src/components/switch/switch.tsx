/** @format */

import React from 'react';
import * as SWI from '@radix-ui/react-switch';
import * as css from './switch.css';
import clsx from 'clsx';

interface BASE_SWITCH_PROPS {
  className?: string;
  asChild?: boolean;
  /**
   *
   * The state of the switch when it is
   * initially rendered.
   * Use when you do not need to control its state.
   */
  defaultChecked?: boolean;
  /**
   *
   * The controlled state of the switch.
   * Must be used in conjunction with onCheckedChange.
   */
  checked?: boolean;
  /**
   *
   * Event handler called when
   * the state of the switch changes.
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   *
   * If true, prevents the user
   * from interacting with the switch.
   */
  disabled?: boolean;
  /**
   *
   * If true, indicates that the user must
   * check the switch before the owning
   * form can be submitted.
   */
  required?: boolean;
  /**
   *
   * The name of the switch.
   * Submitted with its owning form
   * as part of a name/value pair.
   */
  name?: string;
  /**
   *
   * The value given as data
   * when submitted with a name.
   */
  value?: string;
}

export type SwitchProps = BASE_SWITCH_PROPS & React.ComponentProps<typeof SWI.Root>;
const SwitchRootComponent = (props: SwitchProps) => {
  const { className, asChild, defaultChecked, checked, onCheckedChange, disabled, required, name, value, ...rest } =
    props;
  return (
    <SWI.Root
      {...rest}
      className={clsx(className, css.switch_root)}
      defaultChecked={defaultChecked}
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      required={required}
      name={name}
      value={value}
    />
  );
};

export type ToggleProps = React.ComponentProps<typeof SWI.Thumb>;
const SwitchToggleComponent = React.forwardRef<React.ElementRef<typeof SWI.Thumb>, ToggleProps>((props, ref) => {
  const { className, asChild = false, ...rest } = props;
  return (
    <SWI.Thumb
      {...rest}
      ref={ref}
      className={clsx(className, css.switch_toggle)}
    />
  );
});

/** -------------------------------------------- */

export const Switch: React.FC<SwitchProps> & {
  Toggle: typeof SwitchToggleComponent;
} = (props) => <SwitchRootComponent {...props} />;

Switch.Toggle = SwitchToggleComponent;

Switch.displayName = 'Switch';
Switch.Toggle.displayName = 'Switch.Toggle';
SwitchToggleComponent.displayName = 'Switch.Toggle';
