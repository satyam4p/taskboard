/** @jsxImportSource theme-ui */
import React from "react";
import DecoratedFieldHOC from "../DecoratedFields/DecoratedField";
import fieldMaster from "./FieldMaster";

const FieldMapper = (props) =>{

    //need to have logic for provideing if we need to render raw or decorated field
    const requireDecoratedFields = true;

    const resultantField = fieldMaster[props.field];
    const label = props.label;
    if(requireDecoratedFields){
        return(
                <div sx={{
                    width:'100%'
                }}>
                    <DecoratedFieldHOC 
                        label = {label}
                        field = {resultantField}
                        icon = {props.icon}
                        options = {props.options}
                    />
                </div>
            )
    }
    return(
        <div>

        </div>
    )

}

export default FieldMapper;