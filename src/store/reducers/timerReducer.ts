import {
	TimerAction,
	TimerType,
	TimerActionTypes
} from '../../types/TimerTypes'

const initialTimer: TimerType = {
	current: 0,
	active: false
}
export const TimerReducer = (state = initialTimer, action: TimerAction) => {
	switch (action.type) {
		case TimerActionTypes.START_TIMER:
			return { current: 0, active: true }
		case TimerActionTypes.STOP_TIMER:
			return { ...state, active: false }
		case TimerActionTypes.INCREASE_TIMER:
			if (state.current >= 999) return { ...state, active: false }
			else return { ...state, current: state.current + 1 }
		case TimerActionTypes.RESET_TO_ZERO_TIMER:
			return { current: 0, active: false }
		default:
			return state
	}
}
