import { GameAction, GameActionTypes } from '../../types/GameTypes'

export const recreateField = (cell: number): GameAction => {
	return { type: GameActionTypes.RECREATE_FIELD, payload: cell }
}
export const openCell = (cell: number): GameAction => {
	return { type: GameActionTypes.OPEN_CELL, payload: cell }
}
export const setFlag = (cell: number): GameAction => {
	return { type: GameActionTypes.SET_CONDITION, payload: cell }
}
export const restartGame = (): GameAction => {
	return { type: GameActionTypes.RESTART_GAME }
}
export const setSmileCondition = (condition: number): GameAction => {
	return { type: GameActionTypes.CHANGE_SMILE_CONDITION, payload: condition }
}
