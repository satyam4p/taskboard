import axios from "axios";


const BASE_URL= process.env.NAME === "prod" ? process.env.DOMAIN : "http://localhost:9000";

export default axios.create({
    baseURL:BASE_URL,
})

export const axiosPrivate = axios.create({
    baseURL:BASE_URL,
    withCredentials:true,
    headers:{
        'Content-Type':'application/json'
    }
})