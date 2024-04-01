export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'medium' | 'small'

export interface ButtonProps {
  type?: ButtonType,
  size?: ButtonSize,
  plain?: boolean,
  round?: boolean,
  circle?: boolean
}