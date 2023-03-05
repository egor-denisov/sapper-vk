import { FC, useEffect, useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Cell from './Cell'

const Body: FC = () => {
	const [currentCell, setCurrentCell] = useState({
		active: false,
		values: []
	})

	const { field, inGame, youWin } = useTypedSelector((state) => state.game)
	const { startTimer, stopTimer, setSmileCondition } = useActions()

	useEffect(() => {
		if (currentCell.active) setSmileCondition(2)
	}, [currentCell])
	useEffect(() => {
		if (inGame && youWin === null) startTimer()
		else {
			stopTimer()
			setCurrentCell({ active: false, values: [] })
		}
	}, [inGame, youWin])

	return (
		<div className="body">
			{Array(256)
				.fill(0)
				.map((el, ind) => (
					<Cell
						id={ind}
						key={ind}
						value={field[ind]}
						currentCell={currentCell}
						setCurrentCell={setCurrentCell}
					/>
				))}
		</div>
	)
}

export default Body
