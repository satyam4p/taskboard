import React from "react";
import { Tag } from "antd";

const LabelField = (props)=>{
    return(
        <Tag color={props.options.color} icon={props?.icon}>
            {props.options.value}
        </Tag>
    )
}

export default LabelField;