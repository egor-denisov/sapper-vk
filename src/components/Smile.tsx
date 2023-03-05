import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const Smile = () => {
	const { smileCondition } = useTypedSelector((state) => state.game)
	const { restartGame, resetToZeroTimer, setSmileCondition } = useActions()

	const onMouseUp = () => {
		setSmileCondition(3)
		restartGame()
		resetToZeroTimer()
	}
	const onMouseDown = () => {
		setSmileCondition(1)
	}
	return (
		<div
			className="smile"
			style={{ backgroundPositionX: -27 * smileCondition }}
			onMouseUp={onMouseUp}
			onMouseDown={onMouseDown}
		></div>
	)
}

export default Smile
