# `ATELIERKIT®`

<a href="https://docs.atlrdsgn.com">
  <img width="1080" alt="atelierkit" src="https://cdn.atlrdsgn.com/assets/github/atlrdsgn/kit.jpg">
</a>

An ever– expanding library of [React](https://reactjs.org/) components, primitives, and tools.

---

## Getting started and using atelierkit

---

### 1. **Install**

To get started, add `@atlrdsgn/kit` to your dependencies.

```yarn
yarn add @atlrdsgn/kit
```

```pnpm
pnpm install --save @atlrdsgn/kit
```

```npm
npm install --save @atlrdsgn/kit
```

---

### 2. **Wrap your app**

**Import `.css` file**, and _wrap your app_.

You need to wrap your app with the `KitProvider` context so that the .css file is available to all components.

```tsx
import '@atlrdsgn/kit/css';
import '...other_styles.css or .scss';

import { KitProvider } from '@atlrdsgn/kit';

export default function App({ Component, pageProps }) {
  return (
    <KitProvider>
      <Component {...pageProps} />
    </KitProvider>
  );
}
```

---

### 3. **Usage**

Build smaller components using individual primitives.

```tsx
import React from 'react';
import { Container } from '@atlrdsgn/kit';

<Container width='medium'>..</Container>;
```

(or) import multiple primitives and compose complex components.

```tsx
import React from 'react';
import { Canvas, Text, Button } from '@atlrdsgn/kit';

export const DefaultExample = () => (
  <Canvas>
    <Text size='sm'>ATELIERKIT®</Text>
    <Button size='sm'>Small button</Button>
  </Canvas>
);
```

#### You can view full documentation at [ds.atlrdsgn.com](https://ds.atlrdsgn.com)

`© 2023 atlrdsgn®`
