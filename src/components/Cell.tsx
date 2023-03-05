import { FC, useState, useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { FieldCellType } from '../types/GameTypes'
import { getNearCells } from '../utils'

type props = {
	id: number
	value: FieldCellType
	currentCell: { active: boolean; values: number[] }
	setCurrentCell: Function
}
const getCondtition = (value: FieldCellType) => {
	if (Number(value)) return { stage: Number(value) - 1, isNumber: true }
	if (value === 'o') return { stage: 1, isNumber: false }
	if (value === 'm') return { stage: 5, isNumber: false }
	if (value === 'f') return { stage: 2, isNumber: false }
	if (value === 'q') return { stage: 3, isNumber: false }
	if (value === 'M') return { stage: 6, isNumber: false }
	if (value === 'w') return { stage: 7, isNumber: false }
	return { stage: 0, isNumber: false }
}
const Cell: FC<props> = ({ id, value, currentCell, setCurrentCell }) => {
	const [condtion, setCondition] = useState({ stage: 0, isNumber: false })

	const { youWin, inGame } = useTypedSelector((state) => state.game)
	const { setSmileCondition, recreateField, openCell, setFlag } = useActions()

	const onHover = () => {
		if (value === undefined) {
			setCurrentCell({ active: true, values: [id] })
		} else if (Number(value) >= 1 && Number(value) <= 8) {
			setCurrentCell({ active: true, values: getNearCells(id) })
		} else {
			setCurrentCell({ active: true, values: [] })
		}
	}
	const onMouseUp = (e: React.MouseEvent) => {
		setSmileCondition(0)
		setCurrentCell({ active: false, values: [] })
		if (youWin === null && e.button === 0 && value === undefined) {
			if (!inGame) {
				recreateField(id)
			} else {
				openCell(id)
			}
		}
	}
	const onMouseDown = (e: React.MouseEvent) => {
		if (youWin === null && e.button === 0) onHover()
	}
	const onMouseEnter = () => {
		if (currentCell.active) onHover()
	}
	const onContextMenu = (e: React.MouseEvent) => {
		e.preventDefault()
		setFlag(id)
	}

	useEffect(() => {
		if (
			value === undefined &&
			currentCell.values.includes(id) &&
			currentCell.active
		) {
			setCondition(getCondtition('o'))
		} else {
			setCondition(getCondtition(value))
		}
	}, [value, currentCell.values])

	return (
		<div
			className="cell"
			style={{
				backgroundPositionX: -17 * condtion.stage,
				backgroundPositionY: -51 - (condtion.isNumber ? 17 : 0)
			}}
			onContextMenu={onContextMenu}
			onMouseUp={onMouseUp}
			onMouseDown={onMouseDown}
			onMouseEnter={onMouseEnter}
			onDragStart={(e) => e.preventDefault()}
		></div>
	)
}

export default Cell
