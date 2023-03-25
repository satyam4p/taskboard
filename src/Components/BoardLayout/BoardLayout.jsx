import React, { useState } from 'react';
import Tables from './templates/Tables/Tables';
import Column from 'antd/lib/table/Column';
import './stylesheet.scss';
import BoardActions from './BoardActions/BoardActions';
import composedTableLayout from './WithLayout/WithTable/WithTableLayout';

const BoardLayout = (props)=>{

    const [layout, setLayout] = useState();
    const { boardTasks } = props;
    console.log("boardTasks:: ",boardTasks);
    return(
        <div className='board-layout'>
            <BoardActions/>    
        </div>
    )

}



export default composedTableLayout(BoardLayout);