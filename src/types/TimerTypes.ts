export type TimerType = {
	current: number
	active: boolean
}
export enum TimerActionTypes {
	START_TIMER = 'START_TIMER',
	STOP_TIMER = 'STOP_TIMER',
	INCREASE_TIMER = 'INCREASE_TIMER',
	RESET_TO_ZERO_TIMER = 'RESET_TO_ZERO_TIMER'
}
interface StartTimer {
	type: TimerActionTypes.START_TIMER
}
interface StopTimer {
	type: TimerActionTypes.STOP_TIMER
}
interface IncreaseTimer {
	type: TimerActionTypes.INCREASE_TIMER
}
interface ResetToZeroTimer {
	type: TimerActionTypes.RESET_TO_ZERO_TIMER
}

export type TimerAction =
	| StartTimer
	| StopTimer
	| IncreaseTimer
	| ResetToZeroTimer
