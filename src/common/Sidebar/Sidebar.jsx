import React,{ useState, useContext, createContext } from "react";
import './Stylesheet.scss';
import iconsMap from "../IconsMapper/IconsMap";
import { Tag } from 'antd';
import ModalContext from "../../context/ModalProvider";
import useGetTask from "../../helpers/hooks/useGetTask";


const SideMenuContext = createContext();

const useSideMenuContext = ()=> {

    const context = useContext(SideMenuContext);

    if(!context){
        
        throw new Error("Children cannot be rendered outside Sidebar parent component");
    }

    return context;
}


const Sidebar = ({ children, showSideMenu })=>{

    const [activeIndex, setActiveIndex] = useState();
    const [panel, setPanel] = useState({});

    return(
        <SideMenuContext.Provider value={{activeIndex, setActiveIndex, panel, setPanel}}>
            <div className={`sidemenu-container ${showSideMenu ? 'show' : 'hide'}`}>
                { children }
                {/* <Sidebar.SidePanels>
                    {panel?.show && panel?.panelData && panel?.panelData.length ? 
                        panel.panelData.map((data, index)=>{
                            return(
                                <Sidebar.SidePanelIndex key={shortid.generate()+index} status={data.status} label={data.label} title={data.name} id = {data?._id}/>
                            )
                        })
                        :
                        null
                    }
                </Sidebar.SidePanels> */}
            </div>
        </SideMenuContext.Provider>
    )
}

const MenuList = ({children})=>{

    const { activeIndex, setActiveIndex, panel, setPanel} = useSideMenuContext();
    const onActive = (index, hasPanel, panelData, handleIndexAction, children)=>{
        if(typeof handleIndexAction === "function"){
            handleIndexAction(children)
        }
        if(hasPanel && activeIndex !== index){
            setPanel(prev=>{
                return {
                    show: true,
                    index,
                    panelData
                }
            })
            setActiveIndex(index);
            return;
        }else if(hasPanel){
            setPanel(prev=>{
                if(prev?.show){
                    return {
                        ...prev,
                        show:false,
                        index,
                        panelData:[]
                    }
                }else{
                    return {
                        ...prev,
                        show: true,
                        index,
                        panelData
                    }
                }
            })
        }
        if(panel?.show){
            setPanel(prev=>{
                return {
                    ...prev,
                    index,
                    show: false,
                    panelData:null
                }
            })
        }
        activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);
    }

    const Children = React.Children.map( children, (child, index)=>{
        if(child.type === MenuIndex){
            return React.cloneElement( child, { isActive: activeIndex === index, onActive, index});
        }else{
            return child;
        }
    }) 

    return(
        <div className="sidemenu__list">
            { Children }
        </div>
    )

}

Sidebar.MenuList = MenuList;

const MenuIndex = ({children, isActive, onActive, index, arrowOnHover, 
    hasPanel, panelData, bottom = false, handleIndexAction = undefined})=>{

    const [arrow, setArrow] = useState(false);
    const showArrow = ()=> arrowOnHover ? arrow ? setArrow(false) : setArrow(true) : null;
    console.log("Panel data: ",panelData);
    return(
        <div className={`menu__index ${isActive ? 'active' : '' } ${bottom ? 'bottom': ''}`}
            onClick={()=>onActive(index, hasPanel, panelData, handleIndexAction, children)}
            onMouseOver={()=>showArrow()} 
            onMouseLeave={()=>showArrow()}>

            {children}
            {arrow ? iconsMap.doubleRightArror(14) : null}
        </div>
    )
}

Sidebar.MenuIndex = MenuIndex;

const SidePanels = ({ children })=>{

    const { activeIndex, panel } = useSideMenuContext();
    const { setModalType } = useContext(ModalContext);
    const getTask = useGetTask();
    const handleAction = (id)=>{
        setModalType(prev=>{
            if(!prev.isVisible){
                return {
                    isVisible: true,
                    type: 'task'
                }
            }
            return prev;
        });
        getTask(id);
    }

    const Children = React.Children.map(children, (child, index)=>{
        if(child.type === SidePanelIndex){
            return React.cloneElement(child, { handleAction })
        }
        return child;
    })

    return(
        <div className={`sidemenu__sidePanels ${ activeIndex && panel.show ? 'show' : 'hide'}`}>
            { Children }
        </div>
    )
}

Sidebar.SidePanels = SidePanels;

const SidePanelIndex = ({ children, status, label, title, handleAction, id })=>{
    
    return(
        <div className={`sidemenu__sidepanel`} onClick = {()=>handleAction(id)}>
            <div className='sidepanel_index_tag-container'>
                <Tag className={`sidepanel_index_status-tag ${status.toLowerCase().split(" ").join("_")}`} >{status}</Tag>
                <Tag className={`sidepanel_index_label-tag ${label.toLowerCase().split(" ").join("_")}`} >{label}</Tag>
            </div>
            <span className='sipanel_index_title-container'>{title}</span>
            { children }
        </div>
    )

}

Sidebar.SidePanelIndex = SidePanelIndex;


export default Sidebar;