// src/components/Navbar/Navbar.js
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
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
                <Link to="/login" className="login-button">
                    Войти
                </Link>
            );
        }

        if (!profile) {
            return null;
        }

        if (profile.profilePicture) {
            return (
                <img
                    src={profile.profilePicture}
                    alt="Profile"
                    className="profile-image"
                />
            );
        }

        const color = profile.profileColor;
        const initial = profile.initials;

        return (
            <div
                className="profile-placeholder"
                style={{ backgroundColor: color }}
            >
                {initial}
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

    return (
        <nav className="navbar">
            <div className="menu">
                <Link to="/" className="logo"></Link>
                <Link to="/kworks" className="menu-item">
                    Workers
                </Link>
                <Link to="/orders" className="menu-item">
                    Orders
                </Link>
                <Link to="/portfolio" className="menu-item">
                    Portfolio
                </Link>
                <Link to="/chat" className="menu-item">
                    Chat
                </Link>
                {profile && profile.role === "client" && (
                    <Link to="/dashboard/create-project" className="menu-item">
                        Create Project
                    </Link>
                )}
            </div>
            <div
                className="profile"
                ref={profileRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {getProfileContent()}
                {profile && (
                    <div
                        className={`profile-dropdown ${dropdownVisible ? "visible" : ""}`}
                    >
                        <p>{profile.username}</p>
                        <p>{profile.role}</p>
                        <Link
                            to={`/public-profile/${profile.username}`}
                            onClick={handleLinkClick}
                        >
                            Profile
                        </Link>
                        <Link to="/dashboard/profile" onClick={handleLinkClick}>
                            Settings
                        </Link>
                        <Link to="/help" onClick={handleLinkClick}>
                            Help
                        </Link>
                        <Link onClick={handleLogout}>Sign out</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
