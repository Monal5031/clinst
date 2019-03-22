import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { logInWithEmail, logInWithGoogle } from '../actions/authActions';

import FontAwesome from 'react-fontawesome';

class LogIn extends React.Component {
	state = {
		email: '',
		password: ''
	};

	handleChange = (e) => {
		this.setState({
            [e.target.name]: e.target.value
        });
	};

	logIn = (e) => {
		e.preventDefault();

        const email = this.state.email;
        const password = this.state.password;
		this.props.logInWithEmail(email, password, this.props.history);
	};

	logInWithGoogle = () => {
		this.props.logInWithGoogle(this.props.history);
	};

	render() {
		return (
			<div className="login">
				<h1 className="">Log In</h1>
				<form onSubmit={this.logIn}>
					<div className="">
						<label htmlFor="loginEmail" className="">
							Email
						</label>
						<input type="email" id="loginEmail" name="email" onChange={this.handleChange} />
					</div>
					<div className="input">
						<label htmlFor="loginPassword" className="">
							Password
						</label>
						<input type="password" id="loginPassword" name="password" onChange={this.handleChange} />
					</div>
					<button type="submit" className="btn">
						Log In
					</button>
				</form>
				<div className="">OR</div>
				<button className="" onClick={this.logInWithGoogle}>
					<FontAwesome name="google" />
					Log In with Google
				</button>
			</div>
		);
	}
}

LogIn.propTypes = {
	logInWithEmail: PropTypes.func.isRequired,
	logInWithGoogle: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired
};

export default connect(
	null,
	{ logInWithEmail, logInWithGoogle }
)(withRouter(LogIn));