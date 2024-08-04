import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Profile from "./components/Dashboard/Profile";
import Portfolios from "./components/Dashboard/Portfolios";
import PublicProfile from "./components/Dashboard/PublicProfile";
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar/Navbar";
import CreateProject from "./components/Projects/CreateProject";
import Projects from "./components/Projects/Projects";

const AppRoutes = ({ setIsLoading }) => (
    <Router>
        <Routes>
            <Route path="/*" element={<Layout setIsLoading={setIsLoading} />} />
        </Routes>
    </Router>
);

const Layout = ({ setIsLoading }) => {
    const location = useLocation();
    const hideNavbar = ["/login", "/register"].includes(location.pathname);

    // Показываем прелоадер только на главной странице
    React.useEffect(() => {
        if (location.pathname === "/") {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [location.pathname, setIsLoading]);

    return (
        <>
            {!hideNavbar && <Navbar />}
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard/profile" element={<Profile />} />
                <Route
                    path="/public-profile/:username"
                    element={<PublicProfile />}
                />
                <Route path="/dashboard/portfolios" element={<Portfolios />} />
                <Route
                    path="/dashboard/create-project"
                    element={<CreateProject />}
                />{" "}
                {/* новый маршрут */}
                <Route path="/orders" element={<Projects />} />{" "}
                {/* новый маршрут */}
            </Routes>
        </>
    );
};

export default AppRoutes;
