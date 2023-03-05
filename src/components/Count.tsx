import { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Digit from './Digit'

const Count: FC = () => {
	const { countOfFlags } = useTypedSelector((state) => state.game)

	return (
		<div className="count">
			<Digit value={~~((40 - countOfFlags) / 100)} />
			<Digit value={~~((40 - countOfFlags) / 10) % 10} />
			<Digit value={(40 - countOfFlags) % 10} />
		</div>
	)
}

export default Count
