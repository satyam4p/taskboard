/** @jsxImportSource theme-ui */
import Sidebar from "../../common/Sidebar/Sidebar";

function SideMenu({showSideMenu, toggleAddMenu, setToggleAddMenu}){

    return(
    <div>
       <Sidebar showSideMenu={showSideMenu}>
        <Sidebar.MenuList>
            <Sidebar.MenuIndex>
                Board
            </Sidebar.MenuIndex>
            <Sidebar.MenuIndex arrowOnHover hasPanel>
                Recent Tasks
            </Sidebar.MenuIndex>
            <Sidebar.MenuIndex>
                Archive
            </Sidebar.MenuIndex>
        </Sidebar.MenuList>
        <Sidebar.SidePanels>
            <Sidebar.SidePanel>
                
            </Sidebar.SidePanel>
        </Sidebar.SidePanels>
       </Sidebar>
    </div>
    )

}

export default SideMenu;
