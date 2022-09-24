/** @jsxImportSource theme-ui */
import React from 'react';
import { Flex } from 'theme-ui';
import { Button } from 'theme-ui';


function SecondaryBar(props){
    return(
        <Flex sx={{
            width:['95%', null, null],
            height:'54px',
            bg:'lightblue',
            alignSelf:'baseline',
            marginLeft:'calc(100% - 97.5%)',
            marginTop:'1.5%',
            borderRadius:10,
            bg:'#E9E9E9',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between'
        }}>
            <Button/>
            <Button sx={{
                borderRadius:'50%',
                width:'40px',
                height:'40px',
                bg:'#417F65',
                mx:'10px'
            }}/>
        </Flex>

    )
}



export default SecondaryBar;