import { postTypes } from '../actions/types';

const initialState = {
	posts: [],
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case postTypes.GET_POSTS:
			return {
				...state,
				posts: action.payload,
				loading: false
			};
		case postTypes.POSTS_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}