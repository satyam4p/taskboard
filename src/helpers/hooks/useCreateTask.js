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
    const create = async (/**payload to be sent here */ )=>{
        setLoading(true);
        dispatch(createTaskBegin());
        const payload = {
            "name": "askhjdg test",
            "InitialDate": "12 May, 2022",
            "finalDate": "12 Dec, 2022",
            "status": "In Progress",
            "description": "create",
            "label":"Bug"
        }
        // const result = await dispatch(createTask(payload, axiosPrivate));
        const URL = urlSchema.Tasks.CREATE_TASK;
        const result = await axiosPrivate.post(URL, payload);
        if(result){
            setLoading(false);
            setData(result.data);
            dispatch(createTaskSuccess(result.data));
        }else{
            setLoading(false);
            dispatch(createTaskError("something went wrong"));
        }
    }    
    return [loading, create, data];
}

export default useCreateTask;