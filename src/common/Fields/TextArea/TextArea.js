import React, {useState, useContext, useEffect, useCallback} from "react";
import './stylesheet.scss';
import { useSelector } from "react-redux";
import { selectCurrentTask, selectCurrentTaskStatus } from "../../../features/task/taskSlice";
import { Input } from "antd";
import TaskContext from "../../Modals/Task/TaskContext/TaskProvider";
import debounce from "../../../helpers/commonUtils/debounce";
import { cloneDeep } from "lodash";

const {TextArea} = Input;
const TextAreaField =(props)=>{
    const currentTask = useSelector(selectCurrentTask);
    const currentTaskStatus = useSelector(selectCurrentTaskStatus);
    const [value, setValue] = useState();
    const entityKey = props?.entityKey;
    const { task, setTask } = useContext(TaskContext)

    const handleChange = (e)=>{
        e.preventDefault();
        let value = e.target.value
        setValue(value);
        updateParent(value);
        
    }

    // useEffect(()=>{
    //     updateParent(value)
    // }, [value, setValue]);

    const updateParent = useCallback(
        debounce( value =>{
            setTask( prevTask => {
                if(entityKey){
                    return {
                        ...prevTask,
                        [entityKey]: value
                    }
                }
            })
        }, 800), []);

    return(
        <TextArea 
            className="text-area-container"
            value = {value}
            onChange = {e=>handleChange(e)}
            disabled={ !props.editEnabled }
        />
    )
}

export default TextAreaField;