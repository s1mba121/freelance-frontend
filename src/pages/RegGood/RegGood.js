import React from "react";
import "./RegGood.css";
import { Link } from "react-router-dom";

const RegGood = () => (
        <div className="reg-good-container">
            <h1 className="reg-good-title">Успешно!</h1>
            <p className="reg-good-text">
                Благодарим за регистрацию! Бонусы были
                <br />
                автоматически начислены на ваш аккаунт. Для
                <br />
                получения более подробной информации о том,
                <br />
                что такое бонусы и для чего они будут нужны,
                <br />
                присоединяйтесь к нам в социальных сетях.
            </p>
            <Link to="/" className="status-page-button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                >
                    <path
                        d="M4.37903 6.9165H14.4624C16.1758 6.9165 17.0326 6.9165 17.6707 7.28494C18.0888 7.5263 18.4359 7.87345 18.6773 8.2915C19.0457 8.92964 19.0457 9.78637 19.0457 11.4998C19.0457 13.2133 19.0457 14.07 18.6773 14.7082C18.4359 15.1262 18.0888 15.4734 17.6707 15.7147C17.0326 16.0832 16.1758 16.0832 14.4624 16.0832H8.0457M4.37903 6.9165L7.12903 4.1665M4.37903 6.9165L7.12903 9.6665"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                Вернуться
            </Link>
        </div>
    );

export default RegGood;
