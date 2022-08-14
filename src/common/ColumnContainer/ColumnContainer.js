import React, { useState } from 'react';
import { Row } from 'antd';
import Column from '../Columns/Column';
import './stylesheet.scss';
import ToggleTrigger from '../toggleTrigger/ToggleTrigger';

const sampleTask = [
    {   
        taskID:1,
        name:'complete side project',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        status:'New',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },
    {   
        taskID:2,
        name:'complete side project',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        status:'Active',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },
    {   
        taskID:3,
        name:'complete side project',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        status:'Complete',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },
    {   
        taskID:4,
        name:'complete side project',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        status:'Complete',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },{   
        taskID:5,
        name:'complete side project',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        status:'In Progress',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },{   
        taskID:6,
        name:'complete side project',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        status:'In Progress',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },{   
        taskID:7,
        name:'complete side project',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        status:'Complete',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },{   
        taskID:8,
        name:'complete side project ',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        status:'Active',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },
]

const ColumnContainer = (props) =>{
    
    const [ collapse, setCollapse ] = useState(false);
    const colTypes = ['Active','In Progress', 'Complete', 'New'];
    return(
        <div className={`column-container toggle-${collapse}`}>
            <ToggleTrigger
                collapse={collapse}
                setCollapse={setCollapse}
                user = "Satyam Kumar"
                />
            {colTypes ? 
                colTypes.map((colType, key)=>{
                    return <Column key={key} collapse={collapse} colType={colType} sampleTask = { sampleTask }/>
                }) : null
            }
        </div>
    )



}

export default ColumnContainer;