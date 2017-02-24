import * as types from '../actions/action-types'

const initialState = {
	input: '',
	isInputValid: true,
	currentUser: undefined,
	fetchSuccess: true,
	usersCollection: [],
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
	case types.SET_USER_INPUT : {
		return { ...state, input: action.input }
	}
	case types.SET_INPUT_CORRECT : {
		return { ...state, isInputValid: action.isInputValid }
	}
	case types.SET_FETCH_SUCCESS : {
		return { ...state, fetchSuccess: action.fetchSuccess }
	}
	case types.SET_CURRENT_USER : {
		return { ...state, currentUser: action.currentUser }
	}
	case types.ADD_USER : {
		return { ...state, usersCollection: [...state.usersCollection, action.user] }
	}
	default : {
		return state
	}
	}
}

export default userReducer
