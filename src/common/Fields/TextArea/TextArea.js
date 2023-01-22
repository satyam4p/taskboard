import React from "react";
import { Textarea } from "theme-ui";
import './stylesheet.scss';


const TextArea =(props)=>{

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
        disabled={!props.editEnabled}
        />
    )
}

export default TextArea;