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
                <Sidebar.MenuIndex arrowOnHover hasPanel panelData = {tasks} handleIndexAction = {handleIndexAction}>
                    Recent Tasks
                </Sidebar.MenuIndex>
                <Sidebar.MenuIndex>
                    Archive
                </Sidebar.MenuIndex>
                <Sidebar.MenuIndex bottom arrowOnHover hasPanel>
                    Settings
                </Sidebar.MenuIndex>
            </Sidebar.MenuList>
            <Sidebar.SidePanels>
                    {tasks && tasks.length ? 
                        tasks.map((data, index)=>{
                            return(
                                <Sidebar.SidePanelIndex key={shortid.generate()+index} status={data.status} label={data.label} title={data.name} id = {data?._id}/>
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
