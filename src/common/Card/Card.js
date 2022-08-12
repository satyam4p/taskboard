import React from 'react';
import './stylesheet.scss';
import { Card as AntCard } from 'antd';

const style={
    'width': '200px',
    'min-height': '100px',
    'border':'1px solid black',
    'padding':'10px',
    'margin-bottom':'10px',

}

const Card=(props)=>{

    return(
        <AntCard
            title={ props.task.name}
            style={style}
        />
    )
}

export default Card;