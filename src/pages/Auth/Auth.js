import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import Footer from "../../components/Footer/Footer";
import StepOne from "../../components/Auth/Steps/StepOne";
import StepTwo from "../../components/Auth/Steps/StepTwo";

const Auth = () => {
    const [step, setStep] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [role, setRole] = useState(""); // Сохраняем выбранную роль
    const [isFormVisible, setIsFormVisible] = useState(true); // Управляет видимостью формы
    const navigate = useNavigate();

    const handleNextStep = (selectedRole) => {
        setRole(selectedRole); // Сохраняем выбранную роль
        setIsTransitioning(true);
        setTimeout(() => {
            setStep(step + 1);
            setIsTransitioning(false);
        }, 500);
    };

    const handlePrevStep = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setStep(step - 1);
            setIsTransitioning(false);
        }, 500);
    };

    const handleForgotPasswordClick = () => {
        setIsFormVisible(false); // Начать скрытие формы
        setTimeout(() => {
            navigate("/reset-password"); // Перенаправление после скрытия формы
        }, 500); // Задержка должна совпадать с длительностью анимации
    };

    return (
        <div className="auth-container">
            <div
                className={`step-indicator ${!isFormVisible ? "fade-out" : ""}`}
            >
                <div className={`step-item ${step === 1 ? "active" : ""}`}>
                    <div className="step-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                        >
                            <path
                                d="M16.665 7.36971L17.0898 6.94489C17.7937 6.24103 18.9349 6.24103 19.6388 6.94489C20.3426 7.64875 20.3426 8.78994 19.6388 9.49381L19.2139 9.91863M16.665 7.36971C16.665 7.36971 16.7181 8.27245 17.5147 9.06899C18.3112 9.86553 19.2139 9.91863 19.2139 9.91863M16.665 7.36971L12.7595 11.2753C12.4949 11.5398 12.3627 11.6721 12.2489 11.8179C12.1147 11.99 11.9997 12.1761 11.9058 12.373C11.8263 12.54 11.7671 12.7175 11.6488 13.0724L11.27 14.2087L11.1475 14.5763M19.2139 9.91863L15.3084 13.8242C15.0438 14.0887 14.9116 14.221 14.7657 14.3347C14.5937 14.4689 14.4076 14.584 14.2106 14.6778C14.0437 14.7574 13.8662 14.8166 13.5113 14.9349L12.375 15.3136L12.0074 15.4362M12.0074 15.4362L11.6398 15.5587C11.4651 15.6169 11.2726 15.5715 11.1424 15.4413C11.0122 15.3111 10.9667 15.1186 11.025 14.9439L11.1475 14.5763M12.0074 15.4362L11.1475 14.5763"
                                stroke="white"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M7.3335 11.917H9.62516"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M7.3335 8.25H13.2918"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M7.3335 15.583H8.7085"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M2.75 12.833V9.16634C2.75 5.70937 2.75 3.98089 3.82394 2.90695C4.89788 1.83301 6.62637 1.83301 10.0833 1.83301H11.9167C15.3736 1.83301 17.1021 1.83301 18.1761 2.90695M19.25 12.833C19.25 16.29 19.25 18.0185 18.1761 19.0924M3.82394 19.0924C4.89788 20.1663 6.62637 20.1663 10.0833 20.1663H11.9167C15.3736 20.1663 17.1021 20.1663 18.1761 19.0924M18.1761 19.0924C19.0406 18.2279 19.2092 16.9393 19.242 14.6663"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <h1>Шаг 1</h1>
                </div>
                <div className={`step-item ${step === 2 ? "active" : ""}`}>
                    <div className="step-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                        >
                            <circle
                                cx="12.4999"
                                cy="6"
                                r="4"
                                stroke="white"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M15.4999 20.6151C14.5906 20.8619 13.5735 21 12.4999 21C8.63388 21 5.49988 19.2091 5.49988 17C5.49988 14.7909 8.63388 13 12.4999 13C16.3659 13 19.4999 14.7909 19.4999 17C19.4999 17.3453 19.4233 17.6804 19.2793 18"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <h1>Шаг 2</h1>
                </div>
            </div>

            <div className={`auth-box ${!isFormVisible ? "fade-out" : ""}`}>
                <div
                    style={{
                        opacity:
                            step === 1 && isFormVisible && !isTransitioning
                                ? 1
                                : 0,
                        transition: "opacity 0.5s ease-in-out",
                        position: step === 1 ? "relative" : "absolute",
                    }}
                >
                    {step === 1 && (
                        <StepOne
                            handleNextStep={handleNextStep}
                            handleForgotPasswordClick={
                                handleForgotPasswordClick
                            }
                        />
                    )}
                </div>
                <div
                    style={{
                        opacity:
                            step === 2 && isFormVisible && !isTransitioning
                                ? 1
                                : 0,
                        transition: "opacity 0.5s ease-in-out",
                        position: step === 2 ? "relative" : "absolute",
                    }}
                >
                    {step === 2 && (
                        <StepTwo
                            role={role}
                            handlePrevStep={handlePrevStep}
                            handleForgotPasswordClick={
                                handleForgotPasswordClick
                            }
                        />
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Auth;
