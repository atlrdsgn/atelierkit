/** @format */

import React from 'react'
import * as MBAR from '@radix-ui/react-menubar'
import * as CSS from './menubar.css'

import clsx from 'clsx'

import type {
  //..
  BASE_MENUBAR_ROOT_PROPS,
  BASE_MENUBAR_PROPS,
  BASE_CONTENT_PROPS,
  BASE_ITEM_PROPS,
  BASE_TRIGGER_PROPS,
  BASE_SUBTRIGGER_PROPS,
  BASE_SUBCONTENT_PROPS,
} from './types'

type MenubarPrimitiveRootProps = BASE_MENUBAR_ROOT_PROPS & React.ComponentProps<typeof MBAR.Root>
export type MenubarRootProps = MenubarPrimitiveRootProps
const MenubarRootElement = React.forwardRef<HTMLDivElement, MenubarRootProps>(
  ({children, className, loop = true, ...rest}, forwardedRef) => {
    return (
      <MBAR.Root
        {...rest}
        ref={forwardedRef}
        className={clsx(className, CSS.menubar_root)}
        loop={loop}
      />
    )
  }
)

type MenubarMenuPrimitiveProps = BASE_MENUBAR_PROPS &
  React.ComponentProps<typeof MBAR.Menu> &
  React.HTMLAttributes<HTMLDivElement>
export type MenubarMenuProps = MenubarMenuPrimitiveProps
const MenubarMenuElement = ({children, className, ...rest}: MenubarMenuProps) => {
  return <MBAR.Menu {...rest}>{children}</MBAR.Menu>
}

type MenubarContentPrimitiveProps = BASE_CONTENT_PROPS &
  React.ComponentProps<typeof MBAR.Content> &
  React.HTMLAttributes<HTMLDivElement>
export type MenubarContentProps = MenubarContentPrimitiveProps
const MenubarContentElement = React.forwardRef<
  React.ElementRef<typeof MBAR.Content>,
  MenubarContentProps
>(({children, className, side = 'bottom', sideOffset = 10, ...rest}, forwardedRef) => {
  return (
    <MBAR.Content
      {...rest}
      ref={forwardedRef}
      className={clsx(className, CSS.menubar_content)}
      side={side}
      sideOffset={sideOffset}
    >
      {children}
    </MBAR.Content>
  )
})

type MenubarItemPrimitiveProps = BASE_ITEM_PROPS & React.ComponentProps<typeof MBAR.Item>
export type MenubarItemProps = MenubarItemPrimitiveProps
const MenubarItemElement = React.forwardRef<React.ElementRef<typeof MBAR.Item>, MenubarItemProps>(
  ({children, className, ...rest}, forwardedRef) => {
    return (
      <MBAR.Item {...rest} ref={forwardedRef} className={clsx(className, CSS.menubar_item)}>
        {children}
      </MBAR.Item>
    )
  }
)

type MenubarTriggerPrimitiveProps = BASE_TRIGGER_PROPS &
  React.ComponentProps<typeof MBAR.Trigger> &
  React.HTMLAttributes<HTMLButtonElement>
export type MenubarTriggerProps = MenubarTriggerPrimitiveProps
const MenubarTriggerElement = React.forwardRef<
  React.ElementRef<typeof MBAR.Trigger>,
  MenubarTriggerProps
>(({children, className, ...rest}, forwardedRef) => {
  return (
    <MBAR.Trigger {...rest} ref={forwardedRef} className={clsx(className, CSS.menubar_trigger)}>
      {children}
    </MBAR.Trigger>
  )
})

type MenubarSubTriggerPrimitiveProps = BASE_SUBTRIGGER_PROPS &
  React.ComponentProps<typeof MBAR.SubTrigger> &
  React.HTMLAttributes<HTMLButtonElement>
export type MenubarSubTriggerProps = MenubarSubTriggerPrimitiveProps
const MenubarSubTriggerElement = React.forwardRef<
  React.ElementRef<typeof MBAR.SubTrigger>,
  MenubarSubTriggerProps
>(({children, className, ...rest}, forwardedRef) => {
  return (
    <MBAR.SubTrigger {...rest} ref={forwardedRef} className={clsx(className, CSS.submenu_trigger)}>
      {children}
    </MBAR.SubTrigger>
  )
})

type MenubarSubContentPrimitiveProps = BASE_SUBCONTENT_PROPS &
  React.ComponentProps<typeof MBAR.SubContent> &
  React.HTMLAttributes<HTMLDivElement>
export type MenubarSubContentProps = MenubarSubContentPrimitiveProps
const MenubarSubContentElement = React.forwardRef<
  React.ElementRef<typeof MBAR.SubContent>,
  MenubarSubContentProps
>(({children, className, sideOffset = 10, ...rest}, forwardedRef) => {
  return (
    <MBAR.SubContent
      {...rest}
      ref={forwardedRef}
      className={clsx(className, CSS.submenu_content)}
      sideOffset={sideOffset}
    >
      {children}
    </MBAR.SubContent>
  )
})

export type MenubarProps = BASE_MENUBAR_ROOT_PROPS
export const Menubar: React.FC<MenubarProps> & {
  Menu: typeof MenubarMenuElement
  Trigger: typeof MenubarTriggerElement
  Content: typeof MenubarContentElement
  Item: typeof MenubarItemElement
  SubTrigger: typeof MenubarSubTriggerElement
  SubContent: typeof MenubarSubContentElement
} = (props) => <MenubarRootElement {...props} />

Menubar.Menu = MenubarMenuElement
Menubar.Trigger = MenubarTriggerElement
Menubar.Content = MenubarContentElement
Menubar.Item = MenubarItemElement
Menubar.SubTrigger = MenubarSubTriggerElement
Menubar.SubContent = MenubarSubContentElement

Menubar.displayName = 'Menubar'

MenubarMenuElement.displayName = 'Menubar.Menu'
MenubarTriggerElement.displayName = 'Menubar.Trigger'
MenubarContentElement.displayName = 'Menubar.Content'
MenubarSubTriggerElement.displayName = 'Menubar.SubTrigger'
MenubarSubContentElement.displayName = 'Menubar.SubContent'
