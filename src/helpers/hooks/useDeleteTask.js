import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import useAxiosPrivate from "./useAxiosPrivate";
import urlSchema from '../../network/urlSchema/urlSchema.json';
import TaskContext from "../../common/Modals/Task/TaskContext/TaskProvider";
import useNotification from "../../common/Notification/helpers/useNotification";


const useDeleteTask = ()=>{

    const axios = useAxiosPrivate();

    const deleteTask = async (taskId)=>{
        const url = urlSchema.Tasks.DELETE_TASK.replace(':id',taskId);
        try{

            const result = await axios.delete(url);
            console.log(result);
            
            if(result){
                
            }

        }catch(error){
            console.log("error occured while deleting the task");
        }
        

    }
    return deleteTask;
}

export default useDeleteTask;