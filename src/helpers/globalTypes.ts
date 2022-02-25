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
  habitType: HabitType.ToDo | HabitType.Avoid | '';
  habitName: string;
  targetType?: TargetType.min | TargetType.max | '';
  targetValue?: number | null;
  targetCurrent?: number | null;
  targetUnit?: string;
  expirationDate: Date | null;
}

export interface HabitCreate {
  habitType: HabitType.ToDo | HabitType.Avoid;
  habitName: string;
  targetType: TargetType.min | TargetType.max | '';
  targetValue: number | null;
  targetCurrent: number | null;
  targetUnit: string;
  expirationDate: Date;
}

export interface HabitStored {
  _id: number;
  habitType: HabitType;
  habitName: string;
  targetType: TargetType | '';
  targetValue: number | null;
  targetCurrent: number | null;
  targetUnit: string;
  habitStatus: HabitStatus;
  expirationDate: number;
}
