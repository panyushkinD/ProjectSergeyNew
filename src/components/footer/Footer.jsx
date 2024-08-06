import React from 'react';
import './Footer.css'; // Подключение стилей

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Ваш Сайт. Все права защищены.</p>
        </footer>
    );
};

export default Footer;