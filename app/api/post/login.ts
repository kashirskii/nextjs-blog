import instance from "../instance";

export interface loginArgs {
    username: string
    password: string
}

export interface loginResponse {
    access_token: string
    user_id: string
}

const login = async({username, password}: loginArgs) => {
    instance.post<loginResponse>('auth/register', {
        username: username,
        password: password,
    })
}  

export { login }