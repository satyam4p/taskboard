/** @jsxImportSource theme-ui */
import React,{Suspense, useEffect, useState, useContext } from "react";
import TaskContext from "./TaskContext/TaskProvider";
/** testing START*/
import { useSelector, useDispatch, connect } from "react-redux";
import { selectCurrentTaskStatus, 
         selectAllTasks, 
         selectError, 
         selectStatus,
         selectTaskConfig,
         selectCurrentTask,
         createTaskSuccess } from "../../../features/task/taskSlice";
/** END */
import { Box, Container, Flex } from "theme-ui";
import TextLoader from "../../Loaders/simpleTextLoader";
import FieldMapper from "../../Fields/FieldMappingMaster";
import iconsMap from "../../IconsMapper/IconsMap";
import TextEditor from "../../TextEditor/TextEditor";
import './stylesheet.scss';

/** Helpers */
import TaskResolver from "../Helpers/ModalResolver/TaskResolver";
import TaskHeader from "./TaskModalHeader/TaskHeader";
import useCreateAndGetTask from "../../../helpers/hooks/useCreateAndGetTask";
import useTaskConfig from "../../../helpers/hooks/useTaskConfig";
import useNotification from "../../Notification/helpers/useNotification";
import Notification from "../../Notification/Notification";

const Comments = React.lazy(()=>import('../../Comments/comments'));

const TaskModal=(props)=>{
    const { task, setTask } = useContext( TaskContext );
    const [loading, create, data] = useCreateAndGetTask();
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
        const result = create(task.taskData);
        if(!loading){
            setResult(result);
        }
    }

    const handleShare=(e)=>{
        e.preventDefault();
    }

    const handleClose =(e)=>{
        e.preventDefault();
        dispatch(createTaskSuccess({}));
        props.setModalType((prev)=>{
                return {
                    ...prev,
                    isVisible:false
                }
            })
    }

    return(
        <div className="task-modal-container" sx={{
            zIndex:'400',
            width:'36%',
            height:'80vh',
            position:'absolute',
            top:'50%',
            left:'50%',
            transform:'translate(-50%,-45%)',
            borderRadius:'5px',
            boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.75)',
            overflowY:'auto',
            fontSize:1
        }}>
            {
                (configLoaded && (currentTaskStatus == "idle" || 
                                currentTaskStatus == "succeeded" || 
                                currentTaskStatus == "failed" )) ? 
                <>
                    <Box as={'form'} onSubmit = {(e)=>{handleSubmit(e)}}>
                        <div sx={{
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'end',
                            margin:'15px',
                        }}>
                            <div sx={{
                                margin:'5px',
                                '&:hover':{
                                    cursor:'pointer'
                                }
                            }}>
                            {<button type="submit" sx={{
                                background:'transparent',
                                border:'none'
                            }}> { currentTaskStatus === "loading" 
                                ? <span style={{color:'green'}}>Creating...{iconsMap.loading()}</span> 
                                : iconsMap.create() } 
                            </button>}
                        </div>
                        <div sx={{
                            margin:'5px',
                            '&:hover':{
                                cursor:'pointer'
                            }
                        }}>
                            {<button sx={{
                                background:'transparent',
                                border:'none'
                            }}
                            onClick={(e)=>handleShare(e)}
                            >
                                {iconsMap.share()}
                            </button>}
                        </div>
                        <div sx={{
                            margin:'5px',
                            '&:hover':{
                                cursor:'pointer'
                            }
                        }}>
                            {<button 
                            onClick={e=>handleEdit(e)}
                            sx={{
                                background:'transparent',
                                border:'none'
                            }}>
                                {iconsMap.edit(task.editEnabled)}
                            </button>}
                        </div>
                        <div sx={{
                            margin:'5px',
                            '&:hover':{
                                cursor:'pointer'
                            }
                        }}>
                            {<button
                                onClick={ event=> TaskResolver(event,"fetchTask", dispatch) } // only for testing
                                sx={{
                                background:'transparent',
                                border:'none'
                                }}>
                                {iconsMap.more()}
                            </button>}
                        </div>
                        <div sx={{
                            margin:'5px',
                            '&:hover':{
                                cursor:'pointer'
                            }
                        }}
                        // onClick={()=>props.setModalType((prev)=>{
                        //     return {
                        //         ...prev,
                        //         isVisible:false
                        //     }
                        // })}
                        onClick={(e)=>handleClose(e)}
                        >
                            {iconsMap.close()}
                        </div>
                        </div>
                        <TaskHeader editEnabled = {task.editEnabled} currentTask = {currentTask}/>
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
                                margin:'5px',
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
                            marginTop:'30px'
                        }}>
                        <div sx={{
                            borderBottom:'0.5px solid #DEDEDE',
                            width:'30%',
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
                                fontSize:1,
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
                                fontSize:1,
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