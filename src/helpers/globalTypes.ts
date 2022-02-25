import { HabitStatus, HabitType, TargetType } from './constants';

export interface BreakPointsProps<T> {
  de?: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

export type SpaceValue = `${number}px` | `${number}%` | 0 | 'auto';

export interface HabitCollected {
  habitType: HabitType | '';
  habitName: string;
  targetType: TargetType | '';
  targetValue: number | null;
  targetCurrent: number | null;
  targetUnit: string;
  expirationDate: Date | null;
}

export interface HabitCreate extends HabitCollected {
  habitType: HabitType;
  expirationDate: Date;
}

export interface HabitStored extends Omit<HabitCreate, 'expirationDate'> {
  _id?: number;
  habitStatus: HabitStatus;
  expirationDate: number;
}
