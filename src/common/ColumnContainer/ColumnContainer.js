import React, { useState } from 'react';
import { Row } from 'antd';
import Column from '../Columns/Column';
import './stylesheet.scss';
import ToggleTrigger from '../toggleTrigger/ToggleTrigger';

const ColumnContainer = (props) =>{
    const [ collapse, setCollapse ] = useState(false);

    return(
        <div className={`column-container toggle-${collapse}`}>
                <ToggleTrigger
                    collapse={collapse}
                    setCollapse={setCollapse}
                />
            <Column collapse={collapse}/>
            <Column collapse={collapse}/>
            <Column collapse={collapse}/>
            <Column collapse={collapse}/>
            <Column collapse={collapse}/>
            <Column collapse={collapse}/>
            <Column collapse={collapse}/>
            
            
        </div>
    )



}

export default ColumnContainer;