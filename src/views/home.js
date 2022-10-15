import React, { useState } from 'react';
import SecondaryBar from '../Components/Secondarybar/SecondaryBar';
import SideMenu from '../Components/SideMenu/SideMenu';

function Home(props){
    const [toggleSideMenu, setToggleSideMenu] = useState(true);

    return(
        <>
            <SideMenu showSideMenu = {toggleSideMenu}/>
            <SecondaryBar
                setToggleSideMenu = {setToggleSideMenu}
            />
        </>
    )

}

export default Home;

