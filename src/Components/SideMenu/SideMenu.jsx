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
                bg:'#E9E9E9'
            }}>
        </Flex>
    )


}

export default SideMenu;
