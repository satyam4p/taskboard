import React, { useState } from 'react';
import SecondaryBar from '../Components/Secondarybar/SecondaryBar';
import SideMenu from '../Components/SideMenu/SideMenu';
import useAuth from '../helpers/hooks/useAuth';

function Home(props){
    const [toggleSideMenu, setToggleSideMenu] = useState(true);
    const {auth} = useAuth();

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

