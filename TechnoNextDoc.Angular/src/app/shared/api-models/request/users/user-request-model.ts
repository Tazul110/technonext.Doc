export interface UserRequest {
    id: number;
    userName: string;
    email: string;
    phoneNumber?: string | null;
    fullName?: string | null;
    nickName?: string | null;
}


export interface UserLoginRequest {
    username: string;
    password: string;
}