
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://your-production-api-url.com/api";
import axios from "axios";

const api = axios.create({
    baseURL: BASE_URL
})

export default api;