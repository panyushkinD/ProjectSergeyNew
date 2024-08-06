import React from 'react';
import './Login.css'; // Подключение стилей

const Login = () => {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1>Вход</h1>
                <form className="auth-form">
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" placeholder="Введите ваш email" />

                    <label htmlFor="password">Пароль:</label>
                    <input id="password" type="password" placeholder="Введите ваш пароль" />

                    <button type="submit">Войти</button>
                </form>
            </div>
        </div>
    );
};

export default Login;