import React, { useState } from 'react';
import Tables from './templates/Tables/Tables';
import Column from 'antd/lib/table/Column';
import './stylesheet.scss';
import BoardActions from './BoardActions/BoardActions';

const BoardLayout = ()=>{

    const [layout, setLayout] = useState();
    
    return(
        <div className='board-layout'>
            <BoardActions/>    
            <WithLayout/>
        </div>
    )

}

export default BoardLayout;