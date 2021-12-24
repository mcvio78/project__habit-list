export interface BreakPointsProps<T> {
  de?: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

export type SpaceValue = `${number}px` | `${number}%` | 0 | 'auto';

export type BorderValue = `${number}px` | `${number}%`;
