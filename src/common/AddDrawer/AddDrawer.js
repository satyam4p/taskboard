import React, { useState, useEffect } from 'react';

import DrawerLoader from './loader/DrawerLoader';
import { useDispatch, useSelector } from "react-redux";
/** custom style */
import './stylesheet.scss';
import { selectDrawerDetails, selectDrawerError, selectDrawerStatus } from '../../features/Drawer/drawerSlice';

const AddDrawer = ({showDrawer, config})=>{

    const drawerStatus = useSelector(selectDrawerStatus);
    const drawerDetails = useSelector(selectDrawerDetails);
    const drawerError = useSelector(selectDrawerError);

    

    return(
        <div className={`drawer-container ${showDrawer ? 'show' : 'hide'}`}>
            {drawerStatus === 'succeeded' ? 
                drawerDetails.map((data,key)=>{
                    return <p key = {key}>{data.name}</p>
                })
            :<DrawerLoader/>
        }
            
        </div>
    )
}

export default AddDrawer;