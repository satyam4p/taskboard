import React, { useState } from 'react';
import SecondaryBar from '../Components/Secondarybar/SecondaryBar';
import SideMenu from '../Components/SideMenu/SideMenu';
import useAuth from '../helpers/hooks/useAuth';

function Home(props){
    const [toggleSideMenu, setToggleSideMenu] = useState(true);
    const {auth} = useAuth();
    const [toggleProfile, setToggleProile] = useState(false);
    const [toggleAddMenu, setToggleAddMenu] = useState(false);

    return(
        <>
            <SideMenu 
                showSideMenu = {toggleSideMenu}
                toggleAddMenu = {toggleAddMenu}
                setToggleAddMenu = {setToggleAddMenu}
            />
            <SecondaryBar
                setToggleSideMenu = {setToggleSideMenu}
                setToggleProile = {setToggleProile}
                toggleProfile = {toggleProfile}
                setToggleAddMenu = {setToggleAddMenu}
            />
        </>
    )

}

export default Home;

