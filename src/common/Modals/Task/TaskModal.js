/** @jsxImportSource theme-ui */
import React,{useEffect, useState} from "react";
import useModals from "../../../helpers/hooks/useModals";
import { Box, Container, Flex } from "theme-ui";


const TaskModal=(props)=>{
    const { modalType } = useModals();
    if(modalType.type === 'task' && modalType.isVisible){
        return(
            <div sx={{
                zIndex:'1000',
                width:'40%',
                height:'80vh',
                bg:'rgba(0, 89, 0, 0.5)',
                position:'absolute',
                top:'50%',
                left:'50%',
                transform:'translate(-50%,-45%)',
                borderRadius:'4px',
            }}>
                <Flex sx={{
                    
                }}>

                </Flex>
            </div>
        )
    } 
}
export default TaskModal;