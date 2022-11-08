/** @jsxImportSource theme-ui */
import React,{useEffect, useState} from "react";
import useModals from "../../../helpers/hooks/useModals";
import { Box, Container, Flex, Input, Label, Text } from "theme-ui";
import iconsMap from "../../Icons/iconsMap";

const TaskModal=(props)=>{
    const { modalType, setModalType } = useModals();
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
                boxShadow: '7px 10px 38px -18px rgba(0,0,0,0.75)'
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
                </Box>
            </div>
        )
    } 
}
export default TaskModal;