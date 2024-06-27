export interface UserRequest {
    id: number;
    userName: string;
    email: string;
    phoneNumber?: string | null;
    fullName?: string | null;
    nickName?: string | null;
}


export interface UserLoginRequest {
    email: string,
    password: string,
}

export interface registrationModel {
    firstName: string,
    lastName: string,
    companyName: string,
    email: string,
    password: string
}