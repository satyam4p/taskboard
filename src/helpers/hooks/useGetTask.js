import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAxiosPrivate from './useAxiosPrivate';
import urlSchema from '../../network/urlSchema/urlSchema.json';
import { fetchTaskBegin, fetchTaskSuccess, fetchTaskError } from "../../features/task/taskSlice";

const useGetTask = ()=>{

    const [loading, setLoading] = useState(false);
    const axios = useAxiosPrivate();
    const dispatch = useDispatch();

    const getTask = async (taskId)=>{

        try{
            dispatch(fetchTaskBegin());
            setLoading(true);
            const URL = urlSchema.Tasks.GET_TASK.replace(':id',taskId);
            const result = await axios.get(URL);
            if(result && result.data){
                dispatch(fetchTaskSuccess(result?.data));
                setLoading(false);
                console.log("result:: ",result.data);
            }else{
                setLoading(false);
                dispatch(fetchTaskError("task not found"));
            }
        }catch(error){
            setLoading(false);
            dispatch(fetchTaskError(error));
            console.log("an error occured while fetching task:: ",error);
        }
    }
    return getTask;

}

export default useGetTask;