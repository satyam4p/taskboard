import React, { useState,Suspense, useContext } from 'react';
import SecondaryBar from '../Components/Secondarybar/SecondaryBar';
import SideMenu from '../Components/SideMenu/SideMenuV2';
// import SideMenu from '../Components/SideMenu/SideMenu';
import useAuth from '../helpers/hooks/useAuth';
import useModals from '../helpers/hooks/useModals';
import { TaskProvider } from '../common/Modals/Task/TaskContext/TaskProvider';
import Notification from '../common/Notification/Notification';
import ThemeContext from '../theme/themeContext';

const TaskModal = React.lazy(()=>import('../common/Modals/Task/TaskModal'));

function Home(props){
    const { theme } = useContext(ThemeContext);
    const [toggleSideMenu, setToggleSideMenu] = useState(true);
    const { showNotification } = useAuth();
    const [ toggleProfile, setToggleProile ] = useState(false);
    const [ toggleAddMenu, setToggleAddMenu ] = useState(false);
    const { modalType, setModalType } = useModals();

    return(
        <div className={`main-container ${theme}`}>
            <SideMenu 
                showSideMenu = {toggleSideMenu}
                toggleAddMenu = {toggleAddMenu}
                setToggleAddMenu = {setToggleAddMenu}
            />
            <SecondaryBar
                showSideMenu = {toggleSideMenu}
                setToggleSideMenu = {setToggleSideMenu}
                setToggleProile = {setToggleProile}
                toggleProfile = {toggleProfile}
                setToggleAddMenu = {setToggleAddMenu}
            />
            {
            (modalType.type === 'task' && modalType.isVisible) &&
                <Suspense fallback={<h4>Loading...</h4>}>
                    <TaskProvider>
                        <TaskModal setModalType = {setModalType}  />
                    </TaskProvider>
                </Suspense>   
            }
            {showNotification && <Notification/>}
        </div>
    )

}

export default Home;

