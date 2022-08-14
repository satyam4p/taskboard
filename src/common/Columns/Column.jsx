import React, { useEffect, useState }  from 'react';
import { cloneDeep }  from 'lodash';
import { Col } from 'antd';
import Card from '../Card/Card';
import './stylesheet.scss';
import useStatusTask from '../../helpers/hooks/useStatusTask';
import Header from './Header/Header';


const Column= ({collapse, colType, sampleTask}) =>{
    const [ taskAsPerStatus, getTaskAsperStatus ] = useStatusTask(sampleTask, colType);
    const [rederCount, setRenderCounter] = useState(1);

    useEffect(()=>{
        getTaskAsperStatus(sampleTask);
    },[rederCount]);
    console.log("render count:: ",rederCount);
    const handleDropEvent=(ev)=>{
        let id = ev.dataTransfer.getData('taskID');
        // let allTasks = cloneDeep(sampleTask);
        let modifiedTasks = sampleTask.map(task=>{
            if(task.taskID == id){
                return {...task, status:colType};
            }
            return task;
        })
        getTaskAsperStatus(modifiedTasks);
        setRenderCounter((prevCount=>{
            return prevCount+1;
        }));
        /**logic to update the task status and update the taskAsPerstatus again */
        /** need to change the logic for updateing the sampleTask as
         *  when we re-render the sample task is same as before even after making modified task list */
    }
    return(
        <>
        <Col 
        onDragOver={ev=>{
           ev.stopPropagation();
           ev.preventDefault();
        }}
        onDrop={ev=>{
            ev.stopPropagation();
            ev.preventDefault();
            handleDropEvent(ev);
        }}
        className={`col-container col-collapse-${collapse}`}>
            <Header name={colType} level={4} style="default"/>
            {taskAsPerStatus.map((task, key)=>{
                return(
                    <Card key = {key} task = { task }/>
                )
            })}
        </Col>
        </>
    )

}

export default Column;