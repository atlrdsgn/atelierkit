/** @format */

import '@/scss/index.scss'

import React from 'react'
import {ThemeProvider} from 'next-themes'
import {KitProvider} from '@/theme/provider'

import type {AppProps} from 'next/app'
import type {GetLayoutFn} from '@/ts/page'
import {useFontsLoaded} from '@/components/hooks/use-fonts-loaded'
import {useFathom} from '@/components/hooks/use-fathom'

/*
 * Copyright (C) 2023 @chvndler
 * All Rights Reserved.
 *
 * You may use, distribute and modify this code under the
 * terms of the MIT license. You should have received a
 * copy of the MIT license with this repository.
 *
 * See https://github.com/chvndler/chvndler.ch/LICENSE for more information.
 */

const AppContext = React.createContext<{fontsLoaded: boolean}>({fontsLoaded: false})
export const useAppContext = () => React.useContext(AppContext)

const App = ({Component, pageProps, ...rest}: AppProps) => {
  useFontsLoaded()
  useFathom()

  const getLayout: GetLayoutFn =
    (Component as any).getLayout || (({Component, pageProps}) => <Component {...pageProps} />)

  return (
    <>
      <ThemeProvider attribute='class'>
        <KitProvider defaultTheme={'light'}>
          <>{getLayout({Component, pageProps, ...rest})}</>
        </KitProvider>
      </ThemeProvider>
    </>
  )
}

export default App
