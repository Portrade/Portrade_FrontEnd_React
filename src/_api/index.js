import axios from "axios";

const api = axios.create({
	baseURL: "http://13.125.85.53:8080"
})

export const logIn = (formData) => api.post("/api/v1/auth/login", formData);

