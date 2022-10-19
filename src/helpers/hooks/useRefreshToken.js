import axios from "../../network/axios";
import useAuth from "./useAuth";

const useRefreshToken=()=>{
    const {setAuth} = useAuth();

    const refresh = async ()=>{
        axios.defaults.withCredentials = true;
        const response = await axios.get('/auth/refresh',
        { 
            withCredentials: true
        });
        setAuth(prev=>{
            return {...prev, token:response?.data?.token};
        });
        return response.data?.token;
    }
    return refresh;
}

export default useRefreshToken;