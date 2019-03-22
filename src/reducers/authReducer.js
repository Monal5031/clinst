import { authTypes } from '../actions/types';

const initialState = {
	authenticated: false,
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case authTypes.SIGN_UP:
		case authTypes.LOG_IN:
			return {
				...state,
				authenticated: true,
				loading: false
			};
		case authTypes.LOG_OUT:
			return {
				...state,
				authenticated: false
			};
		case authTypes.AUTH_LOADING:
			return {
				...state,
				loading: true
			};
		case authTypes.CLEAR_AUTH_LOADING:
			return {
				...state,
				loading: false
			};
		default:
			return state;
	}
}