// src\pages\MainPage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userService from "../services/userService";
import "./MainPage.css";

const MainPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await userService.getAllUsers();
                setUsers(response.data);
            } catch (error) {
                console.error("Failed to fetch users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="main-page-container">
            <div className="main-page-first-section">
                <h1 className="main-page-title">
                    Объединяем клиентов
                    <br />и фрилансеров в сфере digital
                </h1>
                <h2 className="main-page-subtitle">
                    К нам присоединилось более 8500 фрилансеров
                </h2>
                <Link to="/login" className="main-page-button-try">
                    Попробовать
                </Link>
            </div>
            <div className="main-page-second-section-info">
                <h1 className="main-page-second-section-title">
                    Отдайте задачи фрилансерам
                    <br />
                    и освободите время для важного
                </h1>
                <h2 className="main-page-second-section-subtitle">
                    Имея более чем десятилетний опыт работы на фрилансе, мы с
                    удовольствием
                    <br />
                    поддерживаем общество людей, связанных с миром фриланса.
                    Например,
                    <br />
                    помогаем новичкам без опыта находить проекты для портфолио,
                    связываем
                    <br />
                    клиентов с выпускниками обучающих интернет-платформ. Нас
                    вдохновляет
                    <br />
                    то, что и как делают наши пользователи, о чем беседуют и как
                    решают
                    <br />
                    профессиональные проблемы.
                </h2>

                <div className="main-page-second-section-rectangle">
                    <div className="main-page-text">
                        <a style={{ fontSize: "18px" }}>Как это работает</a>
                        <h2
                            style={{
                                fontSize: "36px",
                                fontWeight: "400",
                                marginTop: "10px",
                            }}
                        >
                            Мы зададим все важные вопросы, чтобы вам
                            <br />
                            было проще описать задачу.
                        </h2>
                    </div>

                    <p>Дизайн, разработка веб-сайта, создание видео.</p>
                    <p>
                        Правильно составьте вопросы, что вам нужно и задавайте
                    </p>
                    <p>
                        условия — чем подробнее задание, тем качественнее
                        результат.
                    </p>
                </div>

                <div className="main-page-second-section-rectangle-info">
                    <div
                        style={{
                            marginRight: "20px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundImage:
                                "url('/39559ead86aeb6db8b4544e236c11b29.jpeg')",
                        }}
                        className="main-page-second-section-rectangle-info-item"
                    >
                        <h1>Оставляете свой заказ ✍</h1>
                        <h2>
                            Добрый день! Когда вам
                            <br />
                            будет удобно встретиться?
                        </h2>
                    </div>
                    <div
                        style={{
                            marginRight: "20px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundImage: "url('/SliderElement_2.png')",
                        }}
                        className="main-page-second-section-rectangle-info-item"
                    >
                        <h1>Спецалисты напишут Вам сами</h1>
                        <h2>
                            Показываем заказ
                            <br />
                            подходящим специалистам.
                            <br />
                            Они напишут, если готовы
                            <br />
                            помочь.
                        </h2>
                    </div>
                    <div
                        style={{
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundImage: "url('/SliderElement_3.png')",
                        }}
                        className="main-page-second-section-rectangle-info-item"
                    >
                        <h1>Сервис берёт на всe обязанности</h1>
                        <h2>
                            Берём на себя все
                            <br />
                            обязанности по введению
                            <br />
                            сделки, чтобы не отвлекаться
                            <br />
                            на бюрократию
                        </h2>
                    </div>
                </div>
            </div>
            <div className="main-page-third-section-info-help">
                <div className="main-page-third-section-info-help-items">
                    <h1>С чем мы можем помочь</h1>
                    <h2>В вашем регионе работает 338 243 специалиста</h2>
                    <div className="main-page-third-section-info-help-rectangles">
                        <div
                            style={{ marginRight: "30px" }}
                            className="main-page-third-section-info-help-rectangle"
                        >
                            <div
                                style={{
                                    backgroundImage:
                                        "url('/Rectangle 40009.png')",
                                }}
                                className="main-page-third-section-info-help-rectangle-item"
                            ></div>
                        </div>
                        <div
                            style={{
                                marginRight: "30px",
                            }}
                            className="main-page-third-section-info-help-rectangle"
                        >
                            <div
                                style={{
                                    backgroundImage:
                                        "url('/Frame2087325465.png')",
                                }}
                                className="main-page-third-section-info-help-rectangle-item"
                            ></div>
                        </div>
                        <div className="main-page-third-section-info-help-rectangle">
                            <div
                                style={{
                                    backgroundImage:
                                        "url('/Frame2087325466.png') ",
                                }}
                                className="main-page-third-section-info-help-rectangle-item"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer-block-buttons">
                    <div className="footer-block-buttons-items">
                        <div className="footer-item">
                            <h1>Центр помощи</h1>
                            <Link>Общие вопросы</Link>
                            <Link>Споры и проблемы</Link>
                            <Link>Популярные статьи</Link>
                            <Link>База знаний</Link>
                        </div>
                        <div className="footer-item">
                            <h1>Новости</h1>
                            <Link>Блог</Link>
                            <Link>Telegram</Link>
                            <Link>YouTube</Link>
                            <Link>VK</Link>
                        </div>
                        <div className="footer-item">
                            <h1>Поддержка</h1>
                            <Link>Чат с поддержкой</Link>
                            <Link>Отправить запрос</Link>
                            <Link>Центральный </Link>
                        </div>
                        <div className="footer-item">
                            <h1>О компании</h1>
                            <Link>Условия использования ИС</Link>
                            <Link>Условия соглашения ЗК</Link>
                            <Link>FAQ</Link>
                        </div>
                        <div
                            style={{ marginRight: "0" }}
                            className="footer-item"
                        >
                            <h1>Команда</h1>
                            <Link>Вакансии</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-block-copyright">
                    <div className="footer-block-copyright-item">
                        <p>© 2024  Проект компании Dwork 16+</p>
                        <div className="footer-block-copyright-item-a">
                            <Link>Пользовательское соглашение</Link>
                            <p>|</p>
                            <Link>Политика компании</Link>
                        </div>
                    </div>
                    <p>
                        «Dwork» осуществляет деятельность в области
                        информационных технологий. Вид деятельности (код): 2.01.
                        <br />
                        На информационном ресурсе применяются рекомендательные
                        технологии
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default MainPage;
