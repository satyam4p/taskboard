import { useState } from "react";
import { useDispatch } from "react-redux";
import useAxiosPrivate from "./useAxiosPrivate";
import urlSchema from '../../network/urlSchema/urlSchema.json';
import { fetchTaskCommentsBegin, fetchTaskCommentsSuccess, fetchTaskCommentsError } from "../../features/task/taskSlice";


const useGetComments =()=>{
    
    const [fetching, setLoading] = useState(false);

    const dispatch = useDispatch();
    const axios = useAxiosPrivate();

    const getComments = async (taskId)=>{
        try{
            dispatch(fetchTaskCommentsBegin());
            setLoading(true)
            const URL = urlSchema.Commnets.GET_ALL_TASK_COMMENTS.replace(':id',taskId);
            const result = await axios.get(URL);
            if(result && result.data){
                dispatch(fetchTaskCommentsSuccess(result.data));
                setLoading(false);
            }else{
                dispatch(fetchTaskCommentsError("an error occured while fetching the comments"));
                setLoading(false);
                console.log("an error occured while fetching the comments");
            }

        }catch(error){
            dispatch(fetchTaskCommentsError(error));
            setLoading(false);
            console.log("an error occured while fetching the comments",error);
        }
    
    }
    return [fetching, getComments];

}

export default useGetComments;