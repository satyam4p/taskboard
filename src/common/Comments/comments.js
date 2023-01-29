/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Card, Container } from "theme-ui";
import iconsMap from "../IconsMapper/IconsMap";
import shortid from "shortid";
import TextAreaField from "../Fields/TextArea/TextArea";
import useAuth from "../../helpers/hooks/useAuth";
import { selectComments, selectCurrentTask, selectCurrentTaskStatus, selectCommentStatus } from "../../features/task/taskSlice";
import { useSelector } from "react-redux";
import CommentActions from "./CommentActions/CommentsAction";
import moment from "moment";

const Comments =(props)=>{

    const currentTask = useSelector(selectCurrentTask);
    const currentTaskStatus = useSelector(selectCurrentTaskStatus);
    const commentStatus = useSelector(selectCommentStatus);
    let comments = [...useSelector(selectComments)];

    /**check if the task is cerated if yes then allow adding comments */
    const isEditable = currentTask && currentTask?._id && props.editEnabled;
    const { auth } = useAuth();
    const shouldClear = commentStatus == 'succeeded' ? true : false;

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
                    <TextAreaField 
                        editEnabled = {isEditable}  
                        entityKey = "userComment"
                        shouldClear = {shouldClear}
                    />
                <CommentActions />
            </Card>
            {comments && comments.length ? comments.reverse().map((comment, key)=>{
                // console.log(moment(comment?.postedAt,"hh:mm:ss" ).toString());
                const postedAt = moment(comment?.postedAt,"hh:mm:ss" ).fromNow();
                return (
                    <Card key={shortid.generate()} sx={{
                        paddingY:'5px',
                    }}>
                    <div sx={{
                        marginY:'5px'
                    }}>
                        <span style={{fontSize:'14px', fontWeight:'500'}}>{iconsMap.profile()} {comment.user?.username}   </span>
                        <span style={{fontSize:'12px'}}>{postedAt}</span>
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