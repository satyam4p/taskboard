import React from 'react';
import './stylesheet.scss';
import { Card as AntCard } from 'antd';

const style={
    'width': '180px',
    'min-height': '100px',
    'border':'1px solid black',
    'padding':'10px',
    'margin-bottom':'10px',

}

const Card=(props)=>{
    return(
        <AntCard
            draggable={true}
            title={ props.task.name}
            style={style}
            onDragStart={e=>{
                e.dataTransfer.setData("taskID", props.task.id);
                e.dataTransfer.setData("fromCol", props.task.status);
            }}
            onDragOver={e=>e.preventDefault}

        />
    )
}

export default Card;