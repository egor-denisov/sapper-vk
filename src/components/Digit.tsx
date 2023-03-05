import { useState, FC } from 'react'

type props = {
	value: number
}
const Digit: FC<props> = ({ value }) => {
	return (
		<div
			className="digit"
			style={{ backgroundPositionX: -14 * ((value + 9) % 10) }}
		></div>
	)
}

export default Digit
