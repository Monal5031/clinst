import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert';
import PropTypes from 'prop-types';

import { signUpWithEmail, logInWithGoogle } from '../actions/authActions';

import FontAwesome from 'react-fontawesome';

class SignUp extends React.Component {
	state = {
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	handleChange = (e) => {
		this.setState({
            [e.target.name]: e.target.value
        });
	};

	signUpWithGoogle = () => {
		this.props.logInWithGoogle(this.props.history);
	};

	signUp = (e) => {
		e.preventDefault();

		const { name, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			return swal(`Passwords don't match`);
		} else if (name.trim().length === 0) {
			return swal('Please enter your name');
		} else if (password.length < 8) {
			return swal('Password should be at least 8 characters');
		} else {
			this.props.signUpWithEmail(name, email, password, this.props.history);
		}
	};

	render() {
		return (
			<div className="">
				<h1 className="">Sign Up</h1>
				<form onSubmit={this.signUp}>
					<div className="input">
						<label htmlFor="signUpName" className="">
							Name
						</label>
						<input type="text" id="signUpName" name="name" onChange={this.handleChange} />
					</div>
					<div className="input">
						<label htmlFor="signUpEmail" className="">
							Email
						</label>
						<input type="email" id="signUpEmail" name="email" onChange={this.handleChange} />
					</div>
					<div className="input">
						<label htmlFor="signUpPassword" className="">
							Password
						</label>
						<input type="password" id="signUpPassword" name="password" onChange={this.handleChange} />
					</div>
					<div className="input">
						<label htmlFor="signUpConfirmPassword" className="">
							Confirm Password
						</label>
						<input
							type="password"
							id="signUpConfirmPassword"
							name="confirmPassword"
							onChange={this.handleChange}
						/>
					</div>
					<button type="submit" className="">
						Sign Up
					</button>
				</form>
				<div className="">OR</div>
				<button className="" onClick={this.signUpWithGoogle}>
					<FontAwesome name="google" />
					Sign Up with Google
				</button>
			</div>
		);
	}
}

SignUp.propTypes = {
	signUpWithEmail: PropTypes.func.isRequired,
	logInWithGoogle: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired
};

export default connect(
	null,
	{ signUpWithEmail, logInWithGoogle }
)(withRouter(SignUp));