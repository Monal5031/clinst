import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signOut } from '../actions/authActions';
import { auth } from '../config/firebase';

import '../styles/navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
                <div className="nav-menus">
                    <div className="nav-brand">
                        <a href="/" className="nav-brand-logo">
                            Instagram
                        </a>
                    </div>
                    <div className="navbar__links">
					    {!auth.authenticated ? null : (
                            <p className="navbar__logout" onClick={signOut}>
                                Log Out
                            </p>
					    )}
                    </div>
                </div>
            </nav>
        );    
    }
}

Navbar.propTypes = {
	auth: PropTypes.object.isRequired,
	signOut: PropTypes.func.isRequired
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(
	mapStateToProps,
	{ signOut }
)(Navbar);