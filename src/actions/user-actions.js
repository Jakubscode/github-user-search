import fetch from 'isomorphic-fetch'
import * as types from './action-types'
import * as utils from '../utils'

/* Sync actions creators */

export const setUserInput = input => ({
	type: types.SET_USER_INPUT,
	input,
})
export const setInputCorrect = isInputValid => ({
	type: types.SET_INPUT_CORRECT,
	isInputValid,
})
export const setFetchSuccess = fetchSuccess => ({
	type: types.SET_FETCH_SUCCESS,
	fetchSuccess,
})
export const addUser = user => ({
	type: types.ADD_USER,
	user,
})
export const setCurrentUser = currentUser => ({
	type: types.SET_CURRENT_USER,
	currentUser,
})
/* Sync action creator handled by thunk */

export const validateAndSetInput = name => (dispatch) => {
	const isValid = utils.validateUserName(name)
	dispatch(setUserInput(name))
	dispatch(setInputCorrect(isValid))
}
/* Async action creator handled by thunk */

export const fetchUser = name => (dispatch, getState) => {
	if (getState().userState.isInputValid) {
		const user = utils.findUser(name, getState().userState.usersCollection)
		if (user) {
			dispatch(setCurrentUser(user))
			dispatch(setFetchSuccess(true))
		} else {
			fetch(`https://api.github.com/users/${name}`)
				.then(response => (
					response.status === 200 ? response.json() : undefined
				))
				.then((newUser) => {
					if (newUser) {
						dispatch(addUser(newUser))
						dispatch(setCurrentUser(newUser))
						dispatch(setFetchSuccess(true))
					} else {
						dispatch(setFetchSuccess(false))
					}
				})
		}
	}
}
