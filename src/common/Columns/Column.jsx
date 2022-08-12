import React from 'react';
import { Col } from 'antd';
import { useState } from 'react';
import Card from '../Card/Card';
import './stylesheet.scss';

const sampleTask = [
    {   
        name:'complete side project aosuidhajksdb asodiajkashd; asljdh;als lasnd pasjnd pakjsd lkjhasd aojklsdna a;sdnalmsnaslnas asldkna asdhlaksnd',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        currentStatus:' Ongoing',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },
    {   
        name:'complete side project',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        currentStatus:' Ongoing',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },
    {   
        name:'complete side project',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        currentStatus:' Ongoing',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },{   
        name:'complete side project',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        currentStatus:' Ongoing',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },{   
        name:'complete side project',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        currentStatus:' Ongoing',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },{   
        name:'complete side project',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        currentStatus:' Ongoing',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },{   
        name:'complete side project',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        currentStatus:' Ongoing',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },{   
        name:'complete side project ',
        InitialDate:'12 May, 2022',
        finalDate: '12 Dec, 2022',
        owner: 'Satyam Kumar',
        currentStatus:' Ongoing',
        description: ' Basic structure of the task board is ready, making changes for the resusable components'
    },
]

const Column= ({collapse}) =>{
    return(
        <Col className={`col-container col-collapse-${collapse}`}>
            {sampleTask.map((task, key)=>{
                return(
                    <Card key = {key} task = { task }/>
                )
            })}
        </Col>
        
    )

}

export default Column;