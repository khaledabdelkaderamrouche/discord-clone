import axios from "axios";
import env from "react-dotenv";

const apiClient = axios.create({
    baseURL: env.BACKEND_URL,
    timeout: 1000
});

export const login = async (data) => {
    try {
        return await apiClient.post("/api/v1/auth/login", data);
    } catch (e) {
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
        return {
            error: true,
            message: e
        };
    }
};
