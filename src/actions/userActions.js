import { database, storage } from '../config/firebase';
import { getState } from '../Store';
import { userTypes } from './types';

export const getUserInfo = email => dispatch => {
	database.ref('users').once('value', snapshot => {
		snapshot.forEach(user => {
			if (user.val().email === email) {
				const currentUser = {
					name: user.val().name,
					email: user.val().email,
					photoURL: user.val().photoURL
				};

				dispatch({ type: userTypes.GET_USER_INFO, payload: currentUser });
				return;
			}
		});
	});
};

export const handlePost = post => dispatch => {
	dispatch(loading());
	const imageName = post.image.name.replace(/[ ']/g, '-');
	let imagePath;

	storage
		.ref(`posts/${imageName}`)
		.put(post.image)
		.on(
			'state_changed',
			fileSnapshot => (imagePath = fileSnapshot.ref.location.path),
			err => console.log(err),
			() => {
				database.ref('posts').push({
					imagePath,
					description: post.description,
					likes: [],
					comments: [],
					postedOn: Date.now(),
					postedBy: getState.user.name
				});
				dispatch({ type: userTypes.NEW_POST });
			}
		);
};

export const handleComment = (post, comment) => dispatch => {
	database.ref(`posts/${post}/comments`).push({ comment, user: getState.user.name });
};

export const handleLike = post => dispatch => {
	database.ref(`posts/${post}/likes`).push(getState.user.email);
};

export const handleDislike = post => dispatch => {
	database.ref(`posts/${post}/likes`).on('value', snapshot => {
		snapshot.forEach(like => {
			if (like.val() === getState.user.email) {
				database.ref(`posts/${post}/likes/${like.key}`).remove();
				return;
			}
		});
	});
};

const loading = () => ({
	type: userTypes.POST_LOADING
});