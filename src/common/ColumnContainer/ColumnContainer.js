import React, { useEffect, useState } from 'react';
import { Row } from 'antd';
import Column from '../Columns/Column';
import './stylesheet.scss';
import ToggleTrigger from '../toggleTrigger/ToggleTrigger';
import useStatusTask from '../../helpers/hooks/useStatusTask';
import { cloneDeep, findIndex, isEqual } from 'lodash';

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
    {
        taskID:10,
        name:'ticket 10',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        status:'Unassigned',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },
    {
        taskID:11,
        name:'ticket 11',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        status:'Rejected',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    }
]

const ColumnContainer = (props) =>{
    
    const [ collapse, setCollapse ] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const colTypes = ['Active','In Progress', 'Complete', 'New'];

    const [ taskAsPerStatus, getTaskAsperStatus ] = useStatusTask();

    useEffect(()=>{
        fetch('http://localhost:9000/tasks').then(response=>{
            response.json().then(response=>{
                for(let i=0; i < colTypes.length; i++){
                    const colType = colTypes[i];
                    const tasks = getTaskAsperStatus(response,colType);
                    setTaskList(prev=>{
                        return {
                                ...prev,
                                [colType]: [...tasks]
                            }
                    })
                }      
            })
        }).catch(error=>{
            console.log("error:: ",error);
        })

    },[])

    const handleTaskChange = (id, colType)=>{
        let taskListCP = cloneDeep(taskList);
        
        let task = sampleTask.filter(task=>{
           if(task.taskID == id){
            return {...task};
           }
        });
        const colTypeOfTask = task[0]['status'];
        const toModifyArr = taskListCP[colTypeOfTask];
        task[0].status = colType;
        const index = findIndex(toModifyArr,(task)=>task.taskID == id);
        /** logic to remove the task from previous column and add the task to new column and update state */
        toModifyArr.splice(index,1);
        taskListCP[colType].push(task[0]);
        setTaskList((prevTaskList)=>{
                if(!isEqual(prevTaskList, taskListCP)){
                    return {...taskListCP};
                }
        })
    }
    // useEffect(()=>{
        
    // },[]);
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