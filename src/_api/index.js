import axios from "axios";

const api = axios.create({
    baseURL: "http://13.125.85.53:8080"
});

api.interceptors.request.use(req => {
    if (localStorage.getItem("webToken")) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("webToken")).accessToken}`;
	}
    return req;
})

export const logIn = (formData) => api.post("/api/v1/auth/login", formData);
export const signUp = (formData) => api.post("/api/v1/users", formData);

export const noticeApi = {
    getList: () => api.get("/api/v1/notices?"),
    postList: (title, contents) => api.post("/api/v1/notices", { title: title, content: contents }),
    getNoticeDetail: (noticeId) => api.get(`/api/v1/notices/${noticeId}`),
    putNotice: (noticeId) => api.put(`/api/v1/notices/${noticeId}`),
    deleteNotice: (noticeId) => api.delete(`/api/v1/notices/${noticeId}`),
};
