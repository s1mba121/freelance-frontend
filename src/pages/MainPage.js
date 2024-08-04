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
                        <a>Как это работает</a>
                        <h2>
                            Мы зададим все важные вопросы, чтобы вам было проще
                            описать задачу.
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
            </div>
        </div>
    );
};

export default MainPage;
