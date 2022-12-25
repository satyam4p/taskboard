/** @jsxImportSource theme-ui */
import React,{Suspense, useEffect, useState} from "react";
import useModals from "../../../helpers/hooks/useModals";
import { Box, Container, Flex, Input, Label, Text } from "theme-ui";
import iconsMap from "../../Icons/iconsMap";
import TextLoader from "../../Loaders/simpleTextLoader";
import FieldMapper from "../../Fields/FieldMappingMaster";
import { SaveOutlined,
        ShareAltOutlined,
        EditOutlined,
        CloseCircleOutlined,
        MoreOutlined,
        FieldTimeOutlined,
        UserAddOutlined,
        TagsOutlined,
        AlertOutlined
} from '@ant-design/icons';
const Comments = React.lazy(()=>import('../../Comments/comments'));


const TaskModal=(props)=>{
    const { modalType, setModalType } = useModals();
    const [activeTab, setActiveTab] = useState('comments');

    useEffect(()=>{
    },[]);

    const toggleTab=(event, type)=>{
        event.preventDefault();
        setActiveTab(type);
    }
    console.log("active tab:: ",activeTab);
    if(modalType.type === 'task' && modalType.isVisible){
        return(
            <div sx={{
                zIndex:'400',
                width:'40%',
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
                <Box as={'form'}>
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
                            {<SaveOutlined style={{
                                fontSize:'20px'
                            }}/>}
                        </div>
                        <div sx={{
                            margin:'10px',
                            '&:hover':{
                                cursor:'pointer'
                            }
                        }}>
                            {<ShareAltOutlined style={{
                                fontSize:'20px'
                            }}/>}
                        </div>
                        <div sx={{
                            margin:'10px',
                            '&:hover':{
                                cursor:'pointer'
                            }
                        }}>
                            {<EditOutlined style={{
                                fontSize:'20px'
                            }}/>}
                        </div>
                        <div sx={{
                            margin:'10px',
                            '&:hover':{
                                cursor:'pointer'
                            }
                        }}>
                            {<MoreOutlined style={{
                                fontSize:'20px'
                            }}/>}
                        </div>
                        <div sx={{
                            margin:'10px',
                            '&:hover':{
                                cursor:'pointer'
                            }
                        }}
                        onClick={()=>setModalType((prev)=>{
                            return {
                                ...prev,
                                isVisible:false
                            }
                        })}
                        >
                            {<CloseCircleOutlined style={{
                                fontSize:'20px'
                            }}/>}
                        </div>
                    </div>
                    <Label htmlFor="title"></Label>
                    <Input sx={{
                        border:'0.5px solid #C4C4C4',
                        padding:'10px',
                        marginX:'10px',
                        width:'90%',
                        margin:'auto',
                        height:'40px',
                    }} name="title" placeholder="Enter Title"/>
                    <Container sx={{
                        width:'90%',
                        marginY:'30px',
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-between',
                        minHeight:'10em'
                    }}>
                        <div sx={{
                            display:'flex',
                            alignItems:'center',
                            padding:'0px',
                            margin:'0px'
                        }}>
                            {<AlertOutlined style={{
                                fontSize:'20px',
                            }}/>}&nbsp;Status
                        </div>
                        <div sx={{
                            display:'flex',
                            alignItems:'center'
                        }}>
                            {<FieldTimeOutlined style={{
                                fontSize:'20px',
                            }}/>}&nbsp;Timeline
                        </div>
                        <div sx={{
                            display:'flex',
                            alignItems:'center'
                        }}>
                            {/* {<UserAddOutlined style={{
                                fontSize:'20px'
                            }}/>}&nbsp;Assignee */}
                            <FieldMapper icon =  {<UserAddOutlined style={{
                                fontSize:'20px'
                            }}/>} />
                        </div>
                        <div sx={{
                            display:'flex',
                            alignItems:'center'
                        }}>
                            {<TagsOutlined style={{
                                fontSize:'20px'
                            }}/>}&nbsp;Label
                        </div>
                    </Container>
                </Box>
                    <Container
                        sx={{
                            width:'90%',
                            marginTop:'50px'
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
                                    : null
                                }
                            </Suspense>
                        </Container>
                    </Container>
            </div>
        )
    } 
}
export default TaskModal;