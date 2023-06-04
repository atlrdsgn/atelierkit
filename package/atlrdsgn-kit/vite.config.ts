import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { peerDependencies } from './package.json';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import banner from 'vite-plugin-banner';
import dts from 'vite-plugin-dts';

const peerDeps = Object.keys(peerDependencies);
const primitiveDeps = [
  '@radix-ui/react-avatar',
  '@radix-ui/react-menubar',
  '@radix-ui/react-switch',
  '@radix-ui/react-tooltip',
];

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      external: [...peerDeps, ...primitiveDeps],
      output: {
        globals: {
          react: 'React',
          React: 'React',
          'react-dom': 'ReactDom',
          /**
           *
           * named globals for dependencies.
           */
          '@radix-ui/react-avatar': 'AVI',
          '@radix-ui/react-menubar': 'MBAR',
          '@radix-ui/react-switch': 'SWI',
          '@radix-ui/react-tooltip': 'TIP',
        },
      },
    },
    lib: {
      /**
       *
       * entry point for the package, in library mode.
       * https://vitejs.dev/guide/build.html#library-mode
       */
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'kit',
      fileName: 'index',
      formats: ['cjs', 'es', 'umd'],
    },
  },
  plugins: [
    react(),
    banner(`
    atelierkit© v${process.env.npm_package_version}. 
    All rights reserved.
    
    see https://docs.atlrdsgn.com for more information.
    `),
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
    vanillaExtractPlugin({
      /**
       *
       * identifier option can be set
       * to 'short' or 'debug' to control
       * how class names are generated.
       */
      identifiers: 'short',
    }),
  ],
});
