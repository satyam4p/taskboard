/** @jsxImportSource theme-ui */
import Sidebar from "../../common/Sidebar/Sidebar";
import { fetchDrawerDetailsBegin, fetchDrawerDetailsSuccess, fetchDrawerDetailsError, 
    selectDrawerDetails } from "../../features/Drawer/drawerSlice";
import useAxiosPrivate from "../../helpers/hooks/useAxiosPrivate";
import { useDispatch, useSelector } from "react-redux";
import urlSchema from '../../network/urlSchema/urlSchema.json';
import { useEffect, useState } from "react";

function SideMenu({showSideMenu, toggleAddMenu, setToggleAddMenu}){
    const axios = useAxiosPrivate();
    const dispatch = useDispatch()
    const [tasks, setTasks] = useState([]);
    const drawerDetails = useSelector(selectDrawerDetails);
    const handleIndexAction = async (type) =>{
        const strtype = type.split(" ").join("_").toLowerCase();
        dispatch(fetchDrawerDetailsBegin());
            const url = urlSchema.Drawer[strtype];
            const result = await axios.get(url);
            if(result && result.data){
                dispatch(fetchDrawerDetailsSuccess(result.data))
            }else{
                dispatch(fetchDrawerDetailsError(result.data));
            }
    }

    useEffect(()=>{

        if( drawerDetails && drawerDetails.length){
            setTasks(drawerDetails);
        }

    },[drawerDetails]);
    console.log("tasks:: ", tasks);
    
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
        </Sidebar>
        </div>
    )

}

export default SideMenu;
