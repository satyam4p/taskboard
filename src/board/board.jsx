import React from 'react';
import { useState } from 'react';
import ColumnContainer from '../common/ColumnContainer/ColumnContainer';

const style={
    'width': '100%',
    'maxHeight': '95vh',
    'overflow':'auto',
    'border':'1px solid black',
    'background': 'lightblue',
    'padding':'20px',
}
export default function Board(props){

    const [colCount, setColCount] = useState();
    const [colTypes, setColType] = useState();
    return(
        <div style={style}>
            <ColumnContainer/>
            {/* <ColumnContainer/> */}
            {/* <ColumnContainer/>  */}
        </div>
    )
}