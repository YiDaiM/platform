export interface tooltipProps {
  visible?: false;
  trigger: 'hover' | 'click';
}

export interface eventType {
  click?: () => void;
  mouseleave?: () => void;
  mouseenter?: () => void;
}

export interface emitType { 
  change: () => void;
}