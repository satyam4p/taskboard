import { useState } from "react";
import { fetchTaskConfigBegin, fetchTaskConfigSuccess, fetchTaskConfigError } from "../../features/task/taskSlice";
import useAxiosPrivate from "./useAxiosPrivate";
import { useDispatch } from "react-redux";
import urlSchema from '../../network/urlSchema/urlSchema.json';
import useAuth from "./useAuth";

const useTaskConfig = ()=>{
    const { auth } = useAuth();
    const dispatch = useDispatch();
    const [configLoaded, setLoading] = useState(false);
    const [config, setConfig] = useState();
    const axiosprivate = useAxiosPrivate();
    const config_id = auth.user?._id;
    const fetchConfig = async () =>{
        const URL = urlSchema.Config.GET_CONFIG.replace(":id",config_id);
        try{
            setLoading(true);
            dispatch(fetchTaskConfigBegin); 
            const result = await axiosprivate.get(URL);
            if(result && result.data){
                setLoading(true);
                const config = Object.values(result.data);
                dispatch(fetchTaskConfigSuccess(config));
                setConfig(result.data);
            }
        }catch(error){
            setLoading(true);
            dispatch(fetchTaskConfigError(error));
        }
    }
    return [configLoaded, fetchConfig];
}

export default useTaskConfig;