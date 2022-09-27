/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { Flex } from 'theme-ui';
import { Button } from 'theme-ui';


function SecondaryBar({ toggleSideMenu, setToggleSideMenu }){
    
    return(
        <Flex sx={{
            width:['95%', null, null],
            height:'54px',
            bg:'lightblue',
            alignSelf:'baseline',
            marginLeft:'calc(100% - 97.5%)',
            marginTop:'1.5%',
            borderRadius:10,
            bg:'#F6F6F6',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between'
        }}>
            <Button sx={{
                width:'40px',
                height:'40px',
                mx:'10px',
                bg:'inherit',
                padding:'6px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-evenly'
                }} 
                onClick={()=>setToggleSideMenu((prev)=>!prev)}>
                    <Flex sx={{
                        width:'100%',
                        height:'3px',
                        bg:'#7E7E7E',
                        my:'1px'
                        }}
                    />
                    <Flex sx={{
                        width:'100%',
                        height:'3px',
                        bg:'#7E7E7E',
                        my:'1px'
                        }} 
                    />
                    <Flex sx={{
                        width:'100%',
                        height:'3px',
                        bg:'#7E7E7E',
                        my:'1px'
                        }}
                    />
            </Button>
            <Button sx={{
                borderRadius:'50%',
                width:'40px',
                height:'40px',
                bg:'#88AF9F',
                mx:'10px'
            }}/>
        </Flex>

    )
}



export default SecondaryBar;