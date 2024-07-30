// src/components/MainPage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userService from "../services/userService";
import "./MainPage.css";

const MainPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await userService.getAllUsers();
                setUsers(response.data);
            } catch (error) {
                console.error("Failed to fetch users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="main-page-container">
            <h1>Users</h1>
            <div className="users-list">
                {users.map((user) => (
                    <div key={user.id} className="user-item">
                        {user.profilePicture ? (
                            <img
                                src={user.profilePicture}
                                alt={user.username}
                                className="user-picture"
                            />
                        ) : (
                            <div
                                className="profile-placeholder"
                                style={{ backgroundColor: user.profileColor }}
                            >
                                {user.initials}
                            </div>
                        )}
                        <Link to={`/public-profile/${user.username}`}>
                            <h2>{user.username}</h2>
                        </Link>
                        <p>{user.professionalHeadline}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainPage;
