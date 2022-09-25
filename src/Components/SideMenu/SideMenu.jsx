/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { Flex, } from 'theme-ui';


function SideMenu(props){
    return(
        <Flex sx={{
                width:'15%',
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
                        mx:'10px',
                        my:'10px',
                        alignSelf:'center',
                        
                    }}>
                        <span>Recent Tasks</span>
                    </div>
                    <div sx={{
                        width:'85%',
                        mx:'10px',
                        my:'10px',
                        alignSelf:'center'
                    }}>
                        <span>Archive</span>
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
                    <span>Settings</span>
                </div>
            </Flex>

        </Flex>
    )


}

export default SideMenu;
