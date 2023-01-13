/** @jsxImportSource theme-ui */
import { useState, useContext, useEffect, useCallback } from "react";
import { Input } from 'antd';
import TaskContext from "../../Modals/Task/TaskContext/TaskProvider";
import { cloneDeep } from "lodash";
import debounce from "../../../helpers/commonUtils/debounce";
import './stylesheet.scss'

const TextField = (props) => {
    const {task, setTask} = useContext(TaskContext);
    const [textValue, setValue] = useState(null);

    const handleChange = ( event ) =>{
        event.preventDefault();
        const value = event.target.value;
        setValue(value);
    }

    useEffect(()=>{
       updateParentState(textValue);
    },[textValue, setValue])

    const updateParentState = useCallback(
        debounce(value=>{
            /** this 'status' value in taskData is hardCoded but should be actually picked from configuration and updated accordingly */
            setTask(prevTask=>{
                let taskClone = cloneDeep(prevTask);
                taskClone.taskData['status'] = value;
                return{
                    ...prevTask,
                    taskData: taskClone.taskData
                }
            });
        }, 400), []);

    return(
        <Input
        className="text-container"
            value = {textValue}
            type="text"
            autoComplete="off"
            sx={{
                padding:'5px',
            }}
            onChange={handleChange}
        />
    )

}

export default TextField;

