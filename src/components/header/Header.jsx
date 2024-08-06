import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">О нас</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Контакты</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;