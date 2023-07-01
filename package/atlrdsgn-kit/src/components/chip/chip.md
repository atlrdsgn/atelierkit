# Chip Component

## Installation

If you have not already..

```shell
yarn add @atlrdsgn/kit
```

## Usage

```tsx
import { Chip } from '@atlrdsgn/kit';

<Chip
  size={'small'}
  variant={'slate'}
  shape={'pill'}
  color={'volt5'}>
  Small Chip
</Chip>;
```

## Properties

| Name   | Type     | Default   | Description               |
| :----- | -------- | --------- | ------------------------- |
| size   | `string` | `sm`      | The object for fontSize.  |
| font   | `string` | `system`  | `font-family`             |
| weight | `string` | `normal`  | `font-weight`             |
| align  | `string` | `left`    | `left`, `center`, `right` |
| color  | `string` | `slate12` | the text color            |
