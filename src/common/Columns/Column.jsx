import React from 'react';
import { Col } from 'antd';
import { useState } from 'react';
import Card from '../Card/Card';
import './stylesheet.scss';
import useStatusTask from '../../helpers/hooks/useStatusTask';
import Header from './Header/Header';
import { useEffect } from 'react';


const Column= ({collapse, colType, sampleTask}) =>{
    const [ tataskAsPerStatus, getTaskAsperStatus ] = useStatusTask(sampleTask, colType);

    useEffect(()=>{
        getTaskAsperStatus();
    },[]);

    const handleDropEvent=(ev)=>{
        let id = ev.dataTransfer.getData('taskID');
        /**logic to update the task status and update the taskAsPerstatus again */
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
            {tataskAsPerStatus.map((task, key)=>{
                return(
                    <Card key = {key} task = { task }/>
                )
            })}
        </Col>
        </>
    )

}

export default Column;