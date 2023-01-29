import { useState } from "react";
import useAxiosPrivate from "./useAxiosPrivate"
import urlSchema from '../../network/urlSchema/urlSchema.json';
import { useSelector, useDispatch } from "react-redux";
import { postCommentBegin, postCommentSuccess, postCommentError } from "../../features/task/taskSlice";



const useComments =()=>{

    const [ loading, setLoading ] = useState(false);

    const dispatch = useDispatch();
    const axios = useAxiosPrivate();


    const post = async ( payload ) => {
    
        const URL = urlSchema.Commnets.POST_COMMENT;
        try{
            setLoading(true);
            dispatch(postCommentBegin);
            const result = await axios.post(URL, payload);
            if(result && result.data){
                setLoading(false);
                dispatch(postCommentSuccess(result.data));
                /** @Todo dispath the post success action and also update the current task with same commnet */ 
            }
        }catch(error){
            setLoading(false);
            dispatch(postCommentError(error));
            console.log("an error occured while posting comment: ",error);
        }
        
    }

    const deleteComment = async () => {

    }

    const edit = async () => {

    }
    return [loading, post, deleteComment, edit];
}

export default useComments;