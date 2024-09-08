import React, { useRef, useState, useEffect } from "react";
import "./MainPage.css";

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
                                    zIndex: currentSubBlock === index ? 1 : 0,
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
                                                    Международная биржа фриланса
                                                    Dwork — это удобный,
                                                    стабильный и безопасный
                                                    инструмент работы для
                                                    заказчиков и исполнителей со
                                                    всего мира.
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
                                                        letterSpacing: "-0.5px",
                                                    }}
                                                >
                                                    Новое сочетание
                                                </h2>
                                                <p
                                                    style={{
                                                        margin: "0px",
                                                        position: "relative",
                                                        top: "-11.5px",
                                                        left: "-1px",
                                                        letterSpacing: "-1.2px",
                                                        lineHeight: "26px",
                                                    }}
                                                >
                                                    Мы собрали все плюсы и
                                                    минусы с других
                                                    <br />
                                                    фриланс-бирж, чтобы создать
                                                    идеальное место
                                                    <br />
                                                    для работы и заработка.
                                                    Владельцы бизнеса без
                                                    <br />
                                                    труда могут найти
                                                    проверенного и
                                                    <br />
                                                    ответственного фрилансера из
                                                    нужной сферы деятельности.
                                                </p>
                                                <h2
                                                    style={{
                                                        fontSize: "37px",
                                                        marginLeft: "0px",
                                                        marginRight: "0px",
                                                        letterSpacing: "-0.5px",
                                                        marginBottom: "0px",
                                                        position: "relative",
                                                        marginTop: "19px",
                                                    }}
                                                >
                                                    Качество
                                                </h2>
                                                <p
                                                    style={{
                                                        margin: "0px",
                                                        top: "-11.5px",
                                                        position: "relative",
                                                        letterSpacing: "-1.2px",
                                                        lineHeight: "24px",
                                                        left: "-1px",
                                                    }}
                                                >
                                                    Удаленные сотрудники, в свою
                                                    очередь,
                                                    <br />
                                                    получают надежных клиентов и
                                                    возможность
                                                    <br />
                                                    хорошо заработать. Наша
                                                    биржа обладает
                                                    <br />
                                                    широким функционалом,
                                                    который облегчает
                                                    <br />
                                                    процесс работы и
                                                    обеспечивает безопасность
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
                                                        letterSpacing: "-1.2px",
                                                        marginTop: "7px",
                                                    }}
                                                >
                                                    Наша прозрачность
                                                </h2>
                                                <p
                                                    style={{
                                                        margin: "0px",
                                                        top: "-13px",
                                                        position: "relative",
                                                        letterSpacing: "-1.2px",
                                                    }}
                                                >
                                                    Мы стремимся к максимальной
                                                    прозрачности и честности во
                                                    всех наших сделках.
                                                </p>
                                                <h2
                                                    style={{
                                                        fontSize: "37px",
                                                        margin: "0px",
                                                        letterSpacing: "-1.3px",
                                                        marginTop: "13px",
                                                    }}
                                                >
                                                    Широкий выбор
                                                </h2>
                                                <p
                                                    style={{
                                                        margin: "0px",
                                                        top: "-10px",
                                                        position: "relative",
                                                        letterSpacing: "-1.2px",
                                                    }}
                                                >
                                                    Исполнителям мы предлагаем
                                                    широкий выбор заказов и
                                                    гарантируем своевременную
                                                    оплату
                                                    <br />
                                                    за выполненную работу.
                                                </p>
                                                <h2
                                                    style={{
                                                        margin: "0px",
                                                        fontSize: "37px",
                                                        letterSpacing: "-1.2px",
                                                        marginTop: "13px",
                                                    }}
                                                >
                                                    Отклики
                                                </h2>
                                                <p
                                                    style={{
                                                        margin: "0px",
                                                        top: "-12px",
                                                        position: "relative",
                                                        letterSpacing: "-1.2px",
                                                    }}
                                                >
                                                    На нашей платформе нет платы
                                                    за отклики или необходимости
                                                    приобретать премиум-аккаунты
                                                    <br />
                                                    для увеличения заработка.
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
                        Работайте в любом
                        <br />
                        уголке планеты, не
                        <br />
                        отвлекаясь от биржы
                    </h2>
                    <p>
                        Полное удобство с возможностями для заработка
                        <br />в любое время и в любом месте.
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
        </div>
    );
};

export default MainPage;
