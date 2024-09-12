import React from "react";

const StepOne = ({ handleNextStep }) => {
    return (
        <>
            <h1 className="auth-title">Выберите свою роль</h1>
            <div className="auth-options">
                <div className="auth-option">
                    <div className="auth-option-logo-1"></div>
                    <div className="auth-option-overlay"></div>
                    <button
                        className="auth-option-button-1"
                        onClick={handleNextStep}
                    >
                        <h1>КАК ЗАКАЗЧИК</h1>
                    </button>
                </div>
                <div className="auth-option">
                    <div className="auth-option-logo-2"></div>
                    <div className="auth-option-overlay"></div>
                    <button
                        className="auth-option-button-2"
                        onClick={handleNextStep}
                    >
                        <h1>КАК ИСПОЛНИТЕЛЬ</h1>
                    </button>
                </div>
            </div>
        </>
    );
};

export default StepOne;
