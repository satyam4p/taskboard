import React,{ useState, useContext, createContext } from "react";
import './Stylesheet.scss';
import iconsMap from "../IconsMapper/IconsMap";


const SideMenuContext = createContext();

const useSideMenuContext = ()=> {

    const context = useContext(SideMenuContext);

    if(!context){
        
        throw new Error("Children cannot be rendered outside compound component parent");
    }

    return context;
}


const Sidebar = ({ children, showSideMenu })=>{

    const [activeIndex, setActiveIndex] = useState(0);
    const [panel, setPanel] = useState({})

    return(
        <SideMenuContext.Provider value={{activeIndex, setActiveIndex, panel, setPanel}}>
            <div className={`sidemenu-container ${showSideMenu ? 'show' : 'hide'}`}>
                { children }
                <Sidebar.SidePanels>
                    {panel?.show && panel?.panelData && panel?.panelData.length ? 
                        panel.panelData.map((data, index)=>{
                            return(
                                <Sidebar.SidePanelIndex key={index}>
                                    {data.name}
                                </Sidebar.SidePanelIndex>
                            )
                        })
                        :
                        null
                    }
                </Sidebar.SidePanels>
            </div>
        </SideMenuContext.Provider>
    )
}

const MenuList = ({children})=>{

    const { activeIndex, setActiveIndex, panel, setPanel} = useSideMenuContext();
    const onActive = (index, hasPanel, panelData)=>{
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
        setActiveIndex(index);
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

const MenuIndex = ({children, isActive, onActive, index, arrowOnHover, hasPanel, panelData})=>{

    const [arrow, setArrow] = useState(false);
    const showArrow = ()=> arrowOnHover ? arrow ? setArrow(false) : setArrow(true) : null;

    return(
        <div className={`menu__index ${isActive ? 'active' : ''}`}
            onClick={()=>onActive(index, hasPanel, panelData)}
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
    console.log("panel:: ",panel);

    return(
        <div className={`sidemenu__sidePanels ${activeIndex && panel?.show ? 'show' : 'hide'}`}>
            { children }
        </div>
    )
}

Sidebar.SidePanels = SidePanels;

const SidePanelIndex = ({ children })=>{

    return(
        <div className={`sidemenu__sidepanel`}>
            { children }
        </div>
    )

}

Sidebar.SidePanelIndex = SidePanelIndex;


export default Sidebar;