import { userTypes } from '../actions/types';

const initialState = {
	name: '',
	email: '',
	photoURL: '',
	likedPosts: [],
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case userTypes.GET_USER_INFO:
			return {
				...state,
				...action.payload
			};
		case userTypes.CLEAR_USER:
			return {
				...state,
				...initialState
			};
		case userTypes.NEW_POST:
			return {
				...state,
				loading: false
			};
		case userTypes.POST_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}