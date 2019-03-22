import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Fetch from './Fetch';

const Sidenav = ({ user }) => (
	<aside className="sidenav">
		<div className="sidenav-image">
			{!user.photoURL ? <img src="" alt="I" /> : <img src={user.photoURL} alt="I" />}
		</div>
		<h1 className="sidenav-name">{user.name}</h1>
		<a href="#modal" className="btn btn--primary">
			&#43; Create Post
		</a>
		<Fetch />
	</aside>
);

Sidenav.propTypes = {
	user: PropTypes.object.isRequired
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Sidenav);