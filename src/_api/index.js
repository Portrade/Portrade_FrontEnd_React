import axios from "axios";

const api = axios.create({
    baseURL: "http://13.125.85.53:8080",
});

api.interceptors.request.use((req) => {
    if (localStorage.getItem("webToken")) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("webToken")).accessToken}`;
    }
    return req;
});

export const logIn = (formData) => api.post("/api/v1/auth/login", formData);
export const signUp = (formData) => api.post("/api/v1/users", formData);

export const noticeApi = {
    getList: (page, keyword) =>
        api.get("/api/v1/notices?", {
            params: { page, size: 8, keyword },
        }),
    postList: (title, contents) => api.post("/api/v1/notices", { title: title, content: contents }),
    getNoticeDetail: (noticeId) => api.get(`/api/v1/notices/${noticeId}`),
    editNotice: (noticeId, title, content) => api.put(`/api/v1/notices/${noticeId}`, { title: title, content: content }),
    deleteNotice: (noticeId) => api.delete(`/api/v1/notices/${noticeId}`),
};

export const inquiryApi = {
    getList: (page, type, keyword) => {
        console.log(keyword);
        return api.get(`/api/v1/qnas?keyword=${keyword}`, {
            params: { page, size: 8, type },
        });
    },
    postInquiry: (category, name, phoneNumber, email, title, content, isPublic) =>
        api.post("/api/v1/qnas", {
            category,
            name,
            phoneNumber,
            email,
            title,
            content,
            isPublic,
        }),
    inquiryDetail: (id) => api.get(`/api/v1/qnas/${id}`),
    deleteInquiry: (id) => api.delete(`/api/v1/qnas/${id}`),
    inquiryAnswer: (id, title, content, isPublic) => api.post(`/api/v1/qnas/${id}/answer`, { title, content, isPublic }),
};

export const faqApi = {
    getList: () => api.get("/api/v1/faqs?"),
    postFAQ: (title, content) => api.post("/api/v1/faqs", { title, content }),
};
