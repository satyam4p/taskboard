/** @jsxImportSource theme-ui */
import Sidebar from "../../common/Sidebar/Sidebar";

function SideMenu({showSideMenu, toggleAddMenu, setToggleAddMenu}){
    const data = [
            {
                "_id": "63edc3255eeecad772ea3c32",
                "name": "Test new task",
                "ownerId": "63c92cb3977346547bd1f85a",
                "status": "New",
                "description": "{\"blocks\":[{\"key\":\"d5jt5\",\"text\":\"check if the task is being craeted properly after CI/CD pipeline\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
                "assignee": "63c92cb3977346547bd1f85a",
                "label": "RCA",
                "createdAt": "2023-02-16T05:46:13.617Z",
                "__v": 0
            },
            {
                "_id": "63eb87e0497b0f0a5a4a8b3e",
                "name": "test",
                "ownerId": "63c92cb3977346547bd1f85a",
                "status": "Complete",
                "description": "{\"blocks\":[{\"key\":\"d5jt5\",\"text\":\"check if the task is being craeted properly after CI/CD pipeline\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
                "assignee": "63c92cb3977346547bd1f85a",
                "label": "Task",
                "createdAt": "2023-02-14T13:08:48.843Z",
                "__v": 0
            },
            {
                "_id": "63eb8688497b0f0a5a4a7f4a",
                "name": "asdasd",
                "ownerId": "63c92cb3977346547bd1f85a",
                "status": "In Progress",
                "description": null,
                "assignee": "63c92cb3977346547bd1f85a",
                "label": "Task",
                "createdAt": "2023-02-14T13:03:04.986Z",
                "__v": 0
            },
            {
                "_id": "63eb85a0497b0f0a5a49c0d8",
                "name": "asdasd",
                "ownerId": "63c92cb3977346547bd1f85a",
                "status": "New",
                "description": null,
                "assignee": "63c92cb3977346547bd1f85a",
                "label": "Task",
                "createdAt": "2023-02-14T12:59:12.553Z",
                "__v": 0
            },
            {
                "_id": "63eb6c7d497b0f0a5a454a96",
                "name": "Testsssddsss",
                "ownerId": "63c92cb3977346547bd1f85a",
                "status": "Complete",
                "description": null,
                "assignee": "63c92cb3977346547bd1f85a",
                "label": "Task",
                "createdAt": "2023-02-14T11:11:57.321Z",
                "__v": 0
            },
    ]
    
    return(
        <div>
        <Sidebar showSideMenu={showSideMenu}>
            <Sidebar.MenuList>
                <Sidebar.MenuIndex>
                    Board
                </Sidebar.MenuIndex>
                <Sidebar.MenuIndex arrowOnHover hasPanel panelData = {data}>
                    Recent Tasks
                </Sidebar.MenuIndex>
                <Sidebar.MenuIndex>
                    Archive
                </Sidebar.MenuIndex>
                <Sidebar.MenuIndex bottom >
                    Settings
                </Sidebar.MenuIndex>
            </Sidebar.MenuList>
        </Sidebar>
        </div>
    )

}

export default SideMenu;
