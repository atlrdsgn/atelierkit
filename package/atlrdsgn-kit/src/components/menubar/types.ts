/** @format */

import * as React from 'react';

export interface BASE_MENUBAR_ROOT_PROPS {
  children: React.ReactNode;
  className?: string;
  /**
   *The value of the menu that should
   * be open when initially rendered.
   *
   * Use when you do not need to control the value state.
   */
  defaultValue?: string;
  /**
   * The controlled value of the menu to open.
   * Should be used in conjunction with [onValueChange].
   */
  value?: string;
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void;
  /**
   * When true, keyboard navigation will loop
   * from last item to first, and vice versa.
   */
  loop?: boolean;
}

export interface BASE_MENUBAR_PROPS {
  /**
   *
   * A top level menu item,
   * contains a trigger with content combination.
   */
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
  /**
   *
   * A unique value that associates the item with
   * an active value when the navigation menu is controlled.
   * This prop is managed automatically when uncontrolled.
   */
  value?: string;
}

export interface BASE_TRIGGER_PROPS {
  /**
   *
   * A top level menu item,
   * contains a trigger with content combination.
   */
  className?: string;
  asChild?: boolean;
  /** @format */
}

export interface BASE_CONTENT_PROPS {
  children?: React.ReactNode;
  className?: string;
  /**
   *
   * The component that pops out when a menu is open.
   */
  asChild?: boolean;
  /**
   * When true, keyboard navigation will
   * loop from last item to first, and vice versa.
   */
  loop?: boolean;
  /**
   * Event handler called when focus moves to the trigger after closing.
   * It can be prevented by calling event.preventDefault.
   */
  onCloseAutoFocus?: (event: React.FocusEvent<HTMLElement>) => void;
  /**
   * Event handler called when the escape key is down.
   * It can be prevented by calling event.preventDefault
   */
  onEscapeKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
  /**
   * Event handler called when a pointer event occurs outside the bounds of the component.
   * It can be prevented by calling event.preventDefault.
   */
  onPointerDownOutside?: (event: React.PointerEvent<HTMLElement>) => void;
  /**
   * Event handler called when focus moves outside the bounds of the component.
   * It can be prevented by calling event.preventDefault.
   */
  onFocusOutside?: (event: React.FocusEvent<HTMLElement>) => void;
  /**
   * Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component.
   * It can be prevented by calling event.preventDefault.
   */
  onInteractOutside?: (event: React.PointerEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => void;
  /**
   * Used to force mounting when more control is needed.
   * Useful when controlling animation with React animation libraries.
   * It inherits from Menubar.Portal.
   */
  forceMount?: boolean;
  /**
   * The preferred side of the trigger to render against when open.
   * Will be reversed when collisions occur and avoidCollisions is enabled.
   */
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  /**
   * When true, overrides the side andalign
   * preferences to prevent collisions with boundary edges.
   */
  avoidCollisions?: boolean;
  collisionBoundary?: Element | null | Array<Element | null>;
  /**
   * The sticky behavior on the align axis.
   * "partial" will keep the content in the boundary as long as
   * the trigger is at least partially in the boundary whilst
   * "always" will keep the content in the boundary regardless.
   */
  sticky?: 'partial' | 'always';
  /**
   * Whether to hide the content when the trigger becomes fully occluded.
   */
  hideWhenDetached?: boolean;
}

export interface BASE_ITEM_PROPS {
  className?: string;
  asChild?: boolean;
  disabled?: boolean;
  onSelect?: (event: React.MouseEvent<HTMLElement>) => void;
  textValue?: string;
}

export interface BASE_SUBTRIGGER_PROPS {
  className?: string;
  asChild?: boolean;
  disabled?: boolean;
  textValue?: string;
}

export type BASE_SUBCONTENT_PROPS = BASE_CONTENT_PROPS;
