/** @jsxImportSource theme-ui */
import React, { useState } from "react";


const DecoratedFieldHOC = ( props ) =>{

    const ResultantField = props.field;

    return(
        <div
            sx = {{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                margin:'5px',
            }}>
                <div sx={{
                    width:'20%',
                    display:'flex',
                    alignItems:'center'
                }}>
                    {props.icon}&nbsp;&nbsp;
                    <p>{props.label}</p>
                </div>
                <div sx = {{
                    marginLeft:'24px',
                    width:'44%',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    height:'24px',
                    alignItems:'center'
                }}>
                    <div sx={{
                        display:'flex',
                        justifyContent:'left'
                    }}>
                        <ResultantField options={props.options}/>
                    </div>
                    
                </div>
        </div>
    )
}

export default DecoratedFieldHOC;
