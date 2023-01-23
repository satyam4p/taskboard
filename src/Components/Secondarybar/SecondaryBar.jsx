/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { Flex } from 'theme-ui';
import { Button } from 'theme-ui';
import ProfileTogggle from './Profile/ProfileToggle';

function SecondaryBar({ 
    setToggleSideMenu, 
    toggleProfile,
    setToggleProile,
    setToggleAddMenu }){

    return(
        <>
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
                    padding:'5px',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-evenly'
                    }} 
                    onClick={()=>{
                        setToggleSideMenu((prev)=>!prev)
                        setToggleAddMenu(false);
                    }}>
                        <div sx={{
                            width:'100%',
                            height:'4px',
                            bg:'#014421',
                            }}
                        />
                        <div sx={{
                            width:'100%',
                            height:'4px',
                            bg:'#014421',
                            }} 
                        />
                        <div sx={{
                            width:'100%',
                            height:'4px',
                            bg:'#014421',
                            }}
                        />
                </Button>
                <Button 
                onClick={()=>setToggleProile(!toggleProfile)}
                sx={{
                    borderRadius:'50%',
                    width:'40px',
                    height:'40px',
                    bg:'#88AF9F',
                    mx:'10px'
                }}/>
            </Flex>

            {toggleProfile && <ProfileTogggle />}
        </>

    )
}



export default SecondaryBar;