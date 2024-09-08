import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import authService from "../../services/authService";
import userService from "../../services/userService";
import axios from "axios";

const Navbar = () => {
    const [profile, setProfile] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const token = localStorage.getItem("token");
    const user = authService.getCurrentUser();
    const profileRef = useRef(null);
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

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    const getProfileContent = () => {
        if (!user) {
            return (
                <div className="login-block">
                    <Link to="/login" className="login-button">
                        Войти
                    </Link>
                </div>
            );
        }

        if (!profile) {
            return null;
        }

        if (profile.profilePicture) {
            return (
                <div className="profile-block">
                    <img
                        src={profile.profilePicture}
                        alt="Profile"
                        className="profile-image"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                </div>
            );
        }

        const color = profile.profileColor;
        const initial = profile.initials;

        return (
            <div className="profile-block">
                <div
                    className="profile-placeholder"
                    style={{ backgroundColor: color, display: "flex" }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {initial}
                </div>
            </div>
        );
    };

    const handleLogout = async () => {
        try {
            await axios.post(
                "http://localhost:3000/api/auth/logout",
                {},
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            localStorage.removeItem("token");
            window.location.reload(); // Refresh the page after logout
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const handleLinkClick = () => {
        setDropdownVisible(false);
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
            <div className="menu">
                <div to="/" className="logo"></div>
                <Link
                    to="/"
                    className={`menu-item ${location.pathname === "/" ? "active" : ""}`}
                >
                    Главная
                </Link>
                <Link
                    to="/news"
                    className={`menu-item ${location.pathname === "/news" ? "active" : ""}`}
                >
                    Новости
                </Link>
                <Link
                    to="/wiki"
                    className={`menu-item ${location.pathname === "/wiki" ? "active" : ""}`}
                >
                    Вики
                </Link>
                <Link
                    to="/blog"
                    className={`menu-item ${location.pathname === "/blog" ? "active" : ""}`}
                >
                    Блог
                </Link>
                {profile && profile.role === "client" && (
                    <Link
                        to="/dashboard/create-project"
                        className={`menu-item ${
                            location.pathname === "/dashboard/create-project"
                                ? "active"
                                : ""
                        }`}
                    >
                        Create Project
                    </Link>
                )}
            </div>
            <div className="profile" ref={profileRef}>
                {getProfileContent()}
                {profile && (
                    <div
                        className={`profile-dropdown ${dropdownVisible ? "visible" : ""}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <p>{profile.username}</p>
                        <p>{profile.email}</p>
                        <Link
                            to="/dashboard/profile"
                            style={{
                                backgroundColor: "#1C1C1E",
                                marginTop: "20px",
                                textAlign: "center",
                            }}
                            onClick={handleLinkClick}
                        >
                            Профиль
                        </Link>
                        <Link
                            to="/dashboard/portfolios"
                            style={{
                                backgroundColor: "#EAEBED",
                                color: "#141414",
                                textAlign: "center",
                            }}
                            onClick={handleLinkClick}
                        >
                            Сообщения
                        </Link>
                        <Link
                            to="/"
                            style={{
                                backgroundColor: "#fff",
                                border: "1.5px solid #EAEBED",
                                color: "#141414",
                                textAlign: "center",
                            }}
                            onClick={handleLogout}
                        >
                            Кнопка
                        </Link>
                        <Link
                            to="/dashboard/settings"
                            style={{
                                backgroundColor: "#fff",
                                color: "#141414",
                                borderBottom: "1.5px solid #EAEBED",
                                borderTop: "1.5px solid #EAEBED",
                                marginTop: "20px",
                                paddingTop: "10px",
                                paddingBottom: "10px",
                            }}
                        >
                            Настройки
                        </Link>
                        <div
                            style={{
                                marginTop: "20px",
                                borderBottom: "1.5px solid #EAEBED",
                                height: "50px",
                                marginBottom: "20px",
                            }}
                        ></div>
                        <Link
                            to="/"
                            style={{
                                backgroundColor: "#fff",
                                color: "#141414",
                                margin: 0,
                            }}
                        >
                            Премиум подписка
                        </Link>
                        <Link
                            to=""
                            style={{
                                backgroundColor: "#fff",
                                color: "#141414",
                                margin: 0,
                            }}
                        >
                            Помощь
                        </Link>
                        <Link
                            to="/"
                            onClick={handleLogout}
                            style={{
                                backgroundColor: "#fff",
                                color: "#141414",
                                margin: 0,
                            }}
                        >
                            Выход
                        </Link>
                        <div
                            style={{
                                marginTop: "20px",
                                height: "20px",
                                borderTop: "1.5px solid #EAEBED",
                                display: "flex",
                            }}
                        >
                            <h1
                                style={{
                                    fontSize: "12px",
                                    color: "#7B7B7B",
                                    fontWeight: "400",
                                    marginLeft: "10px",
                                }}
                            >
                                Полит. Польз. Copyright
                            </h1>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
