/** @format */

export interface BASE_SELECT_PROPS {
  className?: string
  /**
   *
   * The value of the select when initially rendered.
   * Use when you do not need to control the state of the select.
   */
  defaultValue?: string
  /**
   *
   * The controlled value of the select.
   * Should be used in conjunction with onValueChange.
   */
  value?: string
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void
  /**
   *
   * The controlled open state of the select.
   * Must be used in conjunction with onOpenChange.
   */
  open?: boolean
  onOpenChange?: (open: boolean) => void
  /**
   *
   * The name of the select.
   * Submitted with its owning form as part
   * of a name/value pair.
   */
  name?: string
  disabled?: boolean
  required?: boolean
}
