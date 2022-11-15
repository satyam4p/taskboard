/** @jsxImportSource theme-ui */
import React from "react";
import { Card, Container } from "theme-ui";
import { UserOutlined } from '@ant-design/icons';
import shortid from "shortid";

const sampleComments = [
    {
        'userName':'Satyam Kumar',
        'commentBody':"Hi, this ticket is currently unders progress and estimated time is around 12 hours. Let me know if this has any upcoming changes will look into them accordingly."
    },
    {
        'userName':'testUser',
        'commentBody':"Hi, this ticket is currently unders progress and estimated time is around 12 hours. Let me know if this has any upcoming changes will look into them accordingly."
    }
]

const Comments =(props)=>{

    return(
        <Container sx={{
            marginY:'8px'
        }}>
            {sampleComments.map((comment, key)=>{
                return (
                    <Card key={shortid.generate()} sx={{
                        marginY:'8px',
                        paddingY:'5px',
                    }}>
                    <div sx={{
                        marginY:'5px'
                    }}>
                        <span><UserOutlined/> {comment.userName}</span>
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