import React, { useRef, useState, useEffect } from "react";
import "./MainPage.css";
// import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import { Link } from "react-router-dom";

const MainPage = () => {
    const [currentSubBlock, setCurrentSubBlock] = useState(0);
    const [subBlockOpacity, setSubBlockOpacity] = useState(1);
    const mainBlockRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            const mainBlockOffsetTop = mainBlockRef.current.offsetTop;

            const delayBeforeAnimation = viewportHeight * 0.1;
            const relativeScroll =
                scrollPosition - mainBlockOffsetTop - delayBeforeAnimation;

            const blockHeight = viewportHeight * 0.75;
            const extraScroll = blockHeight * 0.25;

            document
                .getElementById("smile-img")
                .addEventListener("click", function () {
                    const img = this;
                    img.src = "./14015813aff411b06ac3a6b2822c2fef.gif"; // Замена на гифку
                    setTimeout(() => {
                        img.src = "./face-blowing-a-kiss.png"; // Возврат статичного изображения
                    }, 2990); // Укажите длительность проигрывания гифки (например, 3 секунды)
                });

            if (relativeScroll >= 0) {
                const subBlockIndex = Math.floor(
                    relativeScroll / (blockHeight + extraScroll)
                );
                setCurrentSubBlock(subBlockIndex);

                if (subBlockIndex < 3) {
                    // Изменено с 6 на 5
                    const subBlockRelativeScroll =
                        relativeScroll -
                        subBlockIndex * (blockHeight + extraScroll);

                    let opacity = 1;
                    if (subBlockRelativeScroll > extraScroll) {
                        opacity =
                            1 -
                            Math.min(
                                Math.max(
                                    (subBlockRelativeScroll - extraScroll) /
                                        blockHeight,
                                    0
                                ),
                                1
                            );
                    }

                    setSubBlockOpacity(opacity);
                } else {
                    setSubBlockOpacity(1);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="main-page-container">
                <div className="main-page-first-section">
                    <video className="background-video" autoPlay loop muted>
                        <source src="MainBackground.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            backgroundColor: "black",
                            width: "100%",
                            height: "100%",
                            opacity: 0.13,
                        }}
                        className="background-black"
                    ></div>
                    <div className="main-page-title-container">
                        <h1 className="main-page-title">
                            Объединяем клиентов
                            <br />и фрилансеров в сфере digital
                        </h1>
                        <h2 className="main-page-subtitle">
                            Мы на пути открытия новой и успешной биржи
                        </h2>
                    </div>
                </div>

                <div className="main-block" ref={mainBlockRef}>
                    <div className="sticky-block">
                        {[...Array(3)].map(
                            (
                                _,
                                index // Изменено с 6 на 5
                            ) => (
                                <div
                                    key={index}
                                    className={`sub-block`}
                                    style={{
                                        opacity:
                                            currentSubBlock === index
                                                ? subBlockOpacity
                                                : 0,
                                        zIndex:
                                            currentSubBlock === index ? 1 : 0,
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        transition: "opacity 0.3s ease-out",
                                    }}
                                >
                                    {index === 0 ? (
                                        <>
                                            <div className="block-container">
                                                <div className="block-text">
                                                    <h2>Почему именно мы</h2>
                                                    <p>
                                                        Международная биржа
                                                        фриланса Dwork — это
                                                        удобный, стабильный и
                                                        безопасный инструмент
                                                        работы для заказчиков и
                                                        исполнителей со всего
                                                        мира.
                                                    </p>
                                                </div>
                                                <img
                                                    src="oc-on-the-laptop.png"
                                                    alt="Иллюстрация 1"
                                                    className="block-illustration"
                                                />
                                            </div>
                                        </>
                                    ) : index === 1 ? (
                                        <>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    left: "51px",
                                                }}
                                                className="block-container"
                                            >
                                                <div
                                                    style={{
                                                        left: "-30px",
                                                        maxWidth: "460px",
                                                    }}
                                                    className="block-text"
                                                >
                                                    <h2
                                                        style={{
                                                            fontSize: "37px",
                                                            margin: "0px",
                                                            letterSpacing:
                                                                "-0.5px",
                                                        }}
                                                    >
                                                        Новое сочетание
                                                    </h2>
                                                    <p
                                                        style={{
                                                            margin: "0px",
                                                            position:
                                                                "relative",
                                                            top: "-11.5px",
                                                            left: "-1px",
                                                            letterSpacing:
                                                                "-1.2px",
                                                            lineHeight: "26px",
                                                        }}
                                                    >
                                                        Мы собрали все плюсы и
                                                        минусы с других
                                                        <br />
                                                        фриланс-бирж, чтобы
                                                        создать идеальное место
                                                        <br />
                                                        для работы и заработка.
                                                        Владельцы бизнеса без
                                                        <br />
                                                        труда могут найти
                                                        проверенного и
                                                        <br />
                                                        ответственного
                                                        фрилансера из нужной
                                                        сферы деятельности.
                                                    </p>
                                                    <h2
                                                        style={{
                                                            fontSize: "37px",
                                                            marginLeft: "0px",
                                                            marginRight: "0px",
                                                            letterSpacing:
                                                                "-0.5px",
                                                            marginBottom: "0px",
                                                            position:
                                                                "relative",
                                                            marginTop: "19px",
                                                        }}
                                                    >
                                                        Качество
                                                    </h2>
                                                    <p
                                                        style={{
                                                            margin: "0px",
                                                            top: "-11.5px",
                                                            position:
                                                                "relative",
                                                            letterSpacing:
                                                                "-1.2px",
                                                            lineHeight: "24px",
                                                            left: "-1px",
                                                        }}
                                                    >
                                                        Удаленные сотрудники, в
                                                        свою очередь,
                                                        <br />
                                                        получают надежных
                                                        клиентов и возможность
                                                        <br />
                                                        хорошо заработать. Наша
                                                        биржа обладает
                                                        <br />
                                                        широким функционалом,
                                                        который облегчает
                                                        <br />
                                                        процесс работы и
                                                        обеспечивает
                                                        безопасность
                                                        <br />
                                                        сделок.
                                                    </p>
                                                </div>
                                            </div>
                                            <img
                                                src="illustration2.png"
                                                alt="Иллюстрация 2"
                                                className="block-illustration"
                                                style={{
                                                    width: "579.1px",
                                                    height: "426.9px",
                                                    position: "relative",
                                                    left: "-21px",
                                                    top: "-14px",
                                                }}
                                            />
                                        </>
                                    ) : index === 2 ? (
                                        <>
                                            <div
                                                className="block-container"
                                                style={{
                                                    position: "relative",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        marginTop: "25px",
                                                        left: "6px",
                                                    }}
                                                    className="block-text"
                                                >
                                                    <h2
                                                        style={{
                                                            fontSize: "37px",
                                                            margin: "0px",
                                                            letterSpacing:
                                                                "-1.2px",
                                                            marginTop: "7px",
                                                        }}
                                                    >
                                                        Наша прозрачность
                                                    </h2>
                                                    <p
                                                        style={{
                                                            margin: "0px",
                                                            top: "-13px",
                                                            position:
                                                                "relative",
                                                            letterSpacing:
                                                                "-1.2px",
                                                        }}
                                                    >
                                                        Мы стремимся к
                                                        максимальной
                                                        прозрачности и честности
                                                        во всех наших сделках.
                                                    </p>
                                                    <h2
                                                        style={{
                                                            fontSize: "37px",
                                                            margin: "0px",
                                                            letterSpacing:
                                                                "-1.3px",
                                                            marginTop: "13px",
                                                        }}
                                                    >
                                                        Широкий выбор
                                                    </h2>
                                                    <p
                                                        style={{
                                                            margin: "0px",
                                                            top: "-10px",
                                                            position:
                                                                "relative",
                                                            letterSpacing:
                                                                "-1.2px",
                                                        }}
                                                    >
                                                        Исполнителям мы
                                                        предлагаем широкий выбор
                                                        заказов и гарантируем
                                                        своевременную оплату
                                                        <br />
                                                        за выполненную работу.
                                                    </p>
                                                    <h2
                                                        style={{
                                                            margin: "0px",
                                                            fontSize: "37px",
                                                            letterSpacing:
                                                                "-1.2px",
                                                            marginTop: "13px",
                                                        }}
                                                    >
                                                        Отклики
                                                    </h2>
                                                    <p
                                                        style={{
                                                            margin: "0px",
                                                            top: "-12px",
                                                            position:
                                                                "relative",
                                                            letterSpacing:
                                                                "-1.2px",
                                                        }}
                                                    >
                                                        На нашей платформе нет
                                                        платы за отклики или
                                                        необходимости
                                                        приобретать
                                                        премиум-аккаунты
                                                        <br />
                                                        для увеличения
                                                        заработка.
                                                    </p>
                                                </div>
                                            </div>
                                            <img
                                                src="illustration3.png"
                                                alt="Иллюстрация 3"
                                                className="block-illustration"
                                                style={{
                                                    width: "554.65px",
                                                    height: "436.29px",
                                                    position: "relative",
                                                    left: "-4px",
                                                    top: "-11px",
                                                }}
                                            />
                                        </>
                                    ) : null}
                                </div>
                            )
                        )}
                    </div>
                </div>

                <div className="content-block-2">
                    <div className="content-block-2-text">
                        <h2>
                            Лаконичный дизайн,
                            <br />
                            не отвлекающий
                            <br />
                            от работы
                        </h2>
                        <p>
                            Ничего лишнего на бирже — только вы
                            <br />
                            и ваша фантазия
                        </p>
                    </div>
                </div>
                <div className="line">
                    <h2>То, что вам по душе</h2>
                    <p>
                        Занимайтесь тем, что вам нравится — и от экрана уже
                        не оторваться
                    </p>
                </div>
                <div className="content-block-3">
                    {/* <div className="content-block-3-black"></div> */}
                    <div className="content-block-3-text">
                        <h2>
                            Работайте в любом
                            <br />
                            уголке планеты, не
                            <br />
                            выходя из дома
                        </h2>
                        <p>
                            Полное удобство с возможностями для заработка
                            <br />в любое время и в любом месте.
                        </p>
                    </div>
                </div>
                <div className="content-block-4">
                    <h1 className="content-block-4-title">
                        Ваши персональные
                        <br />
                        рекомендации
                    </h1>
                    <h2 className="content-block-4-subtitle">
                        Можно ничего не искать — биржа сама подскажет,
                        <br />
                        что посмотреть, на основе ваших предпочтений
                    </h2>
                    <div className="content-block-4-blocks">
                        <div className="content-block-4-blur"></div>
                        <Carousel />
                        <h1 className="content-block-4-blocks-subtitle">
                            — Биржа, где дизайнеры являются основной частью
                        </h1>
                    </div>
                </div>
                {/* <div className="content-block-5">
                    <h1 className="content-block-5-title">
                        Ищите позитивные стороны в нас,
                        <br />и мы найдем их в вас
                    </h1>
                    <p className="content-block-5-subtitle">
                        Множество функционалов, полная свобода,
                        <br />
                        любимые занятия и курсы
                    </p>
                    <div className="content-block-5-blocks">
                        <div class="block large">Игровой маркет</div>
                        <div class="block small">Обширный профиль</div>
                        <div class="block small">Никаких привилегий</div>
                        <div class="block large-wide">
                            Полное распоряжение своим временем
                        </div>
                        <div class="block medium">Наработка портфолио</div>
                        <div class="block small">Приложение</div>
                        <div class="block small">Бесплатные курсы</div>
                    </div>
                </div> */}
                <div className="content-block-6">
                    <h1 className="content-block-6-title">
                        Мы изменили все старые
                        <br />
                        правила бирж, и добавили новые
                    </h1>
                    <p className="content-block-6-subtitle">
                        Каждый, кто уже имел опыт работы с другими биржами,
                        сможет
                        <br />
                        быстро приспособиться к новым правилам биржы Dwork
                    </p>
                    <div className="content-block-6-blocks">
                        <div
                            style={{
                                background: "url(./Group2087325363.png",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                            className="content-block-6-block"
                        >
                            <div className="content-block-6-block-text">
                                <h1>
                                    Каждому -<br />
                                    индивидуальный аккаунт
                                </h1>
                                <p>
                                    Создайте профиль как исполнитель, чтобы
                                    работать над задачами,
                                    <br />и как заказчик, чтобы размещать заказы
                                    на выполнение задач.
                                    <br />
                                    Это удобно и не требует постоянной
                                    авторизации.
                                </p>
                            </div>
                        </div>
                        <div
                            style={{
                                background: "url(./Group2087325362.png",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                            className="content-block-6-block"
                        >
                            <div className="content-block-6-block-text">
                                <h1>
                                    Удобно отслеживать
                                    <br />
                                    за своими средствами
                                </h1>
                                <p>
                                    Для того чтобы следить за своими средствами
                                    на бирже, вы легко
                                    <br />и быстро сможете проверить в<br />
                                    своём профиле. Кроме того, в любое время вы
                                    сможете запросить чек для налоговой.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-block-7">
                    <h1 className="content-block-7-title">
                        Есть вопросы по функционалу
                        <br />и работы на бирже?
                    </h1>
                    <p className="content-block-7-subtitle">
                        Вы всегда можете посмотреть всю информацию о правилах и
                        <br />
                        требованиях для исполнителей и заказчиков в нашей базе
                        знаний
                    </p>
                    <div className="content-block-7-block"></div>
                    <Link to="/wiki" className="content-block-7-button">
                        База знаний
                    </Link>
                </div>
                <div className="content-block-8">
                    <h1 className="content-block-8-title">
                        Пока мы подготавливаем биржу к запуску,
                        <br />
                        вы можете авторизоваться
                    </h1>
                    <p className="content-block-8-subtitle">
                        И получать эксклюзивные бонусы, доступные только новым
                        <br />
                        пользователям. Не забывайте следить за нашими
                        социальными
                        <br />
                        сетями.
                    </p>
                    <div className="content-block-8-block">
                        <div className="content-block-8-smile">
                            <img
                                // src="./14015813aff411b06ac3a6b2822c2fef.gif"
                                src="./face-blowing-a-kiss.png"
                                alt="smile"
                                className="content-block-8-smile-img"
                                id="smile-img"
                            />
                            <div className="content-block-8-undersmile"></div>
                            <p>А пока вы можете нам послать смайлик</p>
                        </div>
                        <footer className="footer">
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
                                        Dwork осуществляет деятельность в
                                        области
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
                                        <h1 className="footer-block-title">
                                            Новости
                                        </h1>
                                        <a className="footer-block-button">
                                            Блог
                                        </a>
                                        <a className="footer-block-button">
                                            Telegram
                                        </a>
                                        <a className="footer-block-button">
                                            YouTube
                                        </a>
                                    </div>
                                    <div className="footer-block">
                                        <h1 className="footer-block-title">
                                            помощь
                                        </h1>
                                        <a className="footer-block-button">
                                            Правила
                                        </a>
                                        <a className="footer-block-button">
                                            Центр помощи
                                        </a>
                                        <a className="footer-block-button">
                                            Вики
                                        </a>
                                    </div>
                                    <div className="footer-block">
                                        <h1 className="footer-block-title">
                                            Вакансии
                                        </h1>
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
                                если иное не указано дополнительно в отношении
                                отдельных материалов.
                            </p>
                            <div className="footer-krugs"></div>
                            <div className="footer-krugs-2"></div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;
