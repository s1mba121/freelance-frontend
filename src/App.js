import React, { useState, useEffect } from "react";
import AppRoutes from "./routes";
import Preloader from "./components/Preloader/Preloader";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showSwipe, setShowSwipe] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            setShowSwipe(true);
            setTimeout(() => setShowSwipe(false), 300); // Длительность анимации
        }
    }, [isLoading]);

    return (
        <div className="App">
            {/* Отображаем прелоадер только на главной странице */}
            <AppRoutes setIsLoading={setIsLoading} />
            {isLoading ? (
                <Preloader onAnimationEnd={() => setIsLoading(false)} />
            ) : (
                showSwipe && <div className="swipe-up"></div>
            )}
        </div>
    );
};

export default App;
