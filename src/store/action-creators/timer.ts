import { TimerAction, TimerActionTypes } from '../../types/TimerTypes'

export const startTimer = (): TimerAction => {
	return { type: TimerActionTypes.START_TIMER }
}
export const stopTimer = (): TimerAction => {
	return { type: TimerActionTypes.STOP_TIMER }
}
export const increaseTimer = (): TimerAction => {
	return { type: TimerActionTypes.INCREASE_TIMER }
}
export const resetToZeroTimer = (): TimerAction => {
	return { type: TimerActionTypes.RESET_TO_ZERO_TIMER }
}
