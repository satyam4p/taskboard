/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { Button, Flex, } from 'theme-ui';
import iconsMap from '../../common/Icons/iconsMap';
import Popover from '../Popover/Popover';

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
                            {iconsMap['New']()}
                        </button>
                        {
                            toggleAddMenu && 
                            <Popover actions={actions} />
                        }
                    <div sx={{
                        width:'85%',
                        mx:'2px',
                        my:'2px',
                        alignSelf:'center',
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
                            }}>{iconsMap['RecentTasks']()}&nbsp;Recent Tasks</button>
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
                            }}>{iconsMap['Board']()}&nbsp;Board</button>
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
                            }}>{iconsMap['Archive']()}&nbsp;Archive</button>
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
                        }}>{iconsMap['Settings']()}&nbsp;Settings</button>
                </div>
            </Flex>
        </Flex>
        </>
    )


}

export default SideMenu;
