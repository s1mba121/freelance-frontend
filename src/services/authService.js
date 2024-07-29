// src/services/authService.js
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:3000/api/auth";

const register = (username, email, password, role) => {
    return axios.post(`${API_URL}/register`, {
        username,
        email,
        password,
        role,
    });
};

const login = (email, password) => {
    return axios.post(`${API_URL}/login`, { email, password });
};

const logout = () => {
    localStorage.removeItem("token");
    return axios.post(`${API_URL}/logout`);
};

const getCurrentUser = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
        const decodedToken = jwtDecode(token);
        console.log("Decoded Token:", decodedToken);
        return { username: decodedToken.username };
    } catch (error) {
        console.error("Invalid token:", error);
        return null;
    }
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
};
