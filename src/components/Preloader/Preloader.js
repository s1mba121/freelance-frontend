import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = ({ onAnimationEnd }) => {
    const greetings = [
        "Hello",
        "Hola",
        "Bonjour",
        "Ciao",
        "Hallo",
        "こんにちは",
        "안녕하세요",
        "你好",
        "Olá",
        "Hej",
        "Привет",
    ];

    const [currentGreeting, setCurrentGreeting] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (currentIndex < greetings.length) {
            const timer = setTimeout(() => {
                setCurrentGreeting(greetings[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            }, 200);
            return () => clearTimeout(timer);
        } else {
            setTimeout(() => {
                setIsVisible(false);
                setTimeout(onAnimationEnd, 300);
            }, 200);
        }
    }, [currentIndex, greetings, onAnimationEnd]);

    return (
        <div className={`preloader ${isVisible ? "visible" : "hidden"}`}>
            <div className="greeting-text">{currentGreeting}</div>
        </div>
    );
};

export default Preloader;
