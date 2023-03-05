import { FC } from 'react'
import Count from './Count'
import Smile from './Smile'
import Timer from './Timer'

const Header: FC = () => {
	return (
		<div className="header">
			<Count />
			<Smile />
			<Timer />
		</div>
	)
}

export default Header
