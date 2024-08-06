import React from 'react';
import './Register.css'; // Подключение стилей

const Register = () => {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1>Регистрация</h1>
                <form className="auth-form">
                    <label htmlFor="first-name">Имя:</label>
                    <input id="first-name" type="text" placeholder="Введите ваше имя" />

                    <label htmlFor="last-name">Фамилия:</label>
                    <input id="last-name" type="text" placeholder="Введите вашу фамилию" />

                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" placeholder="Введите ваш email" />

                    <label htmlFor="password">Пароль:</label>
                    <input id="password" type="password" placeholder="Введите ваш пароль" />

                    <label htmlFor="confirm-password">Подтвердите пароль:</label>
                    <input id="confirm-password" type="password" placeholder="Подтвердите ваш пароль" />


                    <button type="submit">Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
};

export default Register;