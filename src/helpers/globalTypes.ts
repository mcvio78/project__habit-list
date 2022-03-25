import {
  HabitStatus,
  HabitType,
  TargetType,
  HabitFinalState,
} from './constants';

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
  selectedDateObj: {
    selectedDateString: string | null;
    selectedDateISO: string | null;
    selectedDateTsUTC: number | null;
    selectedDateTsTZ: number | null;
    timezone: string | null;
  };
}

export interface HabitCreate extends HabitCollected {
  habitType: HabitType;
  habitName: string;
  targetType: TargetType;
  targetValue: number;
  targetCurrent: number;
  targetUnit: string;
  selectedDateObj: {
    selectedDateString: string;
    selectedDateISO: string;
    selectedDateTsUTC: number;
    selectedDateTsTZ: number;
    timezone: string;
  };
}

export interface HabitStored extends HabitCreate {
  _id?: number;
  habitStatus: HabitStatus;
}

export interface HabitStoredOptional extends Partial<HabitStored> {}

export interface HabitWithFinalState extends HabitStored {
  finalState: HabitFinalState;
  isValid: boolean;
}
