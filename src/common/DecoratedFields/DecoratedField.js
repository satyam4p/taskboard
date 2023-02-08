/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import iconsMap from "../IconsMapper/IconsMap";

const DecoratedFieldHOC = ( props ) =>{

    const ResultantField = props.field;

    return(
        <div
            sx = {{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                margin:'4px',
            }}>
                <div sx={{
                    width:'20%',
                    display:'flex',
                    alignItems:'center'
                }}>
                    {iconsMap[props.icon] ? iconsMap[props.icon]() : null}&nbsp;&nbsp;
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
                        <ResultantField config = {props.config} options={props.options} editEnabled = {props.editEnabled}/>
                    </div>
                    
                </div>
        </div>
    )
}

export default DecoratedFieldHOC;
