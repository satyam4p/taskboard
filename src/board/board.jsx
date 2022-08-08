import React from 'react';
import { useState } from 'react';
import Column from '../common/Columns/Column';


const style={
    'width': '100%',
    'max-height': '95vh',
    'overflow-y':'auto',
    'border':'1px solid black',
    'background': 'lightblue'

}
export default function Board(props){

    const [colCount, setColCount] = useState();

    return(
        <div style={style}>
            <Column />
        </div>
    )
}