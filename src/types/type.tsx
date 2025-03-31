export interface Endpoints {
    baseURL:string
    register: string
    login: string
    checkUser: string
    userInfo: string
    forgotPassword: string
    resetPassword: string
}

export interface LoginData {
    email: string
    password: string
}

export interface RegisterData {
    firstName: string 
    lastName: string
    email:string
    username: string
    password: string
}