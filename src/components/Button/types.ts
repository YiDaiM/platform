export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'medium' | 'small'
export type nativeType = 'button' | 'reset' | 'submit'

export interface ButtonProps {
  type?: ButtonType,
  size?: ButtonSize,
  plain?: boolean,
  round?: boolean,
  circle?: boolean,
  autofocus?: boolean,
  nativeType?: nativeType
}

export interface ButtonInstance {
  ref: HTMLButtonElement
}