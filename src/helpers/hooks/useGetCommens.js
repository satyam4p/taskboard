import { useState } from "react";
import { useDispatch } from "react-redux";
import useAxiosPrivate from "./useAxiosPrivate";
import urlSchema from '../../network/urlSchema/urlSchema.json';


const useGetComments =()=>{
    
    const [fetching, setLoading] = useState(false);

    const dispatch = useDispatch();
    const axios = useAxiosPrivate();

    const getComments = async (taskId)=>{
        try{
            setLoading(true)
            const URL = urlSchema.Commnets.GET_ALL_TASK_COMMENTS.replace(':id',taskId);
            const result = await axios.get(URL);
            if(result && result.data){
                setLoading(false);
                console.log("result.data:: ", result.data);
            }else{
                setLoading(false);
                console.log("an error occured while fetching the comments");
            }

        }catch(error){
            setLoading(false);
            console.log("an error occured while fetching the comments",error);
        }
    
    }
    return [fetching, getComments];

}

export default useGetComments;