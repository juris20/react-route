import React, { Component } from 'react';

// splash screen
import {NavLink, Link, withRouter} from 'react-router-dom';
class Navbar extends Component {
    constructor(props) {
        super(props);

        // setInterval(() => {
            props.history.push('/');
        // }, 2000);
    }

    render() {
        return (
            <nav className="nav-wapper red draken-3">
                <div className="container">
                    <a className="brand-logo">Poke'Times</a>
                    <ul className="right">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default withRouter(Navbar);