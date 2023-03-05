import { GameAction, GameActionTypes, GameType } from '../../types/GameTypes'
import { checkWin, createFieldHelper, openCellHelper } from '../../utils'

const initialGame: GameType = {
	inGame: false,
	youWin: null,
	countOfFlags: 0,
	indicesOfMines: [],
	field: [],
	openedField: [],
	smileCondition: 0
}
export const GameReducer = (state = initialGame, action: GameAction) => {
	switch (action.type) {
		case GameActionTypes.RECREATE_FIELD:
			// Create new field
			let { openedField, indicesOfMines } = createFieldHelper()
			// Until there is a mine on the clicked cell, create the field again
			while (openedField[action.payload] === 'm') {
				const res = createFieldHelper()
				openedField = res.openedField
				indicesOfMines = res.indicesOfMines
			}
			// Open the clicked cell
			const field = openCellHelper(action.payload, [], openedField)
			return {
				...initialGame,
				inGame: true,
				field: field,
				openedField: openedField,
				indicesOfMines: indicesOfMines
			}

		case GameActionTypes.SET_CONDITION:
			const tempField = [...state.field]
			if (!state.inGame) return { ...state }
			if (
				state.countOfFlags < 40 &&
				state.field[action.payload] === undefined
			) {
				// If cell is clear and count of flaf <= 40, then put up flag
				tempField[action.payload] = 'f'
				return {
					...state,
					countOfFlags: state.countOfFlags + 1,
					field: tempField
				}
			} else if (state.field[action.payload] === 'f') {
				// If there is a flag in the cell, then remove it and raise a question
				tempField[action.payload] = 'q'
				return {
					...state,
					countOfFlags: state.countOfFlags - 1,
					field: tempField
				}
			} else if (state.field[action.payload] === 'q') {
				// If there is a question in the flag, then clear cell
				tempField[action.payload] = undefined
				return { ...state, field: tempField }
			}
			return { ...state }

		case GameActionTypes.OPEN_CELL:
			const cell = action.payload
			// Cells with Flag|Question must be non-clickable
			if (state.field[cell] === 'f' || state.field[cell] === 'q') {
				return { ...state }
			}
			// Check for mine on cell
			if (state.openedField[cell] === 'm') {
				return {
					...state,
					field: Array(256)
						.fill(0)
						.map((x, i) => {
							if (cell === i) return 'M'
							else {
								if (state.field[i] === 'q') {
									return 'q'
								} else if (state.field[i] === 'f') {
									// Сheck if the flag is set correctly
									return state.indicesOfMines.includes(i)
										? 'f'
										: 'w'
								} else {
									// Сhecking unflagged mines
									return state.indicesOfMines.includes(i)
										? 'm'
										: state.field[i]
								}
							}
						}),
					inGame: false,
					youWin: false,
					smileCondition: 4
				}
			}
			// Get new field with open cell
			const f = openCellHelper(cell, state.field, state.openedField)
			// Check for victory
			if (checkWin(state.field)) {
				return {
					...state,
					field: f,
					inGame: false,
					youWin: true,
					smileCondition: 3
				}
			}
			// If none of the above works, then just open cell
			return { ...state, field: f, inGame: true, smileCondition: 0 }
		case GameActionTypes.RESTART_GAME:
			return { ...initialGame }

		case GameActionTypes.CHANGE_SMILE_CONDITION:
			return { ...state, smileCondition: action.payload }

		default:
			return state
	}
}
