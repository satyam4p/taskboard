/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Card, Container } from "theme-ui";
import iconsMap from "../IconsMapper/IconsMap";
import shortid from "shortid";
import TextAreaField from "../Fields/TextArea/TextArea";
import useAuth from "../../helpers/hooks/useAuth";
import { selectCurrentTask, selectCurrentTaskStatus } from "../../features/task/taskSlice";
import { useSelector } from "react-redux";
import CommentActions from "./CommentActions/CommentsAction";


const sampleComments = [
    // {
    //     'userName':'Satyam Kumar',
    //     'commentBody':"Hi, this ticket is currently unders progress and estimated time is around 12 hours. Let me know if this has any upcoming changes will look into them accordingly."
    // },
    // {
    //     'userName':'testUser',
    //     'commentBody':"Hi, this ticket is currently unders progress and estimated time is around 12 hours. Let me know if this has any upcoming changes will look into them accordingly."
    // }
]

const Comments =(props)=>{

    const currentTask = useSelector(selectCurrentTask);
    const currentTaskStatus = useSelector(selectCurrentTaskStatus);
    /**check if the task is cerated if yes then allow adding comments */
    const isEditable = currentTask && currentTask?._id && props.editEnabled;
    
    const { auth } = useAuth();

    return(
        <Container sx={{
            marginY:'8px',
            fontSize:1
        }}>
            <Card key={shortid.generate()} sx={{
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
                    />
                <CommentActions/>
            </Card>
            {sampleComments.map((comment, key)=>{
                return (
                    <Card key={shortid.generate()} sx={{
                        marginY:'8px',
                        paddingY:'5px',
                    }}>
                    <div sx={{
                        marginY:'5px'
                    }}>
                        <span>{iconsMap.profile()} {comment.userName}</span>
                    </div>
                    <div>
                        {comment.commentBody}
                    </div>
                </Card>
                )
            })} 
        </Container>
    )
}

export default Comments;