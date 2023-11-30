import axios from "axios";
import { LoginType } from "../types/LoginType";
import { RegisterType } from "../types/RegisterType";

const API_PATH = axios.create({
    baseURL: 'https://www.mymusiclist.com.br/api',
})

let accessToken = null; 

export const api = {
    registerUser: async (dataUser: RegisterType) => {
        const response = await API_PATH.post('/register/',dataUser)
        return response
    },
    loginUser: async (dataLogin: LoginType) =>{
        const response = await API_PATH.post('/login/',dataLogin)
        if (response.status === 200) {
            accessToken = response.data.access; 
            API_PATH.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        }
        return response
    },
    logoutUser: async () =>{
        const response = await API_PATH.delete('/logout/')
        return response
    }, 
    allMusics: async () => {
        const response = await API_PATH.get('/musics/')
        return response
    },
    addMusic: async (user,music) => {
        const response = await API_PATH.post('/wishlistentries/',{user,music})
        return response
    },
    getWishlist: async(userID) =>{
        const response = await API_PATH.get(`/wishlistentries/?filter="user":${userID}`)
        return response
    },
    getMusicID: async (musicID) => {
        const response = await API_PATH.get(`/musics/${musicID}/`)
        return response
    },
}