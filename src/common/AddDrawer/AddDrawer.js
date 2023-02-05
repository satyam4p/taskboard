import React, { useState, useEffect } from 'react';
import { Tag } from 'antd';
import DrawerLoader from './loader/DrawerLoader';
import { useDispatch, useSelector } from "react-redux";
import { Input } from 'antd';
/** custom style */
import './stylesheet.scss';
import { selectDrawerDetails, selectDrawerError, selectDrawerStatus } from '../../features/Drawer/drawerSlice';
import iconsMap from '../IconsMapper/IconsMap';


const Record = ({title, status})=>{

    return(
        <div className='record-Container'>
            <Tag className='status-contaienr'>{status}</Tag>
            <span className='title-container'>{title}</span>
        </div>
    ) 

}

const AddDrawer = ({showDrawer, config})=>{

    const drawerStatus = useSelector(selectDrawerStatus);
    const drawerDetails = useSelector(selectDrawerDetails);
    const drawerError = useSelector(selectDrawerError);

    return(
        <div className={`drawer-container ${showDrawer ? 'show' : 'hide'}`}>
            <div className='search-container'>
                <Input className='antd-search' placeholder='Search recent task'/>
            </div>
            {drawerStatus === 'succeeded' ? 
                drawerDetails.map((data,key)=>{
                    return <Record status={data?.status} title = {data?.name}/>
                })
            : <DrawerLoader/>
        }
            
        </div>
    )
}

export default AddDrawer;