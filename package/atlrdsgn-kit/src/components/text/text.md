# Text Component

## Installation

If you have not already..

```shell
yarn add @atlrdsgn/kit
```

## Usage

```tsx
import { Text } from '@atlrdsgn/kit';

<Text
  size='sm'
  font='system'
  weight='semibold'
  align='center'
  color='slate8'>
  Aliqua ut id quis Lorem ipsum et anim.
</Text>;
```

## Properties

| Name   | Type     | Default   | Description               |
| :----- | -------- | --------- | ------------------------- |
| size   | `string` | `sm`      | The object for fontSize.  |
| font   | `string` | `system`  | `font-family`             |
| weight | `string` | `normal`  | `font-weight`             |
| align  | `string` | `left`    | `left`, `center`, `right` |
| color  | `string` | `slate12` | the text color            |
