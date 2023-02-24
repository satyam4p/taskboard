import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import useAxiosPrivate from "./useAxiosPrivate";
import urlSchema from '../../network/urlSchema/urlSchema.json';
import TaskContext from "../../common/Modals/Task/TaskContext/TaskProvider";
import useNotification from "../../common/Notification/helpers/useNotification";
import { deleteTaskBegin, deleteTaskSuccess, deleteTaskError } from "../../features/task/taskSlice";

const useDeleteTask = ()=>{

    const axiosPrivate = useAxiosPrivate();
    const dispatch = useDispatch();
    const show = useNotification();
    const deleteTask = async (taskId)=>{
        const url = urlSchema.Tasks.DELETE_TASK.replace(':id',taskId);
        try{
            dispatch(deleteTaskBegin); 
            const result = await axiosPrivate.delete(url);
            console.log(result);
            
            if(result){
                dispatch(deleteTaskSuccess);
                show("Task deleted Successfully", "success");
            }
        }catch(error){
            dispatch(deleteTaskError);
            show("Some error occured while deleting task", "warning");
            console.log("error occured while deleting the task");
        }
    }
    return deleteTask;
}

export default useDeleteTask;