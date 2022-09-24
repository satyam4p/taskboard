import React, { useState } from 'react';
import SecondaryBar from '../Components/Secondarybar/SecondaryBar';

function Home({ setToggleSideMenu }){

    return(
        <>
            <SecondaryBar
                setToggleSideMenu = {setToggleSideMenu}
            />
        </>
    )

}

export default Home;

