import { Endpoints } from "../types/type"

const endpoints: Endpoints = {
    baseURL:  "http://104.238.187.88:8080",
    register: "/api/auth/register",
    login: "/api/auth/login",
    userInfo: "/api/user/info",
    checkUser: "/api/auth/check?username={username}",
    forgotPassword: "/api/mail/forgot-password",
    resetPassword: "/api/auth/reset-password/{token}"
}

export default endpoints