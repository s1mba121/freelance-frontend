// src/services/userService.js
import axios from "axios";

const API_URL = "http://localhost:3000/api/user";

const getProfile = (token) => {
    return axios.get(`${API_URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

const getPublicProfile = (username) => {
    return axios.get(`${API_URL}/public-profile/${username}`);
};

const updateProfile = (token, profileData) => {
    return axios.put(`${API_URL}/profile`, profileData, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

const addPortfolio = (token, portfolioData) => {
    return axios.post(`${API_URL}/portfolio`, portfolioData, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

const getPortfolios = (token) => {
    return axios.get(`${API_URL}/portfolio`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

const addReview = (token, reviewData) => {
    return axios.post(`${API_URL}/reviews`, reviewData, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

const getReviews = (freelancerId) => {
    return axios.get(`${API_URL}/reviews/${freelancerId}`);
};

const getAllUsers = () => {
    return axios.get(`${API_URL}/all`);
};

export default {
    getProfile,
    getPublicProfile,
    updateProfile,
    addPortfolio,
    getPortfolios,
    addReview,
    getReviews,
    getAllUsers,
};
