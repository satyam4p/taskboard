import React, { useState, useEffect } from 'react';
import { Tag } from 'antd';
import DrawerLoader from './loader/DrawerLoader';
import { useDispatch, useSelector } from "react-redux";
import { Input } from 'antd';
import debounce from '../../helpers/commonUtils/debounce';
import shortId from 'shortid';
/** custom style */
import './stylesheet.scss';
import { selectDrawerDetails, selectDrawerError, selectDrawerStatus } from '../../features/Drawer/drawerSlice';
import iconsMap from '../IconsMapper/IconsMap';

const {Search} = Input;
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
    const titles = drawerDetails && drawerDetails.length ? drawerDetails.map(detail=>detail.name) : [];
    const [tasks, setTasks] = useState([]);
    useEffect(()=>{

        if(drawerDetails && drawerDetails.length){
            setTasks(drawerDetails);
        }

    },[drawerDetails])

    const handleSearch =(value)=>{

        const search = value;
        const trimValue = search.trim();
        if(trimValue.length < 1){
            setTasks(drawerDetails);
            return;
        }else{
            if(titles && titles.length){
                let searchedResult = drawerDetails.filter(task=>{
                    const name = task?.name.toLowerCase();
                    if(name.includes(search.toLowerCase())){
                        return task;
                    }
                });
                setTasks(searchedResult);
            }
        }    

    }
    const handleChange =(event)=>{
        const search = event.target.value;
        const trimValue = search.trim();
        if(trimValue.length < 1){
            setTasks(drawerDetails);
            return;
        }else{
            if(titles && titles.length){
                let searchedResult = drawerDetails.filter(task=>{
                    const name = task?.name.toLowerCase();
                    if(name.includes(search.toLowerCase())){
                        return task;
                    }
                });
                setTasks(searchedResult);
            }
        }        
    }

    return(
        <div className={`drawer-container ${showDrawer ? 'show' : 'hide'}`}>
            <div className='search-container'>
                <Search 
                    className='antd-search' 
                    placeholder='Search recent task'
                    onChange={debounce(handleChange, 400)}    
                    onSearch = { handleSearch }
                />
            </div>
            {drawerStatus === 'succeeded' ? 
                tasks && tasks.length ? tasks.map((data,key)=>{
                    return <Record key={shortId.generate()} status={data?.status} title = {data?.name}/>
                })
                :
                <span className='no-result'> No Results found</span>
            : <DrawerLoader/>
        }
        </div>
    )
}

export default AddDrawer;