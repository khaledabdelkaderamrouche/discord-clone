import axios from "axios";
import env from "react-dotenv";
import { logout } from "../features/authSlice";

const apiClient = axios.create({
    baseURL: env.BACKEND_URL,
    timeout: 1000
});

apiClient.interceptors.request.use((config) => {
    const userDetails = localStorage.getItem("userDetails");

    if (userDetails) {
        const token = JSON.parse(userDetails).token;
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// PUBLIC ROUTES
export const login = async (data) => {
    try {
        return await apiClient.post("/api/v1/auth/login", data);
    } catch (e) {
        checkResponseCode(e);
        return {
            error: true,
            message: e
        };
    }
};
export const register = async (data) => {
    try {
        return await apiClient.post("/api/v1/auth/register", data);
    } catch (e) {
        checkResponseCode(e);
        return {
            error: true,
            message: e
        };
    }
};

// SECURE ROUTES

const checkResponseCode = (exception) => {
    const responseCode = exception?.response?.status;

    if (responseCode) {
        (responseCode === 401 || responseCode === 403) && logout();
    }
};
