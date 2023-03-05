import { GameType } from '../types/GameTypes'
export const getNearCells = (cell: number) => {
	// near cells should be in the same column or the prev one or the next one
	return [
		cell - 16,
		cell - 15,
		cell + 1,
		cell + 17,
		cell + 16,
		cell + 15,
		cell - 1,
		cell - 17
	].filter(
		(x) =>
			x % 16 >= (cell % 16) - 1 &&
			x % 16 <= (cell % 16) + 1 &&
			x <= 255 &&
			x >= 0
	)
}
export const createFieldHelper = (): Pick<
	GameType,
	'openedField' | 'indicesOfMines'
> => {
	const minesSet: Set<number> = new Set()
	// We are waiting until the set is filled with 40 indexes
	while (minesSet.size < 40) {
		minesSet.add(Math.floor(Math.random() * 256))
	}
	// Create empty opened field
	const field = Array(256).fill(0)
	minesSet.forEach((el) => {
		//For each mine, we add one to the near cells
		getNearCells(el).forEach((cell) => (field[cell] += 1))
	})
	// We point to the field where the mines are located
	minesSet.forEach((el) => (field[el] = 'm'))
	return { openedField: field, indicesOfMines: Array.from(minesSet) }
}
export const openCellHelper = (
	cell: number,
	field: GameType['field'],
	openedField: GameType['openedField']
): GameType['field'] => {
	// Ignore cells with flags|question
	if (field[cell] === 'f' || field[cell] === 'q') return field
	// Get value from opened field
	const value = openedField[cell]
	// If the cell does not have mines (0) next to it, then this value "o"
	field[cell] = value === 0 ? 'o' : value
	if (value === 0) {
		// If the cell have mines next to it, then open near cells
		getNearCells(cell)
			.filter((i) => field[i] !== 'o')
			.forEach((el) => {
				openCellHelper(el, field, openedField).forEach(
					(val, ind) => (field[ind] = val)
				)
			})
	}
	return field
}
export const checkWin = (field: GameType['field']): boolean => {
	// We count all the closed, question, flag cells and compare the number with 40
	return (
		Array(256)
			.fill(0)
			.reduce(
				(counter, current, index) =>
					counter +
					(['undefined', 'q', 'f'].includes(String(field[index]))
						? 1
						: 0)
			) <= 40
	)
}
