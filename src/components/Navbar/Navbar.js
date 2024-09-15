import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import authService from "../../services/authService";
import userService from "../../services/userService";

const Navbar = () => {
    const [profile, setProfile] = useState(null);
    const token = localStorage.getItem("token");
    const user = authService.getCurrentUser();
    const navigate = useNavigate();
    const location = useLocation();
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                if (user && !profile) {
                    const res = await userService.getProfile(token);
                    setProfile(res.data);
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };

        fetchProfile();
    }, [user, profile, token]);

    const handleProfileClick = () => {
        if (user) {
            // Если пользователь залогинен, перенаправляем на /status
            navigate("/status");
        } else {
            // Если пользователь не залогинен, перенаправляем на /auth
            navigate("/auth");
        }
    };

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${hidden ? "navbar-hidden" : ""}`}>
            <div to="/" className="logo"></div>
            <div className="menu-buttons">
                <Link
                    to="/"
                    className={`menu-item ${
                        location.pathname === "/" ? "active" : ""
                    }`}
                >
                    Главная
                </Link>
                <Link
                    to="/news"
                    className={`menu-item ${
                        location.pathname === "/news" ? "active" : ""
                    }`}
                >
                    Новости
                </Link>
                <Link
                    to="/status"
                    className={`menu-item ${
                        location.pathname === "/wiki" ? "active" : ""
                    }`}
                >
                    Биржа
                </Link>
                <Link
                    to="/blog"
                    className={`menu-item ${
                        location.pathname === "/blog" ? "active" : ""
                    }`}
                >
                    Блог
                </Link>
                <Link
                    to="/wiki"
                    className={`menu-item ${
                        location.pathname === "/wiki" ? "active" : ""
                    }`}
                >
                    База знаний
                </Link>
            </div>

            <div className="profile" onClick={handleProfileClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                >
                    <path
                        d="M25 26.25V23.75C25 22.4239 24.4732 21.1521 23.5355 20.2145C22.5979 19.2768 21.3261 18.75 20 18.75H10C8.67392 18.75 7.40215 19.2768 6.46447 20.2145C5.52678 21.1521 5 22.4239 5 23.75V26.25"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15 13.75C17.7614 13.75 20 11.5114 20 8.75C20 5.98858 17.7614 3.75 15 3.75C12.2386 3.75 10 5.98858 10 8.75C10 11.5114 12.2386 13.75 15 13.75Z"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </nav>
    );
};

export default Navbar;
