import { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import useAxiosPrivate from "./useAxiosPrivate";
import { createTaskSuccess, createTaskBegin, createTaskError } from "../../features/task/taskSlice";
import urlSchema from '../../network/urlSchema/urlSchema.json';
import useNotification from "../../common/Notification/helpers/useNotification";
import TaskContext from "../../common/Modals/Task/TaskContext/TaskProvider";


const useCreateAndGetTask = () => {
    const {setTask} = useContext(TaskContext);
    const axiosPrivate = useAxiosPrivate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const dispatch = useDispatch();
    const show  = useNotification();
    const create = async ( payload )=>{
        setLoading(true);
        dispatch(createTaskBegin());

        const CREATE_URL = urlSchema.Tasks.CREATE_TASK;

        try{

            const result = await axiosPrivate.post(CREATE_URL, payload);
            if(result){

                setLoading(false);
                setData(result.data);

                dispatch(createTaskSuccess(result.data));

                show("task created successfully", "success");
                
                setTask(prevTask=>{
                    return {
                        ...prevTask,
                        editEnabled : false
                    }
                })
            }

        }catch(error){
                setLoading(false);
                dispatch(createTaskError("something went wrong"));
                console.log("error",error)
                show(error?.response?.data?.error?.message, "warning");
        }
            
    }    
    return create;
}

export default useCreateAndGetTask;