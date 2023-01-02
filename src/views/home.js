import React, { useState,Suspense } from 'react';
import SecondaryBar from '../Components/Secondarybar/SecondaryBar';
import SideMenu from '../Components/SideMenu/SideMenu';
import useAuth from '../helpers/hooks/useAuth';
import useModals from '../helpers/hooks/useModals';

const TaskModal = React.lazy(()=>import('../common/Modals/Task/TaskModal'));
// import TaskModal from '../common/Modals/Task/TaskModal';

function Home(props){
    const [toggleSideMenu, setToggleSideMenu] = useState(true);
    const {auth} = useAuth();
    const [toggleProfile, setToggleProile] = useState(false);
    const [toggleAddMenu, setToggleAddMenu] = useState(false);
    const { modalType, setModalType } = useModals();

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
            {
            (modalType.type === 'task' && modalType.isVisible) &&
                <Suspense fallback={<h4>Loading...</h4>}>
                    <TaskModal setModalType = {setModalType}  />
                </Suspense>   
            }
        </>
    )

}

export default Home;

