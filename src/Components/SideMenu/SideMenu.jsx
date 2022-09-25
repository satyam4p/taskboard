/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { Flex, } from 'theme-ui';


function SideMenu(props){
    return(
        <Flex sx={{
                width:'13%',
                height:'80vh',
                top:`calc(100vh - 90vh)`,
                bg:'black',
                position:'absolute',
                display:'block',
                bg:'#F7F7F7',
                fontFamily:'body',
                fontSize:1,
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
                                }
                            }}>Recent Tasks</button>
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
                                }
                            }}>Archive</button>
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
                            }
                        }}>Settings</button>
                </div>
            </Flex>

        </Flex>
    )


}

export default SideMenu;
