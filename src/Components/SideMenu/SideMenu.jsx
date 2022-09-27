/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { Flex, } from 'theme-ui';
import iconsMap from '../../common/Icons/iconsMap';

function SideMenu({showSideMenu}){
    return(
        <Flex sx={{
                width:'13%',
                height:'80vh',
                top:`calc(100vh - 90vh)`,
                bg:'black',
                position:'absolute',
                display:'block',
                bg:'#F6F6F6',
                fontFamily:'body',
                fontSize:2,
                transform:()=> showSideMenu ? 'translateX(0%)' : 'translateX(-100%)',
                transition:'all 0.3s',
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
                }}>.
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
    )


}

export default SideMenu;
