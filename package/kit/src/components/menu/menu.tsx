/** @format */

import React from 'react'
import Drawer from 'rc-drawer'
import * as css from './menu.css'

import type {DrawerProps} from 'rc-drawer'

import clsx from 'clsx'

interface BASE_MENU_PROPS {
  children?: React.ReactNode
  className?: string
}

type MenuPrimitiveProps = BASE_MENU_PROPS &
  DrawerProps &
  React.HTMLAttributes<HTMLDivElement> &
  React.ComponentProps<typeof Drawer>
export type MenuProps = MenuPrimitiveProps

type MenuRootProps = BASE_MENU_PROPS & MenuPrimitiveProps
const MenuRootComponent = ({children, className, ...rest}: MenuRootProps) => {
  return (
    <Drawer {...rest} className={clsx(className, css.menu_root)}>
      {children}
    </Drawer>
  )
}

type MenuContentProps = BASE_MENU_PROPS & MenuPrimitiveProps
const MenuContentComponent = ({children, className, ...rest}: MenuContentProps) => {
  return (
    <div {...rest} className={clsx(className, css.menu_content)}>
      {children}
    </div>
  )
}

export const Menu: React.FC<MenuProps> & {
  Content: typeof MenuContentComponent
} = (props) => <MenuRootComponent {...props} />

Menu.Content = MenuContentComponent

Menu.displayName = 'Menu'
MenuContentComponent.displayName = 'Menu.Content'
