import React, { useEffect, useState }  from 'react';
import { cloneDeep, sample }  from 'lodash';
import { Col } from 'antd';
import Card from '../Card/Card';
import './stylesheet.scss';
import useStatusTask from '../../helpers/hooks/useStatusTask';
import Header from './Header/Header';
import isObjArrayEqual from '../../helpers/HOF/isObjArrEquals';


const Column= ({collapse, colType, sampleTask, handleTaskChange}) =>{
    const [tasks, setTasks] = useState(sampleTask);
    // console.log("sample task:: ",sampleTask);
    const handleDropEvent=(ev)=>{
        let id = ev.dataTransfer.getData('taskID');

        handleTaskChange(id, colType);
        /**logic to update the task status and update the taskAsPerstatus again */
        /** need to change the logic for updateing the sampleTask as
         *  when we re-render the sample task is same as before even after making modified task list */
    }

    /** need to create the loading skeleton as well */
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
            {sampleTask && sampleTask.map((task, key)=>{
                return(
                    <Card key = {key+task.taskID} task = { task }/>
                )
            })}
        </Col>
        </>
    )

}

export default Column;