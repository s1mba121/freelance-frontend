import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userService from "../services/userService";
import "./MainPage.css";
import StarBackground from "../components/StarBackground/StarBackground";
import ThreeDeeMale from "../assets/ThreeDeeMale.png";
import ThreeDeeMale2 from "../assets/ThreeDeeMale2.png";

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
            <StarBackground />
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
            <div className="main-page-secondaly-section">
                <h2 className="main-page-secondaly-title">
                    ПОЧЕМУ СТОИТ ДОВЕРЯТЬ ИМЕННО НАМ?
                </h2>
                <p className="main-page-secondaly-subtitle">
                    Международная биржа фриланса Dwork — это удобный,
                </p>
                <p className="main-page-secondaly-subtitle">
                    стабильный и безопасный инструмент работы для заказчиков и
                </p>
                <p className="main-page-secondaly-subtitle">
                    исполнителей со всего мира. Мы собрали все плюсы и минусы
                </p>
                <p className="main-page-secondaly-subtitle">
                    с других фриланс-бирж, чтобы создать идеальное место для
                </p>
                <p className="main-page-secondaly-subtitle">
                    работы и заработка. Владельцы бизнеса без труда могут найти
                </p>
                <p className="main-page-secondaly-subtitle">
                    проверенного и ответственного фрилансера из нужной сферы
                </p>
                <p className="main-page-secondaly-subtitle">деятельности.</p>

                <br></br>
                <p className="main-page-secondaly-subtitle">
                    Удаленные сотрудники, в свою очередь, получают надежных
                </p>
                <p className="main-page-secondaly-subtitle">
                    клиентов и возможность хорошо заработать. Наша биржа
                </p>
                <p className="main-page-secondaly-subtitle">
                    обладает широким функционалом, который облегчает процесс
                </p>
                <p className="main-page-secondaly-subtitle">
                    работы и обеспечивает безопасность сделок. На Dwork вы
                </p>
                <p className="main-page-secondaly-subtitle">
                    найдете все необходимое для успешного ведения бизнеса или
                </p>
                <p className="main-page-secondaly-subtitle">
                    поиска работы в качестве фрилансера.
                </p>
                <img src={ThreeDeeMale} />
            </div>

            <div className="main-page-secondaly-section">
                <h2 className="main-page-secondaly-title">
                    МЫ НА ОДНОЙ ВОЛНЕ СО ВСЕМИ ЛЮДЬМИ
                </h2>
                <p className="main-page-secondaly-subtitle">
                    Мы стремимся к максимальной прозрачности и честности во
                </p>
                <p className="main-page-secondaly-subtitle">
                    всех наших сделках. Наша биржа предоставляет возможность
                </p>
                <p className="main-page-secondaly-subtitle">
                    заказчикам быстро найти квалифицированных исполнителей
                </p>
                <p className="main-page-secondaly-subtitle">
                    для выполнения задач любой сложности. А исполнителям мы
                </p>
                <p className="main-page-secondaly-subtitle">
                    предлагаем широкий выбор заказов и гарантируем
                </p>
                <p className="main-page-secondaly-subtitle">
                    своевременную оплату за выполненную работу. Мы
                </p>
                <p className="main-page-secondaly-subtitle">
                    предлагаем только высококачественные услуги и открыты для
                </p>
                <p className="main-page-secondaly-subtitle">
                    всех, кто хочет найти надежного партнера для сотрудничества.
                </p>
                <br></br>
                <p className="main-page-secondaly-subtitle">
                    На нашей платформе нет платы за отклики или необходимости
                </p>
                <p className="main-page-secondaly-subtitle">
                    приобретать премиум-аккаунты для увеличения заработка. У
                </p>
                <p className="main-page-secondaly-subtitle">
                    нас нет скрытых платежей, поэтому вы всегда можете быть
                </p>
                <p className="main-page-secondaly-subtitle">
                    уверены, что платите за услуги по справедливой цене. Наша
                </p>
                <p className="main-page-secondaly-subtitle">
                    цель - обеспечить вам удобное использование нашей биржы.
                </p>
                <img src={ThreeDeeMale2} />
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
