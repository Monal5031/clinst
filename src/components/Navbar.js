import React, { Component } from 'react';

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
                </div>
            </nav>
        );    
    }
}

export default Navbar;