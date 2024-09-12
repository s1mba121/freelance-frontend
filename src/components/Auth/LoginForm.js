import React from "react";
import "./StepTwo.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <div className="input-container">
            <div className="input-wrapper">
                <span className="icon login-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                    >
                        <circle
                            cx="10.9999"
                            cy="5.49967"
                            r="3.66667"
                            stroke="#848484"
                            stroke-width="1.5"
                        />
                        <path
                            d="M13.7499 18.8975C12.9164 19.1237 11.984 19.2503 10.9999 19.2503C7.45609 19.2503 4.58325 17.6087 4.58325 15.5837C4.58325 13.5586 7.45609 11.917 10.9999 11.917C14.5437 11.917 17.4166 13.5586 17.4166 15.5837C17.4166 15.9002 17.3464 16.2073 17.2144 16.5003"
                            stroke="#848484"
                            stroke-width="1.5"
                            stroke-linecap="round"
                        />
                    </svg>
                </span>
                <input
                    className="input"
                    type="text"
                    placeholder="Введите ваш логин"
                />
            </div>
            <div className="input-wrapper">
                <span className="icon password-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                    >
                        <path
                            d="M19.311 4.58301C19.8536 5.46122 20.1666 6.49521 20.1666 7.60199C20.1666 10.7881 17.5731 13.371 14.3739 13.371C13.7902 13.371 12.461 13.2368 11.8144 12.7002L11.0061 13.5052C10.3326 14.1759 10.8714 14.1759 11.1408 14.7126C11.1408 14.7126 11.8144 15.6517 11.1408 16.5909C10.7367 17.1275 9.60507 17.8788 8.31183 16.5909L8.0424 16.8592C8.0424 16.8592 8.85068 17.7983 8.17712 18.7375C7.77298 19.2741 6.69528 19.8108 5.75229 18.8716C5.70738 18.9164 5.45592 19.1668 4.8093 19.8108C4.16268 20.4547 3.37239 20.0791 3.05807 19.8108L2.24979 19.0058C1.4954 18.2545 1.93546 17.4406 2.24979 17.1275L9.25485 10.1511C9.25485 10.1511 8.58129 9.07778 8.58129 7.60199C8.58129 4.41587 11.1747 1.83301 14.3739 1.83301C15.1245 1.83301 15.8417 1.97517 16.4999 2.23394"
                            stroke="#848484"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M16.3947 7.60228C16.3947 8.71372 15.49 9.61471 14.374 9.61471C13.258 9.61471 12.3533 8.71372 12.3533 7.60228C12.3533 6.49084 13.258 5.58984 14.374 5.58984C15.49 5.58984 16.3947 6.49084 16.3947 7.60228Z"
                            stroke="#848484"
                            stroke-width="1.5"
                        />
                    </svg>
                </span>
                <input className="input" type="password" placeholder="Пароль" />
                <span className="icon eye-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            d="M7.50008 3.71602C8.25969 3.47441 9.0921 3.33301 10.0001 3.33301C13.485 3.33301 15.8568 5.41597 17.271 7.25328C17.9793 8.17345 18.3334 8.63353 18.3334 9.99967C18.3334 11.3658 17.9793 11.8259 17.271 12.7461C15.8568 14.5834 13.485 16.6663 10.0001 16.6663C6.51518 16.6663 4.14339 14.5834 2.72916 12.7461C2.02088 11.8259 1.66675 11.3658 1.66675 9.99967C1.66675 8.63353 2.02088 8.17345 2.72916 7.25328C3.13018 6.73229 3.60819 6.19155 4.16675 5.68415"
                            stroke="#3F3F3F"
                            stroke-width="1.5"
                            stroke-linecap="round"
                        />
                        <path
                            d="M12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10Z"
                            stroke="#3F3F3F"
                            stroke-width="1.5"
                        />
                    </svg>
                </span>
            </div>
            <div className="register-button-container">
                <button className="register-button">ВОЙТИ</button>
                <Link to="/reset-password" className="reset-password-button">
                    ЗАБЫЛИ ПАРОЛЬ?
                </Link>
            </div>
        </div>
    );
};

export default LoginForm;
