import React, { useState } from "react";
import "../../../pages/Auth/Auth.css";
import Footer from "../../Footer/Footer";
import "./ResetPassword.css";
import ReCAPTCHA from "react-google-recaptcha";

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [captchaValue, setCaptchaValue] = useState(null);
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [message, setMessage] = useState("");
    const [showNotification, setShowNotification] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        checkIfButtonCanBeActive(e.target.value, captchaValue);
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
        checkIfButtonCanBeActive(email, value);
    };

    const checkIfButtonCanBeActive = (emailValue, captchaValue) => {
        if (emailValue && captchaValue) {
            setIsButtonActive(true);
        } else {
            setIsButtonActive(false);
        }
    };

    const handleSubmit = async () => {
        if (!isButtonActive) return;

        try {
            const response = await fetch(
                "http://localhost:3000/api/auth/forgot-password",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                setShowNotification(true);
                setTimeout(() => {
                    setShowNotification(false);
                }, 3000);
                setEmail("");
            } else {
                setMessage(data.error || "Произошла ошибка. Попробуйте позже.");
            }
        } catch (error) {
            setMessage("Ошибка сети. Попробуйте снова.");
        }
    };

    return (
        <>
            <div className="auth-container">
                <div className="reset-password-container">
                    <h1 className="reset-password-title">
                        ВОССТАНОВЛЕНИЕ ПАРОЛЯ
                    </h1>
                    <div style={{ width: "100%" }} className="input-wrapper">
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
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M13.7499 18.8975C12.9164 19.1237 11.984 19.2503 10.9999 19.2503C7.45609 19.2503 4.58325 17.6087 4.58325 15.5837C4.58325 13.5586 7.45609 11.917 10.9999 11.917C14.5437 11.917 17.4166 13.5586 17.4166 15.5837C17.4166 15.9002 17.3464 16.2073 17.2144 16.5003"
                                    stroke="#848484"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                        <input
                            className="input"
                            type="email"
                            placeholder="Введите вашу почту"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="captcha-container">
                        <ReCAPTCHA
                            sitekey="6LcQOkMqAAAAAJEc_gcpOyan6OPOnbZQCZNaOvvR"
                            onChange={handleCaptchaChange}
                            size="large"
                            theme="dark"
                        />
                    </div>
                    <button
                        className={`register-button ${
                            isButtonActive ? "active" : ""
                        }`}
                        disabled={!isButtonActive}
                        onClick={handleSubmit}
                    >
                        ОТПРАВИТЬ ПИСЬМО
                    </button>
                    <button
                        style={{ marginBottom: "0", width: "100%" }}
                        className="reset-password-button"
                    >
                        ТРУДНОСТИ С ВОССТАНОВЛЕНИЕМ
                    </button>
                </div>
                <div
                    style={{
                        paddingTop: "0px",
                        position: "absolute",
                        bottom: "0px",
                    }}
                    className="footer"
                >
                    <div className="footer-container">
                        <div className="footer-block-text">
                            <h1 className="footer-text-title">Dwork</h1>
                            <p style={{ marginBottom: "8.78px" }}>
                                ООО «Dwork Studio»
                            </p>
                            <p style={{ marginBottom: "8.78px" }}>
                                Вид деятельности код: 63.11
                            </p>
                            <p>
                                Dwork осуществляет деятельность в области
                                <br />
                                информационных технологий
                            </p>
                        </div>
                        <div className="footer-block-buttons">
                            <div className="footer-block">
                                <h1 className="footer-block-title">
                                    Важная информация
                                </h1>
                                <a className="footer-block-button">
                                    Правила оплаты
                                </a>
                                <a className="footer-block-button">
                                    Условия использования ЗК
                                </a>
                                <a className="footer-block-button">
                                    Условия использования ИС
                                </a>
                            </div>
                            <div className="footer-block">
                                <h1 className="footer-block-title">Новости</h1>
                                <a className="footer-block-button">Блог</a>
                                <a className="footer-block-button">Telegram</a>
                                <a className="footer-block-button">YouTube</a>
                            </div>
                            <div className="footer-block">
                                <h1 className="footer-block-title">помощь</h1>
                                <a className="footer-block-button">Правила</a>
                                <a className="footer-block-button">
                                    Центр помощи
                                </a>
                                <a className="footer-block-button">Вики</a>
                            </div>
                            <div className="footer-block">
                                <h1 className="footer-block-title">Вакансии</h1>
                                <a className="footer-block-button">
                                    Заявка на модерацию
                                </a>
                                <a className="footer-block-button">
                                    Команда разработчиков
                                </a>
                                <a className="footer-block-button">
                                    Для сотрдуничества
                                </a>
                            </div>
                            <div className="footer-block">
                                <h1 className="footer-block-title">
                                    Поддержка
                                </h1>
                                <a className="footer-block-button">
                                    Чат с оператором
                                </a>
                                <a className="footer-block-button">
                                    Отправить тикет
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-line"></div>
                    <p className="footer-text">
                        Информация, опубликованная на данном сайте,
                        предназначена для любой аудитории,
                        <br />
                        если иное не указано дополнительно в отношении отдельных
                        материалов.
                    </p>
                    <div className="footer-krugs"></div>
                    <div className="footer-krugs-2"></div>
                </div>
            </div>

            {showNotification && (
                <div className="notification show">
                    <p
                        style={{
                            color: "#fff",
                            fontWeight: "bold",
                            fontFamily: "Inter",
                            fontSize: "16px",
                            margin: "0",
                        }}
                    >
                        Успешно
                    </p>
                    <p
                        style={{
                            color: "#C0C0C0",
                            margin: "0",
                            fontSize: "13px",
                            marginTop: "5px",
                        }}
                    >
                        Ссылка для восстановления пароля
                        <br />
                        отправлена на почту.
                    </p>
                </div>
            )}
        </>
    );
};

export default ResetPassword;
