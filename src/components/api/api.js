import axios from "axios";

export const api = axios.create({
    baseURL : "https://api.themoviedb.org/3",
})

export const api_key = "50ab14447d3e351ad4e922cc4f44ce36";