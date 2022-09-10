import React, { useEffect, useState } from 'react';
import { Row } from 'antd';
import Column from '../Columns/Column';
import './stylesheet.scss';
import ToggleTrigger from '../toggleTrigger/ToggleTrigger';
import useStatusTask from '../../helpers/hooks/useStatusTask';
import { cloneDeep, findIndex, isEqual } from 'lodash';

const ColumnContainer = (_props) =>{
    
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

    const handleTaskChange = (id, fromColType, toColType)=>{
        let taskListCP = cloneDeep(taskList);
        let task = taskListCP[fromColType].filter(task=>{
            if(task.id == id){
                return {...task};
               }
        });
        const colTypeOfTask = task[0]['status'];
        const toModifyArr = taskListCP[colTypeOfTask];
        task[0].status = toColType;
        const index = findIndex(toModifyArr,(task)=>task.id == id);
        /** logic to remove the task from previous column and add the task to new column and update state */
        toModifyArr.splice(index,1);
        taskListCP[toColType].push(task[0]);
        setTaskList((prevTaskList)=>{
                if(!isEqual(prevTaskList, taskListCP)){
                    return {...taskListCP};
                }
        })
    }

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