import React, { useState } from 'react';
import Tables from './templates/Tables/Tables';
import Column from 'antd/lib/table/Column';
import './stylesheet.scss';

const BoardLayout = ()=>{

    const [layout, setLayout] = useState();
    
    return(
        <div className='board-layout'>

        </div>
    )

}

export default BoardLayout;