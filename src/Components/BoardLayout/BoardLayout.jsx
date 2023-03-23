import React, { useState } from 'react';
import Tables from './templates/Tables/Tables';
import Column from 'antd/lib/table/Column';
import './stylesheet.scss';
import BoardActions from './BoardActions/BoardActions';
import WithLayoutHOC from './WithLayout/WithLayoutHOC';

const BoardLayout = ()=>{

    const [layout, setLayout] = useState();
    
    return(
        <div className='board-layout'>
            <BoardActions/>    
            <WithLayoutHOC/>
        </div>
    )

}

export default BoardLayout;