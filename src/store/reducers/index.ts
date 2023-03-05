import { combineReducers } from 'redux'
import { TimerReducer } from './timerReducer'
import { GameReducer } from './gameReducer'

export const rootReducer = combineReducers({
	timer: TimerReducer,
	game: GameReducer
})

export type RootState = ReturnType<typeof rootReducer>
