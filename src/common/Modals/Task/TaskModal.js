/** @jsxImportSource theme-ui */
import React,{useEffect, useState} from "react";
import useModals from "../../../helpers/hooks/useModals";
import { Box, Container } from "theme-ui";


const TaskModal=(props)=>{

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
            

        </div>
    )

}
export default TaskModal;