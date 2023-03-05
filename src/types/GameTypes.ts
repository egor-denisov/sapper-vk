export type FieldCellType =
	| number
	| 'm'
	| 'o'
	| 'f'
	| 'q'
	| 'M'
	| 'w'
	| undefined
export type OpenedFieldCelltype = number | 'm'
export type GameType = {
	inGame: boolean
	youWin: boolean | null
	countOfFlags: number
	indicesOfMines: number[]
	field: FieldCellType[]
	openedField: OpenedFieldCelltype[]
	smileCondition: number
}
export enum GameActionTypes {
	RECREATE_FIELD = 'RECREATE_FIELD',
	SET_CONDITION = 'SET_CONDITION',
	OPEN_CELL = 'OPEN_CELL',
	START_GAME = 'START_GAME',
	RESTART_GAME = 'RESTART_GAME',
	CHANGE_SMILE_CONDITION = 'CHANGE_SMILE_CONDITION'
}
interface RecreateField {
	type: GameActionTypes.RECREATE_FIELD
	payload: number
}
interface SetCondition {
	type: GameActionTypes.SET_CONDITION
	payload: number
}
interface OpenCell {
	type: GameActionTypes.OPEN_CELL
	payload: number
}
interface RestartGame {
	type: GameActionTypes.RESTART_GAME
}
interface ChangeSmileCondition {
	type: GameActionTypes.CHANGE_SMILE_CONDITION
	payload: number
}
export type GameAction =
	| RecreateField
	| SetCondition
	| OpenCell
	| RestartGame
	| ChangeSmileCondition
