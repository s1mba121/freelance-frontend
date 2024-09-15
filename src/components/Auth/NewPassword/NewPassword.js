import React, { useState, useEffect } from "react";
import "../Auth.css";
import Footer from "../../Footer/Footer";
import "./NewPassword.css";
import { useParams, useNavigate } from "react-router-dom"; // Для получения параметров из ссылки

const NewPassword = () => {
    const { email, token } = useParams(); // Получение email и token из URL
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [message, setMessage] = useState(""); // Сообщение для пользователя
    const [showNotification, setShowNotification] = useState(false);

    const navigate = useNavigate(); // Инициализация navigate

    // Активация кнопки, когда пароли совпадают
    useEffect(() => {
        setIsButtonActive(password && password === confirmPassword);
    }, [password, confirmPassword]);

    // Обработчик отправки запроса на восстановление пароля
    const handleSubmit = async () => {
        if (!isButtonActive) return;

        try {
            const response = await fetch(
                "http://localhost:3000/api/auth/reset-password",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        newPassword: password,
                        token,
                    }), // Отправляем и email, и токен
                }
            );

            const data = await response.json();

            if (response.ok) {
                setShowNotification(true);
                setTimeout(() => {
                    setShowNotification(false); // Скрываем уведомление через 3 секунды
                    navigate("/auth");
                }, 3000);
                setPassword("");
                setConfirmPassword("");
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
                    <h1 className="reset-password-title">ИЗМЕНЕНИЕ ПАРОЛЯ</h1>
                    <div
                        style={{ width: "100%", marginBottom: "14px" }}
                        className="input-wrapper"
                    >
                        <span className="icon login-icon">{/* Иконка */}</span>
                        <input
                            className="input"
                            type="email"
                            value={email} // Email получен из URL
                            disabled={true} // Поле заблокировано для изменения
                        />
                    </div>
                    <div
                        style={{ width: "100%", marginBottom: "14px" }}
                        className="input-wrapper"
                    >
                        <span className="icon login-icon">{/* Иконка */}</span>
                        <input
                            className="input"
                            type="password"
                            placeholder="Новый пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div
                        style={{ width: "100%", marginBottom: "14px" }}
                        className="input-wrapper"
                    >
                        <span className="icon login-icon">{/* Иконка */}</span>
                        <input
                            className="input"
                            type="password"
                            placeholder="Повторите пароль"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className={`register-button ${
                            isButtonActive ? "active" : ""
                        }`}
                        disabled={!isButtonActive} // Делаем кнопку неактивной, если пароли не совпадают
                        onClick={handleSubmit}
                    >
                        СОХРАНИТЬ
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
            {/* Всплывающее уведомление */}

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
                        Пароль успешно изменен.
                        <br />
                        Перенаправление на страницу авторизации.
                    </p>
                </div>
            )}
        </>
    );
};

export default NewPassword;
