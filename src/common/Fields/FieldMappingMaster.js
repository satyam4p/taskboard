import React from "react";
import DecoratedFieldHOC from "../DecoratedFields/DecoratedField";
import fieldMaster from "./FieldMaster";

const FieldMapper = (props) =>{

    //need to have logic for provideing if we need to render raw or decorated field
    const requireDecoratedFields = true;
    // const resultantField = fieldMaster[props.field];
    const resultantField = fieldMaster['date'];
    if(requireDecoratedFields){
        return(
            <div>
                <DecoratedFieldHOC 
                    field = {resultantField}
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