// src/components/Dashboard/PublicProfile.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import userService from "../../services/userService";
import authService from "../../services/authService";
import "./Public-Profile.css";

const PublicProfile = () => {
    const { username } = useParams();
    const [profile, setProfile] = useState({});
    const [portfolios, setPortfolios] = useState([]);
    const [reviews, setReviews] = useState([]);
    const currentUser = authService.getCurrentUser();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await userService.getPublicProfile(username);
                setProfile(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchPortfolios = async () => {
            try {
                const response = await userService.getPortfolios(username);
                setPortfolios(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchReviews = async () => {
            try {
                const response = await userService.getReviews(username);
                setReviews(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProfile();
        fetchPortfolios();
        fetchReviews();
    }, [username]);

    const handleEditProfile = () => {
        navigate(`/dashboard/profile`);
    };

    return (
        <div className="profile-page">
            <div className="cover-photo"></div>
            <div className="profile-container">
                <div className="profile-header">
                    {profile.profilePicture ? (
                        <img
                            src={profile.profilePicture}
                            alt="Profile"
                            className="profile-image-public"
                        />
                    ) : (
                        <div
                            className="profile-placeholder-public"
                            style={{
                                backgroundColor:
                                    profile?.profileColor || "#ccc",
                            }}
                        >
                            {profile?.username
                                ? profile.username.charAt(0)
                                : "?"}
                        </div>
                    )}
                    <div className="profile-details">
                        <h2>{profile.username}</h2>
                        <p>{profile.professionalHeadline}</p>
                        <p>Role: {profile.role}</p>
                        <p>Hourly Rate: ${profile.hourlyRate}/hour</p>
                    </div>
                    <div className="profile-summary">
                        <pre>{profile.summary}</pre>
                    </div>
                    <div className="profile-actions">
                        {currentUser && currentUser.username === username && (
                            <button onClick={handleEditProfile}>Edit</button>
                        )}
                    </div>
                </div>
                {/* Portfolio and Reviews sections */}
            </div>
        </div>
    );
};

export default PublicProfile;
