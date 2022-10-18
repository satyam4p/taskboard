// import AxiosAjax from "../../network/axiosAjax";
import {axiosPrivate} from "../../network/axiosPrivate";
import useAuth from "./useAuth";


const useRefreshToken=()=>{
    const {setAuth} = useAuth();

    const refresh = async ()=>{
        const response = await axiosPrivate.get('auth/refresh');
        setAuth(prev=>{
            console.log(JSON.stringify(prev));
            console.log(response);
            return {...prev, token:response?.data?.token};
        });
        return response.data?.token;
    }
    return refresh;
}

export default useRefreshToken;