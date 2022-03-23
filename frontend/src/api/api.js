import axios from "axios";
import env from "react-dotenv";
import { logout } from "../features/authSlice";

const apiClient = axios.create({
    baseURL: env.BACKEND_URL,
    timeout: 5000
});

apiClient.interceptors.request.use((config) => {
    const userDetails = localStorage.getItem("userDetails");

    if (userDetails) {
        const user = JSON.parse(userDetails);
        const token = user.userDetails.token;
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
export const acceptInvitation = async (data) => {
    try {
        return await apiClient.put("/api/v1/friends/invitations/accept", data);
    } catch (e) {
        checkResponseCode(e);
        return {
            error: true,
            message: e
        };
    }
};
export const declineInvitation = async (data) => {
    try {
        return await apiClient.put("/api/v1/friends/invitations/decline", data);
    } catch (e) {
        checkResponseCode(e);
        return {
            error: true,
            message: e
        };
    }
};
export const getFriends = async (data) => {
    try {
        return await apiClient.get("/api/v1/friends/", { params: data });
    } catch (e) {
        checkResponseCode(e);
        return {
            error: true,
            message: e
        };
    }
};
export const sendInvitation = async (data) => {
    try {
        return await apiClient.post("/api/v1/friends/invitations", data);
    } catch (e) {
        checkResponseCode(e);
        return {
            error: true,
            message: e
        };
    }
};
export const getPendingInvitations = async (data) => {
    try {
        return await apiClient.get("/api/v1/friends/invitations", { params: data });
    } catch (e) {
        checkResponseCode(e);
        return {
            error: true,
            message: e
        };
    }
};
const checkResponseCode = (exception) => {
    const responseCode = exception?.response?.status;

    if (responseCode) {
        (responseCode === 401 || responseCode === 403) && logout();
    }
};
