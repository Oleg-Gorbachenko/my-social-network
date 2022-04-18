import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'b03af928-8bf3-4301-ade2-43aff4a6a13f'}
})


export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            })
    },
    followed: (userId: string) => {
        return instance.post(`follow/${userId}`,)
            .then(response => {
                return response.data
            })
    },
    unfollowed: (userId: string) => {
        return instance.delete(`follow/${userId}`,)
            .then(response => {
                return response.data
            })
    }
}