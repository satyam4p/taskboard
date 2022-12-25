/** @jsxImportSource theme-ui */
import React, { useState } from "react";


const DecoratedFieldHOC = ( props ) =>{

    const ResultantField = props.field;

    return(
        <div
            sx = {{
                display:'flex',
                flexDirection:'row',
                alignItems:'center'
            }}>
            {props.icon}
            <div sx = {{
                width:'44%',
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                height:'24px',
                alignItems:'center'
            }}>
                <p>{props.label}</p>
                <ResultantField />
            </div>
        </div>
    )
}

export default DecoratedFieldHOC;
