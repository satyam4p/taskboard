import React, { useState } from 'react';
import SecondaryBar from '../Components/Secondarybar/SecondaryBar';
import SideMenu from '../Components/SideMenu/SideMenu';
import useAuth from '../helpers/hooks/useAuth';

function Home(props){
    const [toggleSideMenu, setToggleSideMenu] = useState(true);
    const {auth} = useAuth();
    const [toggleProfile, setToggleProile] = useState(false);

    return(
        <>
            <SideMenu showSideMenu = {toggleSideMenu}/>
            <SecondaryBar
                setToggleSideMenu = {setToggleSideMenu}
                setToggleProile = {setToggleProile}
                toggleProfile = {toggleProfile}
            />
        </>
    )

}

export default Home;

