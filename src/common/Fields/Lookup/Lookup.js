
import { cloneDeep, debounce } from 'lodash';
import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Select, Box } from 'theme-ui';
import TaskContext from '../../Modals/Task/TaskContext/TaskProvider';
import './stylesheet.scss';
import useAxiosPrivate from '../../../helpers/hooks/useAxiosPrivate';
import urlSchema from '../../../network/urlSchema/urlSchema.json';

//this array will be obtained from the api call or prop



const LookupField = (props) => {
    const [options, setOptions] = useState([]);
    const {task, setTask} = useContext(TaskContext);
    const [value, setValue] = useState();
    const axiosPrivate = useAxiosPrivate();


    const handleChange = (e) =>{
      e.preventDefault()
      const value = e.target.value;
      console.log("selected value:: ",value);
      setValue(value);
    }
    const handleClick= async ()=>{
      if(options.length > 0){
        return;
      }
      const optionsList = await getOptions();
      setOptions(optionsList);
    }

    const getOptions = async ()=> {
      const url = urlSchema.Users.GET_ALL_USERS;
      const usersList = await axiosPrivate.get(url);
      console.log("usersList:: ",usersList);
      return usersList.data;
    }

    useEffect(()=>{
      if(options && options.length > 0){
        updateParentState(options.filter(user=>user.username === value));
      }
    },[value, setValue]);

    const updateParentState = useCallback(
      debounce((value)=>{
        setTask((prevTask)=>{
          const taskClone = cloneDeep(prevTask);
          const user_id = value[0]?.id;
          taskClone.taskData['assignee'] = user_id;
          return {
            ...prevTask,
            taskData : taskClone.taskData
          }
        })
      }, 4),[]);

  return(
    <div className='wrapper'>
      <Select sx = {{
          minWidth:'120px'
        }} 
      className={'lookup-container'}
      defaultValue="Hello"
      
      arrow = {
        <Box
          as="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentcolor"
          sx={{
            ml: -28,
            alignSelf: 'center',
            pointerEvents: 'none',
          }}>
          <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
        </Box>
      }
        op
        onClick={handleClick}
        onChange={handleChange}
        disabled={!props.editEnabled}
        >
        {options.map((option, key)=>{
          return (
              <option key={key}>
                {option.username}
              </option>
          )
        })}
        </Select>
      </div>
  );
  
}
  

export default LookupField;