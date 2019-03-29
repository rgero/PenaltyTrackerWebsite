import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
    <header className="header">
        <div className="header__content">
            <Link className="header__title" to="/" exact="true"><h1>The Penalty Tracker</h1></Link>
        </div>
    </header>
);

export default Header;