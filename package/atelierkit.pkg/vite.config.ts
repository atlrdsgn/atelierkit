/** @format */

import {resolve} from 'path'
import {defineConfig} from 'vite'

import {peerDependencies} from './package.json'
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin'
import progress from 'vite-plugin-progress'
import banner from 'vite-plugin-banner'
import dts from 'vite-plugin-dts'

const peers = Object.keys(peerDependencies)
const primitiveDeps = [
  // ...deps
  '@radix-ui/react-avatar',
  '@radix-ui/react-checkbox',
  '@radix-ui/react-hover-card',
  '@radix-ui/react-label',
  '@radix-ui/react-popover',
  '@radix-ui/react-separator',
  '@radix-ui/react-select',
  '@radix-ui/react-switch',
  '@radix-ui/react-tooltip',
]

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      external: [...peers, ...primitiveDeps],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
          /**
           *
           * named globals for primitive dependencies.
           */
          '@radix-ui/react-avatar': 'AVI',
          '@radix-ui/react-checkbox': 'CBX',
          '@radix-ui/react-hover-card': 'HOVC',
          '@radix-ui/react-label': 'LABL',
          '@radix-ui/react-popover': 'POP',
          '@radix-ui/react-switch': 'S',
          '@radix-ui/react-select': 'SEL',
          '@radix-ui/react-separator': 'SEP',
          '@radix-ui/react-tooltip': 'TIP',
        },
      },
    },
    lib: {
      /**
       *
       * entry point for the package,
       * in library mode.
       *
       * https://vitejs.dev/guide/build.html#library-mode
       *
       */
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'kit',
      fileName: 'index',
      formats: ['cjs', 'es', 'umd'],
    },
  },
  plugins: [
    progress(),
    banner(`Atelier® Kit v${process.env.npm_package_version}`),
    vanillaExtractPlugin({
      /**
       *
       * identifier option can be set
       * to 'short' or 'debug' to control
       * how class names are generated.
       */
      identifiers: 'debug',
    }),
    dts({
      outputDir: 'dist/types',
      beforeWriteFile: (filePath, content) => ({
        content,
        filePath: filePath.replace('src', ''),
      }),
      compilerOptions: {
        baseUrl: './src/',
        emitDeclarationOnly: true,
        noEmit: false,
      },
      include: ['src'],
      exclude: [],
    }),
  ],
})
