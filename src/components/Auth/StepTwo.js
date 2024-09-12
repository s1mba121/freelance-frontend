import React from "react";
import "./StepTwo.css";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const StepTwo = ({ handlePrevStep }) => {
    const [isLogin, setIsLogin] = React.useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <>
            <div className="step-two-container">
                <div className="reg-log-buttons">
                    <button
                        onClick={() => setIsLogin(false)}
                        className="reg-log-button reg"
                    >
                        РЕГИСТРАЦИЯ
                    </button>
                    <button
                        onClick={() => setIsLogin(true)}
                        className="reg-log-button log"
                    >
                        АВТОРИЗАЦИЯ
                    </button>
                </div>
                {isLogin ? <LoginForm /> : <RegisterForm />}
            </div>
        </>
    );
};

export default StepTwo;
