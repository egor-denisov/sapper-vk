import { FC, useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Digit from './Digit'

const Timer: FC = () => {
	const { current, active } = useTypedSelector((state) => state.timer)
	const { increaseTimer } = useActions()

	useEffect(() => {
		let interval: any
		if (active) interval = setInterval(() => increaseTimer(), 1000)
		return () => clearInterval(interval)
	}, [active])

	return (
		<div className="timer">
			<Digit value={~~(current / 100)} />
			<Digit value={~~(current / 10) % 10} />
			<Digit value={current % 10} />
		</div>
	)
}

export default Timer
