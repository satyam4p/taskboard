import axios from "axios";


const BASE_URL= process.env.NODE_ENV === "development" ? "http://localhost:9000" : process.env.REACT_APP_DOMAIN_URL;

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