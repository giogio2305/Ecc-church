import axios from "axios";
import { useAuthenticateStore } from "@/stores/authenticate";
const auth = useAuthenticateStore();

const axiosClient = axios.create({
    baseURL: `/api`,
});

const axiosClientFile = axios.create({
    baseURL: `/api`,
});

axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${auth.token}`;
    return config;
});

axiosClientFile.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${auth.token}`;
    config.headers["Content-Type"] = `multipart/form-data`;
    return config;
});

export { axiosClient, axiosClientFile };
