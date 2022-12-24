/** @jsxImportSource theme-ui */
import React, { useState } from "react";


const DecoratedFieldHOC = ( props ) =>{

    const ResultantField = props.field;

    return(
        <div
        sx = {{
            width:'20%',
            width:'100%',
            bg:'green'
        }}>
            <ResultantField />
        </div>
    )
}

export default DecoratedFieldHOC;
