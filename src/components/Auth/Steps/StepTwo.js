import React, { useState } from "react";
import "./StepTwo.css";
import RegisterForm from "../Forms/RegisterForm";
import LoginForm from "../Forms/LoginForm";

const StepTwo = ({ role, handlePrevStep, handleForgotPasswordClick }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const toggleForm = (formType) => {
        if (isLogin !== formType) {
            setIsTransitioning(true);
            setTimeout(() => {
                setIsLogin(formType);
                setIsTransitioning(false);
            }, 300);
        }
    };

    return (
        <>
            <div className="step-two-container">
                <div className="reg-log-buttons">
                    <button
                        onClick={() => toggleForm(false)}
                        className={`reg-log-button reg ${
                            !isLogin ? "active" : ""
                        }`}
                    >
                        РЕГИСТРАЦИЯ
                    </button>
                    <button
                        onClick={() => toggleForm(true)}
                        className={`reg-log-button log ${
                            isLogin ? "active" : ""
                        }`}
                    >
                        АВТОРИЗАЦИЯ
                    </button>
                </div>
                <div
                    style={{
                        opacity: isTransitioning ? 0 : 1,
                        transition: "opacity 0.3s ease-in-out",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {isLogin ? (
                        <LoginForm
                            handleForgotPasswordClick={
                                handleForgotPasswordClick
                            }
                        />
                    ) : (
                        <RegisterForm role={role} />
                    )}
                </div>
            </div>
        </>
    );
};

export default StepTwo;
