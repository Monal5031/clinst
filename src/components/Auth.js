import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LogIn from './Login';
import SignUp from './SignUp';
import Loaderx from './Loader';

class Auth extends React.Component {
	state = {
		loading: true
	};

	componentDidUpdate = () => {
		if (this.props.auth.authenticated) {
			this.props.history.push('/');
		} else if (this.state.loading && !this.props.auth.authenticated) {
			this.setState({ loading: false });
		}
	};

	render() {
		const { loading } = this.state;
		return (
			<div className="auth">
				{!loading ? (
					<React.Fragment>
						<LogIn />
						<SignUp />
					</React.Fragment>
				) : (
					<Loaderx />
				)}
			</div>
		);
	}
}

Auth.propTypes = {
	auth: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Auth);