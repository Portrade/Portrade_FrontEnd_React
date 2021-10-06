import axios from "axios";

const api = axios.create({
    baseURL: "13.125.85.53:8080",
});

export const noticeApi = {
    getList: () => api.get("/api/v1/notices?"),
    postList: (title, content) => api.post("/api/v1/notices", { title, content }),
    getNoticeDetail: (noticeId) => api.get(`/api/v1/notices/${noticeId}`),
    putNotice: (noticeId) => api.put(`/api/v1/notices/${noticeId}`),
    deleteNotice: (noticeId) => api.delete(`/api/v1/notices/${noticeId}`),
};
