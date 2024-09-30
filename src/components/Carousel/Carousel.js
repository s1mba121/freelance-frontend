import React, { useState } from "react";
import "./Carousel.css"; // CSS для карусели

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = [
        { src: "231be585a8aa72e5da23c046ed16570a.jpeg", title: "Игры" },
        {
            src: "0115992ff001c4847cbb15780301c21b.jpeg",
            title: "Графический дизайн",
        },
        { src: "53bc5c3cf93f2e1691ef5501748c3355.jpeg", title: "Сайты" },
        { src: "12648783e6d6491a354ddb9dd5c4cef0.jpeg", title: "Дизайн" },
        { src: "acfdc8f7ef61d8e29c038be2b30d1252.jpeg", title: "Музыка" },
        {
            src: "51f38a137212a40029692948a0e6da89.jpeg",
            title: "Crypto / NFT",
        },
        { src: "87b359d1f7380dd571f7f478f435bf31.jpeg", title: "Тексты" },
    ];

    const moveToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const moveToPrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
        );
    };

    const updateCardStyles = (index) => {
        const offset = (index - currentIndex + cards.length) % cards.length;
        const xPosition = (offset - 3) * 200;
        const scale = 1 - Math.abs(offset - 3) * 0.1;
        const opacity = offset === 3 ? 1 : 1;
        const zIndex = -Math.abs(offset - 3) + 2;
        const blendMode = offset === 3 ? "normal" : "luminosity";

        return {
            transform: `translateX(${xPosition}px) scale(${scale})`,
            opacity: opacity,
            zIndex: zIndex,
            mixBlendMode: blendMode,
        };
    };

    return (
        <div className="carousel">
            <button className="arrow arrow-left" onClick={moveToPrev}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="39"
                    viewBox="0 0 38 39"
                    fill="none"
                >
                    <path
                        d="M10.2917 15.5082H22.2276C25.2546 15.5082 27.7084 17.9621 27.7084 20.989C27.7084 24.016 25.2546 26.4698 22.2276 26.4698H15.0418M10.2917 15.5082L13.8542 12.2198M10.2917 15.5082L13.8542 18.7967"
                        stroke="#5C5C5C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M34.8334 19.4662C34.8334 26.9301 34.8334 30.6621 32.5147 32.9808C30.1959 35.2995 26.464 35.2995 19.0001 35.2995C11.5362 35.2995 7.80422 35.2995 5.48549 32.9808C3.16675 30.6621 3.16675 26.9301 3.16675 19.4662C3.16675 12.0023 3.16675 8.27036 5.48549 5.95162C7.80422 3.63288 11.5362 3.63288 19.0001 3.63288C26.464 3.63288 30.1959 3.63288 32.5147 5.95162C34.0564 7.49337 34.5731 9.65992 34.7462 13.1329"
                        stroke="#5C5C5C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                    />
                </svg>
            </button>

            {cards.map((card, index) => (
                <div
                    key={index}
                    className={`card ${index === currentIndex ? "active" : ""}`}
                    style={updateCardStyles(index)}
                >
                    <img src={card.src} alt={`Карточка ${index + 1}`} />
                    <h3 className="card-title">{card.title}</h3>
                </div>
            ))}

            <button className="arrow arrow-right" onClick={moveToNext}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="39"
                    viewBox="0 0 38 39"
                    fill="none"
                >
                    <path
                        d="M27.7082 15.5083H15.7723C12.7453 15.5083 10.2915 17.9621 10.2915 20.9891C10.2915 24.016 12.7453 26.4698 15.7723 26.4698H22.9582M27.7082 15.5083L24.1457 12.2198M27.7082 15.5083L24.1457 18.7968"
                        stroke="#5C5C5C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M34.8332 19.4662C34.8332 26.9301 34.8332 30.6621 32.5144 32.9808C30.1957 35.2995 26.4637 35.2995 18.9998 35.2995C11.5359 35.2995 7.80398 35.2995 5.48524 32.9808C3.1665 30.6621 3.1665 26.9301 3.1665 19.4662C3.1665 12.0023 3.1665 8.27036 5.48524 5.95162C7.80398 3.63288 11.5359 3.63288 18.9998 3.63288C26.4637 3.63288 30.1957 3.63288 32.5144 5.95162C34.0562 7.49337 34.5728 9.65992 34.7459 13.1329"
                        stroke="#5C5C5C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Carousel;
