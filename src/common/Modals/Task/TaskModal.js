/** @jsxImportSource theme-ui */
import React,{useEffect, useState} from "react";
import useModals from "../../../helpers/hooks/useModals";
import { Box, Container, Flex, Input, Label, Text } from "theme-ui";
import iconsMap from "../../Icons/iconsMap";

const TaskModal=(props)=>{
    const { modalType, setModalType } = useModals();

    useEffect(()=>{
    },[]);

    const toggleTab=(event)=>{
        event.preventDefault();
    }

    if(modalType.type === 'task' && modalType.isVisible){
        return(
            <div sx={{
                zIndex:'1000',
                width:'40%',
                height:'80vh',
                position:'absolute',
                top:'50%',
                left:'50%',
                transform:'translate(-50%,-45%)',
                borderRadius:'5px',
                boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.75)',
                overflowY:'auto'
            }}>
                <Box as={'form'}>
                    <div sx={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'end',
                        margin:'15px',
                    }}>
                        <div sx={{
                            margin:'10px',
                            '&:hover':{
                                cursor:'pointer'
                            }
                        }}>
                            {iconsMap.Share()}
                        </div>
                        <div sx={{
                            margin:'10px',
                            '&:hover':{
                                cursor:'pointer'
                            }
                        }}>
                            {iconsMap.Edit()}
                        </div>
                        <div sx={{
                            margin:'10px',
                            '&:hover':{
                                cursor:'pointer'
                            }
                        }}>
                            {iconsMap.More()}
                        </div>
                        <div sx={{
                            margin:'10px',
                            '&:hover':{
                                cursor:'pointer'
                            }
                        }}
                        onClick={()=>setModalType((prev)=>{
                            return {
                                ...prev,
                                isVisible:false
                            }
                        })}
                        >
                            {iconsMap.Close()}
                        </div>
                    </div>
                    <Label htmlFor="title"></Label>
                    <Input sx={{
                        border:'0.5px solid #C4C4C4',
                        padding:'10px',
                        marginX:'10px',
                        width:'90%',
                        margin:'auto',
                        height:'40px',
                    }} name="title" placeholder="Enter Title"/>
                    <Container sx={{
                        width:'85%',
                        marginY:'30px',
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-between',
                        minHeight:'10em'
                    }}>
                        <div sx={{
                            display:'flex',
                            alignItems:'center'
                        }}>
                            {iconsMap.Status()}&nbsp;Status
                        </div>
                        <div sx={{
                            display:'flex',
                            alignItems:'center'
                        }}>
                            {iconsMap.Timeline()}&nbsp;Timeline
                        </div>
                        <div sx={{
                            display:'flex',
                            alignItems:'center'
                        }}>
                            {iconsMap.Assignee()}&nbsp;Assignee
                        </div>
                        <div sx={{
                            display:'flex',
                            alignItems:'center'
                        }}>
                            {iconsMap.Label()}&nbsp;Label
                        </div>
                    </Container>
                    <Container
                        sx={{
                            width:'85%',
                            marginTop:'50px'
                        }}>
                        <div sx={{
                            borderBottom:'0.5px solid',
                            width:'30%',
                            display:'flex',
                            justifyContent:'space-between'
                        }}>
                            <button sx={{
                                border:'none',
                                bg:'transparent',
                                padding:'0px',
                                fontSize:1,
                            }}
                            onClick={toggleTab}
                            >
                                <span>Comments</span>
                            </button>
                            <button sx={{
                                border:'none',
                                bg:'transparent',
                                padding:'0px',
                                fontSize:1
                            }}
                            onClick={toggleTab}
                            >
                                <span>Description</span>
                            </button>
                        </div>
                        <Container className="data-container">
                            /** content for comments and description with come here*/
                        </Container>
                    </Container>
                </Box>
            </div>
        )
    } 
}
export default TaskModal;