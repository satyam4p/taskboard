/** @jsxImportSource theme-ui */
import React,{Suspense, useEffect, useState, useContext } from "react";
import TaskContext from "./TaskContext/TaskProvider";
/** testing START*/
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, 
         addTask, 
         selectCurrentTaskStatus, 
         selectAllTasks, 
         selectError, 
         selectStatus } from "../../../features/task/taskSlice";
/** END */
import { Box, Container, Flex, Input, Label, Text } from "theme-ui";
import { store } from "../../../store/store";
import TextLoader from "../../Loaders/simpleTextLoader";
import FieldMapper from "../../Fields/FieldMappingMaster";
import iconsMap from "../../IconsMapper/IconsMap";
import TextEditor from "../../TextEditor/TextEditor";
import './stylesheet.scss';

/** Helpers */
import TaskResolver from "../Helpers/ModalResolver/TaskResolver";
import TaskHeader from "./TaskModalHeader/TaskHeader";
/**test */
import useCreateTask from "../../../helpers/hooks/useCreateTask";
import useTaskConfig from "../../../helpers/hooks/useTaskConfig";
const Comments = React.lazy(()=>import('../../Comments/comments'));


const TaskModal=(props)=>{
    const { task, setTask } = useContext( TaskContext );
    const [loading, create, data] = useCreateTask();
    const [result, setResult] = useState(undefined);
    console.log("parent Task State:: ", task);
    const [configLoaded, fetchConfig, config] = useTaskConfig();

    useEffect(()=>{
        fetchConfig();
    },[]);

    const fieldConfig = [
        // {
        //     field:'text',
        //     label:'Title',
        //     icon: null,
        //     options:{}
        // },
        {
            field:'text',
            label:'Status',
            // icon: <AlertOutlined style={{
            //     fontSize:'20px'
            // }}/>,
            options:{}
        },
        // {
        //     field:'date',
        //     label:'Timeline',
        //     icon: <FieldTimeOutlined style={{
        //         fontSize:'20px'
        //     }}/>,
        //     options:{}
        // },
        {
            field:'lookup',
            label:'Assignee',
            // icon: <UserAddOutlined style={{
            //     fontSize:'20px'
            // }}/>,
            options:{}
        },
        {
            field:'label',
            label:'Label',
            // icon: <TagsOutlined style={{
            //     fontSize:'20px'
            // }}/>,
            options: {
                value: 'Bug',
                color:'error'
            }
        }

    ]
    const [activeTab, setActiveTab] = useState('comments');
    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks);
    const status = useSelector(selectStatus);
    const taskError = useSelector(selectError);
    const currentTaskStatus = useSelector(selectCurrentTaskStatus);

    const toggleTab=(event, type)=>{
        event.preventDefault();
        setActiveTab(type);
    }
   
    const handleEdit= (e) => {
        e.preventDefault();
      
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const result = create(task.taskData);
        if(!loading){
            setResult(result);
        }
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
        }}>{
            <Suspense fallback={<h3>...loading modal</h3>}>
                {
                    configLoaded && 
                        <Box as={'form'} onSubmit = {(e)=>{handleSubmit(e)}}>
                        <div sx={{
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'end',
                            margin:'15px',
                        }}>
                            <div sx={{
                                margin:'10px',
                                '&:hover':{
                                    cursor:'pointer'
                                }
                            }}>
                            {<button type="submit" sx={{
                                background:'transparent',
                                border:'none'
                            }}> { currentTaskStatus === "loading" 
                                ? iconsMap.loading()
                                : iconsMap.save() } 
                            </button>}
                        </div>
                        <div sx={{
                            margin:'10px',
                            '&:hover':{
                                cursor:'pointer'
                            }
                        }}>
                            {<button sx={{
                                background:'transparent',
                                border:'none'
                            }}>
                                {iconsMap.share()}
                            </button>}
                        </div>
                        <div sx={{
                            margin:'10px',
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
                                {iconsMap.edit()}
                            </button>}
                        </div>
                        <div sx={{
                            margin:'10px',
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
                            margin:'10px',
                            '&:hover':{
                                cursor:'pointer'
                            }
                        }}
                        onClick={()=>props.setModalType((prev)=>{
                            return {
                                ...prev,
                                isVisible:false
                            }
                        })}
                        >
                            {iconsMap.close()}
                        </div>
                        </div>
                        {/* <Label htmlFor="title"></Label>
                        <Input sx={{
                            border:'0.5px solid #C4C4C4',
                            padding:'10px',
                            marginX:'10px',
                            width:'90%',
                            margin:'auto',
                            height:'40px',
                        }} name="title" placeholder="Enter Title"/> */}
                        <TaskHeader />
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
                                {fieldConfig.map((field, key)=>{
                                    return(
                                        <FieldMapper
                                            key = {key} 
                                            field = {field.field}
                                            label = {field.label}
                                            icon =  {iconsMap.save()}
                                            options = {field.options}
                                        />
                                    )
                                })}
                            </div>
                        </Container>
                    </Box>
                }
            </Suspense>
            }
            <Container
                sx={{
                    width:'90%',
                    marginTop:'30px'
                }}>
                <div sx={{
                    borderBottom:'0.5px solid',
                    width:'30%',
                    display:'flex',
                    justifyContent:'space-between'
                }}>
                    <button sx={{
                        borderBottom:()=>activeTab=='comments' ? '2px solid #36463F' : 'none',
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
                        borderBottom:()=>activeTab=='description' ? '2px solid #36463F' : 'none',
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
                        {activeTab === 'comments' 
                            ? <Comments/>
                            : <TextEditor/>
                        }
                    </Suspense>
                </Container>
            </Container>
        </div>
    )
}
export default TaskModal;