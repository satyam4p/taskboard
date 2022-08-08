import React from 'react';
import './stylesheet.scss';
import { Card as AntCard } from 'antd';

const style={
    'width': '80%',
    'height': '100px',
    'border':'1px solid black',
    'padding':'10px',
    'margin':'10px'

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