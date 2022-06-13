import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '5b285e4d-b0fc-4ae5-ae16-e98b5fa6e386'}
})


export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            })
    },
    followed(userId: string) {
        return instance.post(`follow/${userId}`,)
            .then(response => {
                return response.data
            })
    },
    unfollowed(userId: string) {
        return instance.delete(`follow/${userId}`,)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please use profileApI object.')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    },
    savePhoto(photo: File) {
        let formData = new FormData();
        formData.append('image', photo)
        return instance.put(`profile/photo`, formData, {
            headers: {'Content-Type': 'multipart / form - data'}
        })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}