export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export enum HabitType {
  ToDo = 'toDo',
  Avoid = 'avoid',
}

export enum TargetType {
  min = 'min',
  max = 'max',
}

export enum HabitStatus {
  Pending = 'pending',
  Done = 'done',
  Undone = 'undone',
  Postponed = 'postponed',
}

export enum HabitFinalState {
  Pending = 'pending',
  Successful = 'successful',
  Failed = 'failedActive',
  Postponed = 'postponed',
  Error = 'error',
}

export enum HabitChanges {
  Pristine = 'pristine',
  Dirty = 'dirty',
}
