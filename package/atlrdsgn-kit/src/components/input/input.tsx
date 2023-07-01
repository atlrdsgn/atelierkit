import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { input_root, input_label, input_field } from './input.css';
import type { InputVariantProps } from './input.css';
import type { BaseInputProps, InputRootProps, InputLabelProps } from './input.types';

const InputRoot = forwardRef<HTMLDivElement, InputRootProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(className, input_root)}
        {...props}>
        {children}
      </div>
    );
  },
);

const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={clsx(className, input_label)}
        {...props}>
        <span>{children}</span>
      </label>
    );
  },
);

type InputPrimitiveProps = BaseInputProps &
  InputVariantProps &
  React.HTMLAttributes<HTMLInputElement>;
type InputProps = InputPrimitiveProps;

const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size = 'medium', variant = 'slate', ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(className, input_field({ size, variant }))}
        {...rest}
      />
    );
  },
);

/** ---------------------------------------------------------- */

export const Input: React.FC<InputProps> & {
  Flex: typeof InputRoot;
  Label: typeof InputLabel;
} = (props) => <InputField {...props} />;

Input.Flex = InputRoot;
Input.Label = InputLabel;

Input.displayName = 'Input';
InputRoot.displayName = 'Input.Flex';
InputLabel.displayName = 'Input.Label';
