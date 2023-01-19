import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useAxiosPrivate from "./useAxiosPrivate";
import { createTaskSuccess, createTaskBegin, createTaskError } from "../../features/task/taskSlice";
import urlSchema from '../../network/urlSchema/urlSchema.json';

const useCreateTask =()=>{
    const axiosPrivate = useAxiosPrivate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const dispatch = useDispatch();
    const create = async ( payload )=>{
        setLoading(true);
        dispatch(createTaskBegin());
        console.log("taskData:: ",payload);
        const URL = urlSchema.Tasks.CREATE_TASK;
        try{
            const result = await axiosPrivate.post(URL, payload);
        console.log("result:: ",result);
            if(result){
                setLoading(false);
                setData(result.data);
                dispatch(createTaskSuccess(result.data));
            }
        }catch(error){
                setLoading(false);
                dispatch(createTaskError("something went wrong"));
                console.log("error",error)
        }
            
    }    
    return [loading, create, data];
}

export default useCreateTask;