import axios from "axios";

export const api = axios.create({
    baseURL : "https://api.themoviedb.org/3",
})

export const api_key = "generate_your_own_api_key";
