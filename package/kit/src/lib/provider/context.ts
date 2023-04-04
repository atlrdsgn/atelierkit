import React from 'react'

/**
 *
 * const useTheme = () => React.useContext(ThemeContext)
 *
 * KitTheme.light
 * KitTheme.dark
 */
export type KitMode = 'light' | 'dark'

export type KitContextValue = {
  theme: KitMode
  toggleTheme: any
}

export const KitContext = React.createContext<KitContextValue>({
  theme: 'light',
  toggleTheme: null,
})

export const useTheme = () => {
  const context = React.useContext(KitContext)
  if (!context) throw Error('Atelier® Kit components must be used within [KitProvider]')
  return context
}
