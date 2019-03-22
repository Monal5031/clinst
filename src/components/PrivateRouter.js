import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRouter = ({ component: Component, auth, ...rest }) => (
	<Route {...rest} render={props => (auth.authenticated ? <Component {...props} /> : <Redirect to="/login" />)} />
);

PrivateRouter.propTypes = {
	component: PropTypes.any.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(PrivateRouter);