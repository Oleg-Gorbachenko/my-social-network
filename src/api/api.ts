import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '1a217cc3-1a7c-4d7c-985d-1432423170d6'}
})


export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            })
    },
    followed(userId: string) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,)
            .then(response => {
                return response.data
            })
    },
    unfollowed(userId: string) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,)
            .then(response => {
                return response.data
            })
    }
}