import React, { useState } from 'react';
import { useReducer } from 'react';
import Tables from './templates/Tables';
import Column from 'antd/lib/table/Column';

const BoardLayout = ()=>{

    const [layout, setLayout] = useState();
    
    return(
        <div className='board-layout'>

        </div>
    )

}

export default BoardLayout;