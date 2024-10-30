import instance from "../instance";

export interface registerArgs {
    username: string
    password: string
}

export interface registerResponse {
    access_token: string
    user_id: string
}

const register = async({username, password}: registerArgs) => {
    instance.post<registerResponse>('auth/register', {
        username: username,
        password: password,
    })
}  

export { register }