export enum HabitType {
  ToDo = 'toDo',
  Avoid = 'avoid',
}

export enum TargetType {
  min = 'min',
  max = 'max',
}

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export enum HabitState {
  Unchecked = 'unchecked',
  Done = 'done',
  Undone = 'undone',
  Postponed = 'postponed',
}

export enum FinalState {
  Pending = 'pending',
  SuccessfulActive = 'successfulActive',
  FailedActive = 'failedActive',
  PostponedActive = 'postponedActive',
  SuccessfulExpired = 'successfulExpired',
  FailedExpired = 'failedExpired',
  PostponedExpired = 'postponedExpired',
}
