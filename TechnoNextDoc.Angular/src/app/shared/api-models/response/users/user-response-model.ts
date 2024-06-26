export interface UserResponse {
    id: number;
    userName: string;
    email: string;
    phoneNumber?: string | null;
    fullName?: string | null;
    nickName?: string | null;
    token?: string | null;
    refreshToken?: string | null;
}
