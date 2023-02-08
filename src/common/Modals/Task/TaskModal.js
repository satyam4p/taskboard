/** @jsxImportSource theme-ui */
/** OOB imports */
import React,{Suspense, useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Container } from "theme-ui";

/** Contexts */
import TaskContext from "./TaskContext/TaskProvider";

/** custom components */
import TaskHeader from "./TaskModalHeader/TaskHeader"; 
import TaskActionBar from "./TaskActionsBar/TaskActionBar";
import TextLoader from "../../Loaders/simpleTextLoader";
import FieldMapper from "../../Fields/FieldMappingMaster";
import TextEditor from "../../TextEditor/TextEditor";

/** Helper custom hooks */
import useCreateAndGetTask from "../../../helpers/hooks/useCreateAndGetTask";
import useTaskConfig from "../../../helpers/hooks/useTaskConfig";
import useUpdateTask from "../../../helpers/hooks/useUpdateTask";

/**custom redux helpers */
import { selectCurrentTaskStatus, 
    selectAllTasks, 
    selectError, 
    selectStatus,
    selectTaskConfig,
    selectCurrentTask,
    clearCurrentTask } from "../../../features/task/taskSlice";

/** Styling */
import './stylesheet.scss';

/**lazy components */
const Comments = React.lazy(()=>import('../../Comments/comments'));

const TaskModal=(props)=>{
    const { task, setTask } = useContext( TaskContext );
    const [loading, create, data] = useCreateAndGetTask();
    const [updateLoading, update] = useUpdateTask();
    const [result, setResult] = useState(undefined);
    const [configLoaded, fetchConfig, config] = useTaskConfig();
    
    useEffect(()=>{
        fetchConfig();
    },[]);

    const [activeTab, setActiveTab] = useState('comments');
    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks);
    const status = useSelector(selectStatus);
    const taskError = useSelector(selectError);
    const currentTaskStatus = useSelector(selectCurrentTaskStatus);
    const taskConfig = useSelector(selectTaskConfig);
    const currentTask = useSelector(selectCurrentTask);

    const toggleTab=(event, type)=>{
        event.preventDefault();
        setActiveTab(type);
    }
   
    const handleEdit= (e) => {
        e.preventDefault();
        setTask(prevTask=>{
            return {
                ...prevTask,
                editEnabled: true
            }
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(currentTask?._id){
            const result = update(currentTask?._id, task.taskData);
            if(!updateLoading){
                setResult(result);
            }
        }else{
            const result = create(task.taskData);
            if(!loading){
                setResult(result);
            }
        }
    }

    const handleShare=(e)=>{
        e.preventDefault();
    }

    const handleClose =(e)=>{
        e.preventDefault();
        dispatch(clearCurrentTask());
        props.setModalType((prev)=>{
                return {
                    ...prev,
                    isVisible:false
                }
            })
    }

    const handleMore =(e)=>{
        e.preventDefault();
    }

    return(
        <div className="task-modal-container">
            {
                (configLoaded && (currentTaskStatus == "idle" || 
                                currentTaskStatus == "succeeded" || 
                                currentTaskStatus == "failed" )) ? 
                <>
                    <Box as={'form'} onSubmit = {(e)=>{handleSubmit(e)}}>
                        <TaskActionBar 
                            handleClose = { handleClose } 
                            handleShare = {handleShare} 
                            handleEdit = {handleEdit}
                            handleMore = {handleMore}
                            currentTaskStatus = {currentTaskStatus}
                            editEnabled = { task.editEnabled }  />

                        <TaskHeader editEnabled = {task.editEnabled} config = {taskConfig}/>
                        <Container sx={{
                            width:'90%',
                            marginY:'10px',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'space-between',
                            minHeight:'10em'
                        }}>
                            <div sx={{
                                display:'flex',
                                alignItems:'center',
                                flexDirection:'column',
                                margin:'4px',
                            }}>
                                { taskConfig.map((field, key)=>{
                                    if(field.entityKey != "name" && field.entityKey != "description"){
                                        return(
                                            <FieldMapper
                                                config = {field}
                                                key = {key} 
                                                field = {field.entityType}
                                                label = {field.label}
                                                icon =  {field.icon}
                                                options = {field.options}
                                                editEnabled = {task.editEnabled}
                                            />
                                        )
                                    }
                                })}
                            </div>
                        </Container>
                    </Box> 
                    <Container
                        sx={{
                            width:'90%',
                            marginTop:'20px'
                        }}>
                        <div sx={{
                            borderBottom:'0.5px solid #DEDEDE',
                            width:'28%',
                            display:'flex',
                            justifyContent:'space-between'
                        }}>
                            <button sx={{
                                borderBottom:()=>activeTab=='comments' ? '2px solid #476451' : 'none',
                                borderTop:'none',
                                borderLeft:'none',
                                borderRight:'none',
                                bg:'transparent',
                                padding:'4px',
                                fontSize:0,
                                '&:hover':{
                                    bg:'#F6F6F6'
                                },
                            }}
                            onClick={e=>toggleTab(e,'comments')}
                            >
                                <span>Comments</span>
                            </button>
                            <button sx={{
                                borderBottom:()=>activeTab=='description' ? '2px solid #476451' : 'none',
                                borderTop:'none',
                                borderLeft:'none',
                                borderRight:'none',
                                bg:'transparent',
                                padding:'4px',
                                fontSize:0,
                                '&:hover':{
                                    bg:'#F6F6F6'
                                }
                                
                            }}
                            onClick={e=>toggleTab(e,'description')}
                            >
                                <span>Description</span>
                            </button>
                        </div>
                        <Container className="data-container">
                            <Suspense fallback={<TextLoader/>}>
                                { activeTab === 'comments' 
                                    ? <Comments editEnabled = {task.editEnabled}/>
                                    : <TextEditor config = {taskConfig} editEnabled = {task.editEnabled}/>
                                }
                            </Suspense>
                        </Container>
                    </Container>
                </> :
                <div style={{width:'100%', height:'100%', display:'flex', justifyContent:"center", alignItems:'center' }}>
                    <h4>Loading...</h4>
                </div>

        }
        </div>
    )
}
export default TaskModal;