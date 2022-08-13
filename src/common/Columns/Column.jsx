import React from 'react';
import { Col } from 'antd';
import { useState } from 'react';
import Card from '../Card/Card';
import './stylesheet.scss';
import useStatusTask from '../../helpers/hooks/useStatusTask';
import Header from './Header/Header';


const Column= ({collapse, colType, sampleTask}) =>{
    const [ tataskAsPerStatus ] = useStatusTask(sampleTask, colType);
    return(
        <>
        <Col className={`col-container col-collapse-${collapse}`}>
            <Header colType={colType} />
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