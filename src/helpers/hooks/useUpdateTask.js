import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAxiosPrivate from "./useAxiosPrivate";
import urlSchema from '../../network/urlSchema/urlSchema.json';
import TaskContext from "../../common/Modals/Task/TaskContext/TaskProvider";
import useNotification from "../../common/Notification/helpers/useNotification";
import { updateTaskBegin, updateTaskSuccess, updateTaskError } from "../../features/task/taskSlice";


const useUpdateTask =() => {
    const { setTask } = useContext(TaskContext);
    const [ updatedTask, setUpdatedTask ] = useState();
    const [updateLoading, setLoading] = useState();
    const show  = useNotification();
    const dispatch = useDispatch();
    const axios = useAxiosPrivate();

    const update = async (taskId, payload )=>{

        const UPDATE_URL = urlSchema.Tasks.PATCH_TASK.replace(':id', taskId);

        try{
            setLoading(true);
            dispatch(updateTaskBegin());
            const updatedTask = await axios.patch(UPDATE_URL, payload);
            if(updatedTask){
                setLoading(false);
                setUpdatedTask(updatedTask?.data);
                show("Task Updated successfully", "success");
                setTask(prevTask=>{
                    return {
                        ...prevTask,
                        editEnabled : false
                    }
                });
                dispatch(updateTaskSuccess(updatedTask?.data))
            }
        }catch(error){
            setLoading(false);
            console.log("error:: ",error);
            show("some error occured", "warning");
            dispatch(updateTaskError(error));
        }

    }

    return [updateLoading, update];

}

export default useUpdateTask;