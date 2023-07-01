import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

import react from '@vitejs/plugin-react';
import zipPack from 'vite-plugin-zip-pack';
import banner from 'vite-plugin-banner';
import dts from 'vite-plugin-dts';
import path from 'path';

import { peerDependencies } from './package.json';

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
          'react-dom': 'ReactDom',
          '@radix-ui/react-avatar': 'AVI',
          '@radix-ui/react-menubar': 'MBAR',
          '@radix-ui/react-switch': 'SwitchRoot, SwitchThumb',
          '@radix-ui/react-tooltip': 'TIP',
        },
      },
    },
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'kit',
      fileName: 'index',
      formats: ['cjs', 'es', 'umd'],
    },
  },
  plugins: [
    react(),
    zipPack({
      outDir: 'pkg',
      outFileName: 'kit.zip',
    }),
    banner(`
    atelierkit© v${process.env.npm_package_version}. 
    Copyright © 2023 atlrdsgn®. All rights reserved.
    
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
      identifiers: 'short',
    }),
  ],
});
