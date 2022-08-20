import React, { useEffect, useState } from 'react';
import { Row } from 'antd';
import Column from '../Columns/Column';
import './stylesheet.scss';
import ToggleTrigger from '../toggleTrigger/ToggleTrigger';
import useStatusTask from '../../helpers/hooks/useStatusTask';
import { cloneDeep } from 'lodash';

let sampleTask = [
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
        name:'ticket 2',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        status:'Active',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },
    {   
        taskID:3,
        name:'ticket 3',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        status:'Complete',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },
    {   
        taskID:4,
        name:'ticket 4',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        status:'Complete',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },{   
        taskID:5,
        name:'ticket 5',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        status:'In Progress',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },{   
        taskID:6,
        name:'ticket 6',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        status:'In Progress',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },{   
        taskID:7,
        name:'ticket 7',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        status:'Complete',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },{   
        taskID:8,
        name:'ticket 8',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        status:'Active',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },
]

const ColumnContainer = (props) =>{
    
    const [ collapse, setCollapse ] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const colTypes = ['Active','In Progress', 'Complete', 'New'];

    const [ taskAsPerStatus, getTaskAsperStatus ] = useStatusTask();

    const handleTaskChange = (id, colType)=>{
        let taskListCP = cloneDeep(taskList);
        
        let task = sampleTask.filter(task=>{
           if(task.taskID == id){
            return task;
           }
        });
        const colTypeOfTask = task[0]['status'];
        const toModifyArr = taskListCP[colTypeOfTask];
        /** logic to remove the task from previous column and add the task to new column and update state */
        console.log("colTypeOfTask type:: ",colTypeOfTask);
        taskListCP[colType].push(task);
        
        console.log("taskListCP:: ",taskListCP);
    }

    useEffect(()=>{
        for(let i=0; i < colTypes.length; i++){
            // debugger;
            const colType = colTypes[i];
            const tasks = getTaskAsperStatus(sampleTask,colType);
            // console.log("tasks returned:: ",tasks);
            setTaskList(prev=>{
                return {
                        ...prev,
                        [colType]: [...tasks]
                    }
            })
        }
    },[]);
    // console.log("tasklist:: ",taskList);
    return(
        <div className={`column-container toggle-${collapse}`}>
            <ToggleTrigger
                collapse={collapse}
                setCollapse={setCollapse}
                user = "Satyam Kumar"
                />
            {colTypes ? 
                colTypes.map((colType, key)=>{
                    return <Column 
                                key={key} 
                                collapse={collapse} 
                                colType={colType} 
                                sampleTask = { taskList[colType] }
                                handleTaskChange = {handleTaskChange}
                                />
                }) : null
            }
        </div>
    )



}

export default ColumnContainer;