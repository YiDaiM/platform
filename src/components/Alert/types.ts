import {colorType} from '@/components/commontType'

export interface alertType {
  title?: string;
  type: colorType;
  description?: string | number;
  closable?: boolean;
  center: 'center' | 'left' | 'right';
  closeText?: string | number;
  showIcon?: boolean;
  effect: 'light' | 'dark';
}