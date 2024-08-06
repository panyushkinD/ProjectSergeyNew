import React, { useState } from 'react';
import './Sidebar.css';
import {Link} from "react-router-dom"; // Подключение стилей

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleSidebar}>×</button>
                <nav className="sidebar-nav">
                    <Link to="/login" className="auth-btn login-btn">Войти</Link>
                    <Link to="/register" className="auth-btn register-btn">Регистрация</Link>
                </nav>
            </div>
            <button className="open-btn" onClick={toggleSidebar}>☰</button>
        </>
    );
};

export default Sidebar;