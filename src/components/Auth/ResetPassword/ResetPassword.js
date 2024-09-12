import React from "react";
import "../Auth.css";
import Footer from "../../Footer/Footer";
import "./ResetPassword.css";

const ResetPassword = () => {
    return (
        <div className="auth-container">
            <div className="reset-password-container">
                <h1 className="reset-password-title">ВОССТАНОВЛЕНИЕ ПАРОЛЯ</h1>
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
                            <a className="footer-block-button">Центр помощи</a>
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
                            <h1 className="footer-block-title">Поддержка</h1>
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
                    Информация, опубликованная на данном сайте, предназначена
                    для любой аудитории,
                    <br />
                    если иное не указано дополнительно в отношении отдельных
                    материалов.
                </p>
                <div className="footer-krugs"></div>
                <div className="footer-krugs-2"></div>
            </div>
        </div>
    );
};

export default ResetPassword;
