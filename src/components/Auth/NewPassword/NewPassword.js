import React, { useState, useEffect } from "react";
import "../../../pages/Auth/Auth.css";
import Footer from "../../Footer/Footer";
import "./NewPassword.css";
import { useParams, useNavigate } from "react-router-dom";

const NewPassword = () => {
    const { email, token } = useParams();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [message, setMessage] = useState("");
    const [showNotification, setShowNotification] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const togglePassword1 = () => setShowPassword1(!showPassword1);
    const togglePassword2 = () => setShowPassword2(!showPassword2);

    const navigate = useNavigate();

    useEffect(() => {
        setIsButtonActive(password && password === confirmPassword);
    }, [password, confirmPassword]);

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
                    }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                setShowNotification(true);
                setTimeout(() => {
                    setShowNotification(false);
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
                        <span
                            style={{ marginTop: "5px" }}
                            className="icon login-icon"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                            >
                                <circle
                                    cx="10.9997"
                                    cy="5.49967"
                                    r="3.66667"
                                    stroke="#848484"
                                    stroke-width="1.5"
                                />
                                <path
                                    d="M13.7497 18.8975C12.9162 19.1237 11.9838 19.2503 10.9997 19.2503C7.45585 19.2503 4.58301 17.6087 4.58301 15.5837C4.58301 13.5586 7.45585 11.917 10.9997 11.917C14.5435 11.917 17.4163 13.5586 17.4163 15.5837C17.4163 15.9002 17.3462 16.2073 17.2142 16.5003"
                                    stroke="#848484"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </span>
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
                        <span className="icon password-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                            >
                                <path
                                    d="M19.3111 4.5835C19.8537 5.46171 20.1667 6.4957 20.1667 7.60248C20.1667 10.7886 17.5732 13.3715 14.374 13.3715C13.7903 13.3715 12.4611 13.2373 11.8145 12.7006L11.0062 13.5057C10.3326 14.1764 10.8715 14.1764 11.1409 14.7131C11.1409 14.7131 11.8144 15.6522 11.1409 16.5914C10.7367 17.128 9.60516 17.8793 8.31191 16.5914L8.04249 16.8597C8.04249 16.8597 8.85076 17.7988 8.1772 18.738C7.77306 19.2746 6.69536 19.8113 5.75237 18.8721C5.70747 18.9168 5.456 19.1673 4.80938 19.8113C4.16276 20.4552 3.37247 20.0796 3.05815 19.8113L2.24987 19.0063C1.49548 18.255 1.93554 17.4411 2.24987 17.128L9.25494 10.1516C9.25494 10.1516 8.58137 9.07826 8.58137 7.60248C8.58137 4.41636 11.1748 1.8335 14.374 1.8335C15.1246 1.8335 15.8418 1.97566 16.5 2.23442"
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
                        <input
                            className="input"
                            type={showPassword1 ? "text" : "password"}
                            name="password"
                            placeholder="Новый пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                            className="icon eye-icon"
                            onClick={togglePassword1}
                        >
                            {showPassword1 ? (
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
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10Z"
                                        stroke="#3F3F3F"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M2.01677 10.0003C2.01677 10.0003 4.6001 4.16699 10.0001 4.16699C12.692 4.16699 14.6413 5.39871 15.8068 6.70837L2.01677 10.0003ZM10.0001 15.8337C7.30823 15.8337 5.35889 14.602 4.19336 13.2923L17.9834 10.0003L10.0001 15.8337ZM13.3334 10.0003C13.3334 11.8408 11.8405 13.3337 10.0001 13.3337C8.15964 13.3337 6.66677 11.8408 6.66677 10.0003C6.66677 8.15986 8.15964 6.66699 10.0001 6.66699C11.8405 6.66699 13.3334 8.15986 13.3334 10.0003Z"
                                        stroke="#3F3F3F"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            )}
                        </span>
                    </div>

                    <div
                        style={{ width: "100%", marginBottom: "14px" }}
                        className="input-wrapper"
                    >
                        <span className="icon password-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                            >
                                <path
                                    d="M17.3957 4.60434L17.926 4.07401V4.07401L17.3957 4.60434ZM17.3957 13.5579L17.926 14.0882L17.3957 13.5579ZM6.55012 11.6127L6.01979 11.0823H6.01979L6.55012 11.6127ZM3.14737 15.0154L3.6777 15.5457L3.6777 15.5457L3.14737 15.0154ZM6.98459 18.8526L6.45426 18.3223L6.45426 18.3223L6.98459 18.8526ZM10.3876 15.4496L9.85727 14.9193L10.3876 15.4496ZM2.75831 16.1245L2.01289 16.2074H2.01289L2.75831 16.1245ZM2.97103 18.0391L2.22562 18.1219L2.22562 18.1219L2.97103 18.0391ZM3.96093 19.029L3.8781 19.7744H3.8781L3.96093 19.029ZM5.87547 19.2417L5.95829 18.4963H5.95829L5.87547 19.2417ZM3.23041 18.5787L3.76074 18.0484L3.76074 18.0484L3.23041 18.5787ZM3.42127 18.7696L2.89094 19.2999L2.89094 19.2999L3.42127 18.7696ZM6.78729 10.6619L6.06086 10.8484H6.06086L6.78729 10.6619ZM11.3381 15.2127L11.1516 15.9391H11.1516L11.3381 15.2127ZM7.04574 15.5966C6.75124 15.3053 6.27638 15.3079 5.9851 15.6024C5.69382 15.8969 5.69643 16.3718 5.99093 16.6631L7.04574 15.5966ZM18.2841 7.53969C18.3981 7.93791 18.8133 8.16835 19.2115 8.05439C19.6098 7.94042 19.8402 7.52521 19.7262 7.12698L18.2841 7.53969ZM19.6685 11.2267C19.7937 10.8318 19.5751 10.4103 19.1803 10.2851C18.7854 10.1599 18.3638 10.3785 18.2386 10.7733L19.6685 11.2267ZM12.0673 9.9327C11.6442 9.50963 11.6442 8.8237 12.0673 8.40063L11.0066 7.33997C9.99779 8.34883 9.99779 9.9845 11.0066 10.9934L12.0673 9.9327ZM13.5994 9.9327C13.1763 10.3558 12.4904 10.3558 12.0673 9.9327L11.0066 10.9934C12.0155 12.0022 13.6512 12.0022 14.66 10.9934L13.5994 9.9327ZM13.5994 8.40063C14.0224 8.8237 14.0224 9.50963 13.5994 9.9327L14.66 10.9934C15.6689 9.9845 15.6689 8.34883 14.66 7.33997L13.5994 8.40063ZM14.66 7.33997C13.6512 6.33112 12.0155 6.33112 11.0066 7.33997L12.0673 8.40063C12.4904 7.97757 13.1763 7.97757 13.5994 8.40063L14.66 7.33997ZM17.926 4.07401C15.1607 1.30866 10.6772 1.30866 7.91181 4.07401L8.97247 5.13467C11.152 2.95511 14.6858 2.95511 16.8653 5.13467L17.926 4.07401ZM6.01979 11.0823L2.61704 14.4851L3.6777 15.5457L7.08045 12.143L6.01979 11.0823ZM7.51492 19.383L8.65196 18.2459L7.5913 17.1853L6.45426 18.3223L7.51492 19.383ZM8.65196 18.2459L10.9179 15.98L9.85727 14.9193L7.5913 17.1853L8.65196 18.2459ZM2.01289 16.2074L2.22562 18.1219L3.71645 17.9562L3.50372 16.0417L2.01289 16.2074ZM3.8781 19.7744L5.79264 19.9871L5.95829 18.4963L4.04375 18.2836L3.8781 19.7744ZM2.70007 19.1091L2.89094 19.2999L3.9516 18.2393L3.76074 18.0484L2.70007 19.1091ZM4.04375 18.2836C4.00889 18.2797 3.97639 18.2641 3.9516 18.2393L2.89094 19.2999C3.15659 19.5656 3.50473 19.7329 3.8781 19.7744L4.04375 18.2836ZM2.22562 18.1219C2.26711 18.4953 2.43443 18.8434 2.70008 19.1091L3.76074 18.0484C3.73594 18.0236 3.72032 17.9911 3.71645 17.9562L2.22562 18.1219ZM6.45426 18.3223C6.32395 18.4526 6.14146 18.5166 5.95829 18.4963L5.79264 19.9871C6.4287 20.0578 7.0624 19.8355 7.51492 19.383L6.45426 18.3223ZM2.61704 14.4851C2.16451 14.9376 1.94222 15.5713 2.01289 16.2074L3.50372 16.0417C3.48337 15.8585 3.54738 15.6761 3.6777 15.5457L2.61704 14.4851ZM7.51372 10.4753C7.03848 8.62466 7.5259 6.58124 8.97247 5.13467L7.91181 4.07401C6.07499 5.91083 5.45917 8.50537 6.06086 10.8484L7.51372 10.4753ZM16.8653 13.0275C15.4188 14.4741 13.3753 14.9615 11.5247 14.4863L11.1516 15.9391C13.4946 16.5408 16.0892 15.925 17.926 14.0882L16.8653 13.0275ZM10.9179 15.98C10.9513 15.9466 11.0324 15.9085 11.1516 15.9391L11.5247 14.4863C10.9675 14.3432 10.3177 14.4589 9.85727 14.9193L10.9179 15.98ZM7.08045 12.143C7.54066 11.6828 7.6569 11.0329 7.51372 10.4753L6.06086 10.8484C6.09137 10.9672 6.05336 11.0488 6.01979 11.0823L7.08045 12.143ZM8.64903 17.1824L7.04574 15.5966L5.99093 16.6631L7.59422 18.2488L8.64903 17.1824ZM16.8653 5.13467C17.56 5.82938 18.0323 6.65972 18.2841 7.53969L19.7262 7.12698C19.4061 6.00842 18.8054 4.95337 17.926 4.07401L16.8653 5.13467ZM18.2386 10.7733C17.9775 11.5971 17.5203 12.3725 16.8653 13.0275L17.926 14.0882C18.7549 13.2593 19.3364 12.2741 19.6685 11.2267L18.2386 10.7733Z"
                                    fill="#848484"
                                />
                            </svg>
                        </span>
                        <input
                            className="input"
                            type={showPassword2 ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Повторите пароль"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <span
                            className="icon eye-icon"
                            onClick={togglePassword2}
                        >
                            {showPassword2 ? (
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
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10Z"
                                        stroke="#3F3F3F"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M2.01677 10.0003C2.01677 10.0003 4.6001 4.16699 10.0001 4.16699C12.692 4.16699 14.6413 5.39871 15.8068 6.70837L2.01677 10.0003ZM10.0001 15.8337C7.30823 15.8337 5.35889 14.602 4.19336 13.2923L17.9834 10.0003L10.0001 15.8337ZM13.3334 10.0003C13.3334 11.8408 11.8405 13.3337 10.0001 13.3337C8.15964 13.3337 6.66677 11.8408 6.66677 10.0003C6.66677 8.15986 8.15964 6.66699 10.0001 6.66699C11.8405 6.66699 13.3334 8.15986 13.3334 10.0003Z"
                                        stroke="#3F3F3F"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            )}
                        </span>
                    </div>

                    <button
                        className={`register-button ${
                            isButtonActive ? "active" : ""
                        }`}
                        disabled={!isButtonActive}
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
