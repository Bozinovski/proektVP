import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <h3>Aplikacija VP</h3>
            <ul className="nav-links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/filmovi">
                    <li>Filmovi</li>
                </Link>
                <Link to="/proekcii">
                    <li>Proekcii</li>
                </Link>
                <Link to="/registracija">
                    <li>Registracija</li>
                </Link>
                <Link to="/najava">
                    <li>Najava</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;