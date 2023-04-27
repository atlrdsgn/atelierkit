/** @format */

import React from 'react'
import * as MBAR from '@radix-ui/react-menubar'
import * as CSS from './menubar.css'
import clsx from 'clsx'
import type {
  //..
  BASE_MENUBAR_ROOT_PROPS,
  BASE_CONTENT_PROPS,
  BASE_ITEM_PROPS,
  BASE_TRIGGER_PROPS,
  BASE_SUBTRIGGER_PROPS,
  BASE_SUBCONTENT_PROPS,
} from './types'

// menubar.parts
const MenubarMenu = MBAR.Menu
const MenubarSubMenu = MBAR.Sub
const MenubarPortal = MBAR.Portal

type MenubarPrimitiveRootProps = BASE_MENUBAR_ROOT_PROPS &
  React.ComponentProps<typeof MBAR.Root> &
  React.HTMLAttributes<HTMLDivElement>
export type MenubarRootProps = MenubarPrimitiveRootProps
const MenubarRootElement = React.forwardRef<React.ElementRef<typeof MBAR.Root>, MenubarRootProps>(
  ({children, className, loop = true, ...rest}, ref) => {
    return (
      <MBAR.Root {...rest} ref={ref} className={clsx(className, CSS.menubar_root)} loop={loop}>
        {children}
      </MBAR.Root>
    )
  }
)

type MenubarContentPrimitiveProps = BASE_CONTENT_PROPS &
  React.ComponentProps<typeof MBAR.Content> &
  React.HTMLAttributes<HTMLDivElement>
export type MenubarContentProps = MenubarContentPrimitiveProps
const MenubarContentElement = React.forwardRef<
  React.ElementRef<typeof MBAR.Content>,
  MenubarContentProps
>(({children, className, side = 'bottom', sideOffset = 10, ...rest}, ref) => {
  return (
    <MBAR.Content
      {...rest}
      ref={ref}
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
  ({children, className, ...rest}, ref) => {
    return (
      <MBAR.Item {...rest} ref={ref} className={clsx(className, CSS.menubar_item)}>
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
>(({children, className, ...rest}, ref) => {
  return (
    <MBAR.Trigger {...rest} ref={ref} className={clsx(className, CSS.menubar_trigger)}>
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
>(({children, className, ...rest}, ref) => {
  return (
    <MBAR.SubTrigger {...rest} ref={ref} className={clsx(className, CSS.submenu_trigger)}>
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
>(({children, className, sideOffset = 10, ...rest}, ref) => {
  return (
    <MBAR.SubContent
      {...rest}
      ref={ref}
      className={clsx(className, CSS.submenu_content)}
      sideOffset={sideOffset}
    >
      {children}
    </MBAR.SubContent>
  )
})

/**
 *
 *
 * Exports
 */
export type MenubarProps = BASE_MENUBAR_ROOT_PROPS
export const Menubar: React.FC<MenubarProps> & {
  Menu: typeof MenubarMenu
  Trigger: typeof MenubarTriggerElement
  Content: typeof MenubarContentElement
  Item: typeof MenubarItemElement
  SubMenu: typeof MenubarSubMenu
  SubTrigger: typeof MenubarSubTriggerElement
  SubContent: typeof MenubarSubContentElement
  Portal: typeof MenubarPortal
} = (props) => <MenubarRootElement {...props} />

Menubar.displayName = 'Menubar'
MenubarRootElement.displayName = 'Menubar'
/** ------------- */
Menubar.Menu = MenubarMenu
Menubar.Trigger = MenubarTriggerElement
Menubar.Content = MenubarContentElement
Menubar.Item = MenubarItemElement
Menubar.SubMenu = MenubarSubMenu
Menubar.SubTrigger = MenubarSubTriggerElement
Menubar.SubContent = MenubarSubContentElement
Menubar.Portal = MenubarPortal
/** ------------- */
MenubarMenu.displayName = 'Menubar-Menu'
MenubarTriggerElement.displayName = 'Menubar-Trigger'
MenubarContentElement.displayName = 'Menubar-Content'
MenubarSubMenu.displayName = 'Menubar-SubMenu'
MenubarSubTriggerElement.displayName = 'Menubar-SubTrigger'
MenubarSubContentElement.displayName = 'Menubar-SubContent'
MenubarPortal.displayName = 'Menubar-Portal'
