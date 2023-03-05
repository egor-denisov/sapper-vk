import * as TimerActionCreators from './timer'
import * as GameActionCreators from './game'

export default {
	...TimerActionCreators,
	...GameActionCreators
}
