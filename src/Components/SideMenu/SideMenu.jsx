/** @jsxImportSource theme-ui */
import { Flex, } from 'theme-ui';
import AddDrawer from '../../common/AddDrawer/AddDrawer';
import Popover from '../Popover/Popover';
import { CarryOutOutlined,
        FundOutlined,
        FileZipOutlined,
        SettingOutlined,
        PlusSquareOutlined    
    } from '@ant-design/icons';
import iconsMap from '../../common/IconsMapper/IconsMap';
import { useState } from 'react';
import useAxiosPrivate from '../../helpers/hooks/useAxiosPrivate';

const actions = [
    {
        type: 'task',
        label: 'Create New Task',
        action: 'create'
    },
    {
        type: 'Story',
        action: 'create',
        label: 'Create New Story'
    }
]



function SideMenu({showSideMenu, toggleAddMenu, setToggleAddMenu}){

    const [hoverStyle, setHoverStyle] = useState({display:'none'});
    const [ showDrawer, setDrawer] = useState(false);
    const axiosPrivate = useAxiosPrivate();
    const addDrawer = ()=>{
        
        return <AddDrawer showDrawer = {showDrawer}/>
    }

    return(
        <>
        <Flex sx={{
                width:'13%',
                height:'86vh',
                top:`calc(100vh - 90vh)`,
                bg:'black',
                position:'absolute',
                display:'block',
                bg:'#F6F6F6',
                fontFamily:'body',
                fontSize:2,
                transform:()=> showSideMenu ? 'translateX(0%)' : 'translateX(-150%)',
                transition:'all 0.3s',
                zIndex:'100'
            }}>
            <Flex sx={{
                    flexDirection:'column',
                    py:'10px',
                    display:'flex',
                    justifyContent:'space-between',
                    height:'inherit',
            }}>
                <Flex sx={{
                    flexDirection:'column',
                }}>
                    <button sx={{
                            width:'35px',
                            height:'35px',
                            background:'transparent',
                            borderRadius:'20%',
                            border:'none',
                            alignSelf:'end',
                            padding:0,
                            margin:0,
                        }}
                        onClick={()=>setToggleAddMenu(!toggleAddMenu)}
                        >
                            {<PlusSquareOutlined style={{
                                fontSize:'20px'
                            }}/>}
                        </button>
                        {
                            toggleAddMenu && 
                            <Popover 
                                actions={actions}
                                setToggleAddMenu={setToggleAddMenu} 
                            />
                        }
                    <div sx={{
                        width:'85%',
                        mx:'2px',
                        my:'2px',
                        alignSelf:'center',
                    }}>
                        <button
                            onMouseEnter= {()=>setHoverStyle({display:'block'})}
                            onMouseLeave= {()=>setHoverStyle({display:'none'})}
                            onClick={()=>setDrawer(prev=>!prev)}
                            sx={{
                                width:'100%',
                                height:'inherit',
                                border:'none',
                                borderRadius:'5px',
                                bg:'transparent',
                                margin:0,
                                padding:'8px',
                                textAlign:'left',
                                alignSelf:'center',
                                '&:hover':{
                                    bg:'#DFDFDF',
                                    cursor:'pointer'
                                },
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'space-between'
                            }}>
                                <div>
                                    {<CarryOutOutlined style={{
                                            fontSize:'16px'
                                        }}/>}&nbsp;Recent Tasks
                                </div>
                                <span style={hoverStyle}>{iconsMap.doubleRightArror(16)}</span>
                        </button>
                    </div>
                    <div sx={{
                        width:'85%',
                        mx:'2px',
                        my:'2px',
                        alignSelf:'center'
                    }}>
                        <button
                             sx={{
                                width:'100%',
                                height:'inherit',
                                border:'none',
                                borderRadius:'5px',
                                bg:'transparent',
                                margin:0,
                                padding:'8px',
                                textAlign:'left',
                                alignSelf:'center',
                                '&:hover':{
                                    bg:'#DFDFDF',
                                    cursor:'pointer'
                                },
                                display:'flex',
                                alignItems:'center',
                            }}>{<FundOutlined style={{
                                fontSize:'16px'
                            }}/>}&nbsp;Board</button>
                    </div>
                    <div sx={{
                        width:'85%',
                        mx:'2px',
                        my:'2px',
                        alignSelf:'center'
                    }}>
                        <button
                             sx={{
                                width:'100%',
                                height:'inherit',
                                border:'none',
                                borderRadius:'5px',
                                bg:'transparent',
                                margin:0,
                                padding:'8px',
                                textAlign:'left',
                                alignSelf:'center',
                                '&:hover':{
                                    bg:'#DFDFDF',
                                    cursor:'pointer'
                                },
                                display:'flex',
                                alignItems:'center',
                            }}>{<FileZipOutlined style={{
                                fontSize:'16px'
                            }}/>}&nbsp;Archive</button>
                    </div>
                    <div sx={{
                        width:'85%',
                        height:'0.8px',
                        bg:"#CECECE",
                        alignSelf:'center',
                        padding:0,
                    }}/>
                </Flex>
                <div sx={{
                    width:'85%',
                    mx:'10px',
                    my:'10px',
                    alignSelf:'center'
                }}>
                    <button
                        // onMouseEnter= {()=>setHoverStyle({display:'block'})}
                        // onMouseLeave= {()=>setHoverStyle({display:'none'})}
                         sx={{
                            width:'100%',
                            height:'inherit',
                            border:'none',
                            borderRadius:'5px',
                            bg:'transparent',
                            margin:0,
                            padding:'8px',
                            textAlign:'left',
                            alignSelf:'center',
                            '&:hover':{
                                bg:'#DFDFDF',
                                cursor:'pointer'
                            },
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'space-between'
                        }}>
                            <div>
                            {<SettingOutlined style={{
                                fontSize:'16px'
                                }}/>}&nbsp;Settings
                            </div>
                            {/* <span style={hoverStyle}>{iconsMap.doubleRightArror(16)}</span> */}
                    </button>
                </div>
            </Flex>
        </Flex>
        {addDrawer()}
        </>
    )


}

export default SideMenu;
