/** @jsxImportSource theme-ui */
import { useState, useContext, useEffect, useCallback } from "react";
import { Input } from 'antd';
import TaskContext from "../../Modals/Task/TaskContext/TaskProvider";
import { cloneDeep } from "lodash";
import debounce from "../../../helpers/commonUtils/debounce";

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
            let taskClone = cloneDeep(task);
            /** this 'status' value in taskData is hardCoded but should be actually picked from configuration and updated accordingly */
            taskClone.taskData['status'] = value;
            setTask(taskClone);
        }, 400), []);

    return(
        <Input
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

