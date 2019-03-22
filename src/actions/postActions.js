import { database, storage } from '../config/firebase';
import { postTypes } from './types';

export const fetchPosts = () => dispatch => {
	dispatch(loading());
	database.ref('posts').on('value', snapshot => {
		const posts = [];
		const promises = [];

		snapshot.forEach(post => {
			const promise = storage
				.ref(`${post.val().imagePath}`)
				.getDownloadURL()
				.then(imageURL => {
					let comments = [];
					let likes = [];

					if (post.val().comments) {
						comments = Object.keys(post.val().comments).map(
							commentKey => post.val().comments[`${commentKey}`]
						);
					}
					if (post.val().likes) {
						likes = Object.keys(post.val().likes).map(likeKey => post.val().likes[`${likeKey}`]);
					}

					const currentPost = {
						key: post.key,
						username: post.val().postedBy,
						caption: post.val().caption,
						likes,
						comments,
						imageURL
					};
					posts.push(currentPost);
				});
			promises.push(promise);
		});

		Promise.all(promises).then(() => {
			posts.sort((a, b) => b.postedOn - a.postedOn);
			dispatch({ type: postTypes.GET_POSTS, payload: posts });
		});
	});
};

const loading = () => ({
	type: postTypes.POSTS_LOADING
});