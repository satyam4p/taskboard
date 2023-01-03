/** @jsxImportSource theme-ui */
import React, { useState, useContext } from "react";
import { Input } from 'antd';
import TaskContext from "../../Modals/Task/TaskContext/TaskProvider";

const TextField = () => {
    const {task, setTask} = useContext(TaskContext);
    const [value, setValue] = useState(null);

    return(
        <Input
            value = {value}
            type="text"
            autoComplete="off"
            sx={{
                padding:'5px',
            }}
        />
    )

}

export default TextField;

