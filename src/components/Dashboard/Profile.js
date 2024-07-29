// src/components/Dashboard/Profile.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
    const [activeTab, setActiveTab] = useState("profile");
    const [profile, setProfile] = useState({});
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/api/user/profile",
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                setProfile(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProfile();
    }, [token]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleSave = async () => {
        try {
            const response = await axios.put(
                "http://localhost:3000/api/user/profile",
                {
                    hourlyRate: profile.hourlyRate,
                    professionalHeadline: profile.professionalHeadline,
                    topSkills: profile.topSkills,
                    summary: profile.summary,
                    profilePicture: profile.profilePicture,
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            console.log("Response from server:", response.data);
            alert("Profile updated successfully");
        } catch (error) {
            console.error(
                "Update failed:",
                error.response ? error.response.data : error.message
            );
            alert("Failed to update profile");
        }
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
            navigate("/login");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    return (
        <div className="settings-container">
            <div className="settings-header">
                <h1>Settings</h1>
                <div className="tabs">
                    <button
                        className={activeTab === "general" ? "active" : ""}
                        onClick={() => handleTabChange("general")}
                    >
                        General
                    </button>
                    <button
                        className={activeTab === "profile" ? "active" : ""}
                        onClick={() => handleTabChange("profile")}
                    >
                        Profile
                    </button>
                    <button
                        className={activeTab === "withdrawal" ? "active" : ""}
                        onClick={() => handleTabChange("withdrawal")}
                    >
                        Withdrawal Methods
                    </button>
                </div>
            </div>
            <div className="settings-content">
                {activeTab === "general" && (
                    <GeneralTab
                        profile={profile}
                        handleChange={handleChange}
                        handleSave={handleSave}
                        handleLogout={handleLogout}
                    />
                )}
                {activeTab === "profile" && (
                    <ProfileTab
                        profile={profile}
                        handleChange={handleChange}
                        handleSave={handleSave}
                    />
                )}
                {activeTab === "withdrawal" && <WithdrawalTab />}
            </div>
        </div>
    );
};

const GeneralTab = ({ profile, handleChange, handleSave, handleLogout }) => (
    <div>
        <h2>General Settings</h2>
        <div className="profile-section">
            <label>Username</label>
            <input
                type="text"
                name="username"
                value={profile.username || ""}
                readOnly
            />
        </div>
        <div className="profile-section">
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={profile.email || ""}
                readOnly
            />
        </div>
        <div className="profile-section">
            <label>New Password</label>
            <input
                type="password"
                name="newPassword"
                value={profile.newPassword || ""}
                onChange={handleChange}
            />
        </div>
        <div className="profile-section">
            <label>Confirm Password</label>
            <input
                type="password"
                name="confirmPassword"
                value={profile.confirmPassword || ""}
                onChange={handleChange}
            />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleLogout} className="delete-account">
                Logout
            </button>
        </div>
    </div>
);

const ProfileTab = ({ profile, handleChange, handleSave }) => (
    <div>
        <h2>Profile Settings</h2>
        <div className="profile-section">
            <label>Profile Picture</label>
            <div className="profile-pic ture">
                {profile.profilePicture ? (
                    <img
                        src={profile.profilePicture}
                        alt="Profile"
                        className="profile-image-setting"
                    />
                ) : (
                    <div
                        className="profile-placeholder-image-setting"
                        style={{ backgroundColor: profile.profileColor }}
                    >
                        {profile.initials}
                    </div>
                )}
                <button>Replace</button>
                <button>Delete</button>
            </div>
        </div>
        <div className="profile-section">
            <label>What do you do?</label>
            <input
                type="text"
                name="job"
                value={profile.job || ""}
                onChange={handleChange}
            />
        </div>
        <div className="profile-section">
            <label>About You</label>
            <textarea
                name="summary"
                value={profile.summary || ""}
                onChange={handleChange}
                rows={4}
                className="profile-summary-textarea"
            ></textarea>
        </div>
        <div className="profile-section">
            <label>Skills (0/12)</label>
            <button>Add Skill</button>
            {/* Implement skills list here */}
        </div>
        <div className="profile-section">
            <label>Country</label>
            <input
                type="text"
                name="country"
                value={profile.country || ""}
                onChange={handleChange}
            />
        </div>
        <button onClick={handleSave}>Save</button>
    </div>
);

const WithdrawalTab = () => (
    <div>
        <h2>Withdrawal Methods</h2>
        {/* Add withdrawal methods content here */}
    </div>
);

export default Profile;
