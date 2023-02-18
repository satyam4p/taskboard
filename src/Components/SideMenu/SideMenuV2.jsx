/** @jsxImportSource theme-ui */
import Sidebar from "../../common/Sidebar/Sidebar";

function SideMenu({showSideMenu, toggleAddMenu, setToggleAddMenu}){

    return(
       <Sidebar showSideMenu={showSideMenu}>
        <Sidebar.MenuList>
            <Sidebar.MenuIndex>
                Board
            </Sidebar.MenuIndex>
            <Sidebar.MenuIndex arrowOnHover>
                Recent Tasks
            </Sidebar.MenuIndex>
            <Sidebar.MenuIndex>
                Archive
            </Sidebar.MenuIndex>
        </Sidebar.MenuList>
       </Sidebar>
    )

}

export default SideMenu;
