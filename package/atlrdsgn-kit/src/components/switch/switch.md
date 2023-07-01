# Switch Component

A composable UI switch primitive.

## Component Parts

- `Switch`
- `Switch.Toggle`

## Installation

If you have not already..

```shell
yarn add @atlrdsgn/kit
```

## Usage

```tsx
import { Switch } from '@atlrdsgn/kit';

<Switch
  className=''
  {...props}>
  <Switch.Toggle />
</Switch>;
```

## Properties

### `Switch.Root`

| Name              | Type      | Default   | Description                    |
| :---------------- | --------- | --------- | ------------------------------ |
| `className`       | `string`  | `sm`      | The object for fontSize.       |
| `asChild`         | `string`  | `system`  | `font-family`                  |
| `defaultChecked`  | `string`  | `normal`  | `font-weight`                  |
| `checked`         | `string`  | `left`    | `left`, `center`, `right`      |
| `onCheckedChange` | `string`  | `slate12` | the text color                 |
| `disabled`        | `boolean` | none      | Sets the component to disabled |

### `Switch.Toggle`

| Name        | Type     | Default  | Description              |
| :---------- | -------- | -------- | ------------------------ |
| `className` | `string` | `sm`     | The object for fontSize. |
| `asChild`   | `string` | `system` | `font-family`            |

## Example
