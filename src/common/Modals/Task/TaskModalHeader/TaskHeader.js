import TextField from "../../../Fields/Text/TextField";

const TaskHeader = (props)=>{

    return(
        <TextField config = {props.config} editEnabled = {props.editEnabled} type= {'header'}/>
    )
}
export default TaskHeader;