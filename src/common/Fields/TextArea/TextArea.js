import React from "react";
import { Textarea } from "theme-ui";
import './stylesheet.scss';
import { useSelector } from "react-redux";
import { selectCurrentTask, selectCurrentTaskStatus } from "../../../features/task/taskSlice";

const TextArea =(props)=>{
    const currentTask = useSelector(selectCurrentTask);
    const currentTaskStatus = useSelector(selectCurrentTaskStatus);
    return(
        <Textarea sx={{
            border:'0.5px solid #DEDEDE',
            resize:'vertical',
            marginX:'0px',
            fontFamily:'monospace',
            fontSize:1,
            height:'80px'
        }}
        className="text-area-container"
        disabled={!props.editEnabled }
        />
    )
}

export default TextArea;