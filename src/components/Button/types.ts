import { colorType, size } from '@/components/commontType'
export type nativeType = 'button' | 'reset' | 'submit'

export interface ButtonProps {
  type?: colorType,
  size?: size,
  plain?: boolean,
  round?: boolean,
  circle?: boolean,
  autofocus?: boolean,
  nativeType?: nativeType
}

export interface ButtonInstance {
  ref: HTMLButtonElement
}