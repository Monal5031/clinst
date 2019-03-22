import { auth, database, googleAuthProvider } from '../config/firebase';
import { authTypes, userTypes } from './types';

export const logInWithEmail = (email, password, history) => dispatch => {
	dispatch(loading());
	auth.signInWithEmailAndPassword(email, password)
		.then(res => {
			const user = {
				name: res.user.displayName,
				email: res.user.email,
				photoURL: res.user.photoURL
			};

			dispatch({ type: authTypes.LOG_IN });
			dispatch({ type: userTypes.GET_USER_INFO, payload: user });
			history.push('/');
		})
		.catch(err => console.log(err));
};

export const logInWithGoogle = history => dispatch => {
	dispatch(loading());
	auth.signInWithPopup(googleAuthProvider)
		.then(res => {
			if (res.additionalUserInfo.isNewUser) {
				database.ref('users').push({
					name: res.user.displayName,
					email: res.user.email,
					photoURL: res.user.photoURL
				});
			}

			dispatch({ type: authTypes.LOG_IN });
			history.push('/');
		})
		.catch(err => console.log(err));
};

export const signUpWithEmail = (name, email, password, history) => dispatch => {
	dispatch(loading());
	auth.createUserWithEmailAndPassword(email, password)
		.then(res => {
			database.ref('users').push({ name, email });

			dispatch({ type: authTypes.SIGN_UP });
			history.push('/');
		})
		.catch(err => console.log(err));
};

export const signOut = () => dispatch => {
	auth.signOut()
		.then(() => {
			dispatch({ type: authTypes.LOG_OUT });
			dispatch({ type: userTypes.CLEAR_USER });
		})
		.catch(err => console.log(err));
};

const loading = () => ({
	type: authTypes.AUTH_LOADING
});