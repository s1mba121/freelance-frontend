import React from "react";

const StepOne = ({ handleNextStep }) => {
    const handleRoleSelection = (role) => {
        handleNextStep(role);
    };

    return (
        <>
            <h1 className="auth-title">Выберите свою роль</h1>
            <div className="auth-options">
                <div className="auth-option">
                    <div className="auth-option-logo-1"></div>
                    <div className="auth-option-overlay"></div>
                    <button
                        className="auth-option-button-1"
                        onClick={() => handleRoleSelection("customer")}
                    >
                        <h1>КАК ЗАКАЗЧИК</h1>
                    </button>
                </div>
                <div className="auth-option">
                    <div className="auth-option-logo-2"></div>
                    <div className="auth-option-overlay"></div>
                    <button
                        className="auth-option-button-2"
                        onClick={() => handleRoleSelection("freelancer")}
                    >
                        <h1>КАК ИСПОЛНИТЕЛЬ</h1>
                    </button>
                </div>
            </div>
        </>
    );
};

export default StepOne;
