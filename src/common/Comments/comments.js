/** @jsxImportSource theme-ui */
import React, { useEffect, useState, useContext, useCallback } from "react";
import { Card, Container } from "theme-ui";
import iconsMap from "../IconsMapper/IconsMap";
import shortid from "shortid";
// import TextAreaField from "../Fields/TextArea/TextArea";
import useAuth from "../../helpers/hooks/useAuth";
import { selectComments, selectCurrentTask, selectCurrentTaskStatus, selectCommentStatus } from "../../features/task/taskSlice";
import { useSelector } from "react-redux";
import CommentActions from "./CommentActions/CommentsAction";
import moment from "moment";
import TextArea from "antd/lib/input/TextArea";
import useComments from "../../helpers/hooks/useComments";
import TaskContext from "../Modals/Task/TaskContext/TaskProvider";
import debounce from '../../helpers/commonUtils/debounce';


const Comments =(props)=>{
    const [value, setValue] = useState();
    const currentTaskStatus = useSelector(selectCurrentTaskStatus);
    const commentStatus = useSelector(selectCommentStatus);
    const [loading, post, deleteComment, edit] = useComments();
    const entityKey = "userComment";
    const { auth } = useAuth();
    const {task, setTask} = useContext(TaskContext);
    const currentTask = useSelector(selectCurrentTask);
    
    let comments = [...useSelector(selectComments)];
    const getFilteredComments =()=>{
        let filteredComments = [];
        if(currentTask && currentTask?._id){
            filteredComments = comments.filter(comment => comment?.taskId === currentTask?._id);
        }
        return filteredComments;
    }
    let filteredComments = getFilteredComments();
    console.log("filteredComments:: ",filteredComments);
    

    /**check if the task is cerated if yes then allow adding comments */
    const isEditable = currentTask && currentTask?._id;

    useEffect(()=>{
        updateParent(value)
    }, [value, setValue]);

    const updateParent = useCallback(
        debounce( value =>{
            setTask( prevTask => {
                if(entityKey){
                    return {
                        ...prevTask,
                        [entityKey]: value
                    }
                }
            })
        }, 200), []);

    const handleChange = (e)=>{
        e.preventDefault();
        let value = e.target.value
        setValue(value);
    }

    const isActionEnabled = value && value.trim() && value.length > 0 ? true : false;

    return(
        <Container sx={{
            marginY:'5px',
            fontSize:1
        }}>
            <Card sx={{
                        marginY:'8px',
                        paddingY:'5px',
                    }}>
                <div sx={{
                    marginY:'5px'
                }}>
                    <span style={{textTransform:'capitalize'}}>{iconsMap.profile()} {auth?.user?.username}</span>
                </div>
                    <TextArea 
                        disabled = {!isEditable}  
                        className="text-area-container"
                        value = {value}
                        onChange = {e=>handleChange(e)}
                    />
                <CommentActions setValue = {setValue} actionsEnabled = {isActionEnabled}/>
            </Card>
            {filteredComments && filteredComments.length ? filteredComments.reverse().map((comment, key) => {
                let localTime  = moment(comment?.postedAt).fromNow();
                return (
                    <Card key={shortid.generate()} sx={{
                        paddingY:'5px',
                    }}>
                    <div sx={{
                        marginY:'5px'
                    }}>
                        <span style={{fontSize:'14px', fontWeight:'500', textTransform: 'capitalize'}}>{iconsMap.profile()} {comment.user?.username}   </span>
                        <span style={{fontSize:'12px'}}>{localTime}</span>
                    </div>
                    <div style={{padding:'5px'}}>
                        {comment.body}
                    </div>
                </Card>
                )
            }) : null } 
        </Container>
    )
}

export default Comments;