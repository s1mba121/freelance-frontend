// src\routes.js
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import Profile from "./components/Dashboard/Profile";
import Portfolios from "./components/Dashboard/Portfolios";
import PublicProfile from "./components/Dashboard/PublicProfile";
import MainPage from "./pages/Main/MainPage";
import Navbar from "./components/Navbar/Navbar";
import CreateProject from "./components/Projects/CreateProject";
import Projects from "./components/Projects/Projects";
// import Wiki from "./pages/Wiki/WikiPage";
// import News from "./pages/News/NewsPage";
// import Blog from "./pages/Blog/BlogPage";
import NoPage from "./pages/NoPage/NoPage";
import Auth from "./pages/Auth/Auth";
import ResetPassword from "./components/Auth/ResetPassword/ResetPassword";
import NewPassword from "./components/Auth/NewPassword/NewPassword";
import Status from "./pages/Status/StatusPage";
import RegGood from "./pages/RegGood/RegGood";

const AppRoutes = ({ setIsLoading }) => (
    <Router>
        <Routes>
            <Route path="/*" element={<Layout setIsLoading={setIsLoading} />} />
        </Routes>
    </Router>
);

const Layout = ({ setIsLoading }) => {
    const location = useLocation();
    const hideNavbar = [
        "/login",
        "/register",
        "/wiki",
        "/news",
        "/blog",
        "/status",
        "/reg-good",
    ].includes(location.pathname);

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
                <Route path="/auth" element={<Auth />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route
                    path="/new-password/:email/:token"
                    element={<NewPassword />}
                />
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
                <Route path="/wiki" element={<NoPage />} />
                <Route path="/news" element={<NoPage />} />
                <Route path="/blog" element={<NoPage />} />
                <Route path="/status" element={<Status />} />
                <Route path="/reg-good" element={<RegGood />} />
                {/* новый маршрут */}
            </Routes>
        </>
    );
};

export default AppRoutes;
