/** @format */

import React from 'react'
import * as TIP from '@radix-ui/react-tooltip'
import * as css from './tip.css'
import clsx from 'clsx'

/** ---------------------------------------------
 * tip.provider props
 * --------------------------------------------- */
const DEFAULT_DELAY_DURATION = 500
const DEFAULT_SKIP_DELAY = 300
const DISABLE_HOVERABLE_CONTENT = false

/** ---------------------------------------------
 * @tip_root
 *
 * The main component that wraps the trigger and content.
 * Do not provide styles.
 * --------------------------------------------- */
type RootProps = {children?: React.ReactNode} & React.ComponentProps<typeof TIP.Root>
const TipRoot = ({children, ...props}: RootProps) => {
  return (
    <TIP.Provider
      delayDuration={DEFAULT_DELAY_DURATION}
      skipDelayDuration={DEFAULT_SKIP_DELAY}
      disableHoverableContent={DISABLE_HOVERABLE_CONTENT}
    >
      <TIP.Root {...props}>{children}</TIP.Root>
    </TIP.Provider>
  )
}

/** ---------------------------------------------
 * @tip_content
 *
 * The content that is displayed when the trigger is hovered.
 * --------------------------------------------- */
type ContentProps = {
  children?: React.ReactNode
  className?: string
  onEscapeKeyDown?: (event: React.KeyboardEvent) => void
  onPointerDownOutside?: (event: React.PointerEvent) => void
  forceMount?: boolean
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
  align?: 'start' | 'center' | 'end'
  alignOffset?: number
  avoidCollisions?: boolean
  sticky?: 'partial' | 'always'
  hideWhenDetached?: boolean
} & React.ComponentProps<typeof TIP.Content>

const TipContent = React.forwardRef<React.ElementRef<typeof TIP.Content>, ContentProps>(
  (
    {
      children,
      className,
      onEscapeKeyDown,
      onPointerDownOutside,
      forceMount,
      side = 'right',
      sideOffset = 10,
      align = 'center',
      alignOffset = 0,
      avoidCollisions = true,
      sticky = 'always',
      hideWhenDetached = false,
      //..
      ...props
    },
    //..
    forwardedRef
  ) => {
    return (
      <TIP.Content
        {...props}
        ref={forwardedRef}
        aria-label='atelier-tip'
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        avoidCollisions={avoidCollisions}
        sticky={sticky}
        hideWhenDetached={hideWhenDetached}
        className={clsx(className, css.tip_content)}
      >
        {children}
      </TIP.Content>
    )
  }
)

type TriggerProps = {
  children?: React.ReactNode
} & React.ComponentProps<typeof TIP.Trigger>

const TipTrigger = React.forwardRef<React.ElementRef<typeof TIP.Trigger>, TriggerProps>(
  ({children, ...props}, forwardedRef) => {
    return (
      <TIP.Trigger {...props} ref={forwardedRef} className={css.tip_trigger}>
        {children}
      </TIP.Trigger>
    )
  }
)

export type TipProps = {
  children?: React.ReactNode
} & React.ComponentProps<typeof TIP.Root>

export const Tip: React.FC<TipProps> & {
  Trigger: typeof TipTrigger
  Content: typeof TipContent
} = (props) => <TipRoot {...props} />

Tip.Trigger = TipTrigger
Tip.Content = TipContent

Tip.displayName = 'Tip'
TipTrigger.displayName = 'TipTrigger'
TipContent.displayName = 'TipContent'
