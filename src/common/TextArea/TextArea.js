import React from "react";
import { Textarea } from "theme-ui";



const TextArea =()=>{

    return(
        <Textarea sx={{
            border:'0.5px solid',
            resize:'vertical',
            marginX:'0px',
            fontFamily:'monospace',
            fontSize:1,
            height:'80px'
        }}/>
    )
}

export default TextArea;