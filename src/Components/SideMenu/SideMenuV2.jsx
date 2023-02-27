/** @jsxImportSource theme-ui */
import Sidebar from "../../common/Sidebar/Sidebar";
import { selectDrawerDetails } from "../../features/Drawer/drawerSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useDrawerDetails from "../../helpers/hooks/useDrawerDetails";
import shortid from "shortid";

function SideMenu({showSideMenu, toggleAddMenu, setToggleAddMenu}){
    const [tasks, setTasks] = useState([]);
    const drawerDetails = useSelector(selectDrawerDetails);
    const fetchDrawerDetails = useDrawerDetails();

    const handleIndexAction = (type)=>{

        fetchDrawerDetails(type);

    }

    useEffect(()=>{

        if( drawerDetails && drawerDetails.length){
            setTasks(drawerDetails);
        }

    },[drawerDetails]);
    
    return(
        <div>
        <Sidebar showSideMenu={showSideMenu}>
            <Sidebar.MenuList>
                <Sidebar.MenuIndex>
                    Board
                </Sidebar.MenuIndex>
                <Sidebar.MenuIndex id = {"recent_tasks"} arrowOnHover hasPanel panelData = {tasks} handleIndexAction = {handleIndexAction}>
                    Recent Tasks
                </Sidebar.MenuIndex>
                <Sidebar.MenuIndex>
                    Archive
                </Sidebar.MenuIndex>
                <Sidebar.MenuIndex id = {"settings"} bottom arrowOnHover hasPanel>
                    Settings
                </Sidebar.MenuIndex>
            </Sidebar.MenuList>
            <Sidebar.SidePanels id = {"recent_tasks"}>
                    {tasks && tasks.length ? 
                        tasks.map(({status, label, name, _id}, index)=>{
                            const options = {
                                status,
                                label,
                                name,
                                id: _id
                            }
                            return(
                                <Sidebar.SidePanelIndex key={shortid.generate()+index} options = {options}/>
                            )
                        })
                        :
                        null
                    }
            </Sidebar.SidePanels>
        </Sidebar>
        </div>
    )

}

export default SideMenu;
