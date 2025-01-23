// src/services/authService.js

import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error(
            "Registration error:",
            error.response?.data || error.message
        );
        throw error;
    }
};

export const verifyEmail = async (verificationData) => {
    try {
        const response = await axios.post(
            `${API_URL}/verify-email`,
            verificationData
        );
        return response.data;
    } catch (error) {
        console.error(
            "Email verification error:",
            error.response?.data || error.message
        );
        throw error;
    }
};

export const sendVerificationCode = async (login) => {
    try {
        const response = await fetch("/api/send-code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ login }),
        });

        if (!response.ok) {
            throw new Error("Не удалось отправить код");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка в sendVerificationCode:", error);
        throw error;
    }
};

export const login = async (loginData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, loginData);
        localStorage.setItem("token", response.data.token);
        return response.data;
    } catch (error) {
        console.error("Login error:", error.response?.data || error.message);
        throw error;
    }
};
