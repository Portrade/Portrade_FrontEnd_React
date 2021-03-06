import axios from "axios";

const api = axios.create({
    baseURL: "http://13.125.85.53:8080",
});

api.interceptors.request.use((req) => {
    if (sessionStorage.getItem("webToken")) {
        req.headers.authorization = `Bearer ${JSON.parse(sessionStorage.getItem("webToken")).accessToken}`;
    }
    return req;
});

export const logIn = (formData) => api.post("/api/v1/auth/login", formData);
export const signUp = (formData) => api.post("/api/v1/users", formData);

export const noticeApi = {
    getList: (page, keyword) =>
        api.get(`/api/v1/notices?keyword=${encodeURIComponent(keyword)}`, {
            params: { page, size: 8 },
        }),
    postList: (title, contents) => api.post("/api/v1/notices", { title: title, content: contents }),
    getNoticeDetail: (noticeId) => api.get(`/api/v1/notices/${noticeId}`),
    editNotice: (noticeId, title, content) => api.put(`/api/v1/notices/${noticeId}`, { title: title, content: content }),
    deleteNotice: (noticeId) => api.delete(`/api/v1/notices/${noticeId}`),
};

export const inquiryApi = {
    getList: (page, type, keyword) =>
        api.get(`/api/v1/qnas?keyword=${encodeURIComponent(keyword)}`, {
            params: { page, size: 8, type },
        }),
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

export const companyApi = {
    postCompany: (name, form, industry, sales, homepage, memberCount, address, ceo, foundingDate) => api.post("/api/v1/companies", { name, form, industry, sales, homepage, memberCount, address, ceo, foundingDate }),
    getCompanyDetail: () => api.get("/api/v1/companies/2"),
    getCompanyList: (name) => api.get("/api/v1/companies", { params: { name } }),
};

export const recruitmentApi = {
    postRecruitment: (companyId, title, career, education, workType, pay, address, category, logo, url) => api.post(`/api/v1/recruitments/${companyId}`, { title, career, education, workType, pay, address, category, logo, url }),
    getRecruitment: (area, job, title, page = 1, size = 100) =>
        api.get("/api/v1/recruitments", {
            params: {
                area,
                job,
                title,
                page,
                size,
            },
        }),
    getRecruitmentDetail: (id) => api.get(`/api/v1/recruitments/${id}`),
    deleteRecruitment: (id) => api.delete(`/api/v1/recruitments/${id}`),
};

export const portfolioApi = {
    registerPortfolio: (form) => {
        console.log("registerAPI:");
        for (let val of form.values()) {
            console.log(val);
        }

        api.post("/api/v1/portfolios", form);
    },
};

export const myPageApi = {
    getMyProfile: (userId) => api.get(`/api/v1/users/${userId}/profile`),
    uploadProfileImage: (formData) => {
        // console.log("myPageAPI:");
        // for (let val of formData.values()) {
        //     console.log(val);
        // }

        api.put("/api/v1/users/me/profile/image", formData);
    },
};
