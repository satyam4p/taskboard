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
            </div>
        </SideMenuContext.Provider>
    )
}

const MenuList = ({children})=>{

    const { activeIndex, setActiveIndex, panel, setPanel} = useSideMenuContext();
    const onActive = (index, hasPanel)=>{
        setActiveIndex(index);
        if(hasPanel){
            setPanel(prev=>{
                if(prev?.show){
                    return {
                        show:false,
                        index
                    }
                }else{
                    return {
                        show: true,
                        index
                    }
                }
            })
        }
        if(panel?.show){
            setPanel(prev=>{
                return {
                    index,
                    show: false
                }
            })
        }
    }

    const Children = React.Children.map( children, (child, index)=>{
        if(child.type === MenuIndex){
            return React.cloneElement( child, { activeIndex: activeIndex === index, onActive, index});
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

const MenuIndex = ({children, activeIndex, onActive, index, arrowOnHover, hasPanel })=>{

    const [arrow, setArrow] = useState(false);
    const showArrow = ()=> arrowOnHover ? arrow ? setArrow(false) : setArrow(true) : null;

    return(
        <div className={`menu__index ${activeIndex ? 'active' : ''}`}
            onClick={()=>onActive(index, hasPanel)}
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

const SidePanel = ({ children })=>{

    return(
        <div className={`sidemenu__sidepanel`}>
            { children }
        </div>
    )

}

Sidebar.SidePanel = SidePanel;

export default Sidebar;