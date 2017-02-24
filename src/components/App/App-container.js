import { connect } from 'react-redux'

import * as actions from '../../actions/user-actions'
import { debounce } from '../../utils'
import AppView from './App-view.jsx'

import './App-style.css'

const mapStateToProps = state => ({
	input: state.userState.input,
	user: state.userState.currentUser,
	fetchSuccess: state.userState.fetchSuccess,
	isInputValid: state.userState.isInputValid,
})

const debounceInput = debounce()

const mapDispatchToProps = (dispatch) => {
	const dispatches = {
		handleInput: (event) => {
			const input = event.target.value
			dispatch(actions.validateAndSetInput(input))
			debounceInput(() => dispatch(actions.fetchUser(input)), 800)
		},
	}
	return dispatches
}
export default connect(mapStateToProps, mapDispatchToProps)(AppView)
