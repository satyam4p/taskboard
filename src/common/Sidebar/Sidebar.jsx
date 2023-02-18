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

    return(
        <SideMenuContext.Provider value={{activeIndex, setActiveIndex}}>
            <div className={`sidemenu-container ${showSideMenu ? 'show' : 'hide'}`}>
                { children }
            </div>
        </SideMenuContext.Provider>
    )
}

const MenuList = ({children})=>{

    const { activeIndex, setActiveIndex } = useSideMenuContext();
    const onActive = (index)=>setActiveIndex(index);
    const Children = React.Children.map( children, (child, index)=>{
        if(child.type === MenuIndex){
            return React.cloneElement( child, { activeIndex: activeIndex === index, onActive, index });
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

const MenuIndex = ({children, activeIndex, onActive, index, arrowOnHover })=>{

    const [arrow, setArrow] = useState(false);
    const showArrow = ()=> arrowOnHover ? arrow ? setArrow(false) : setArrow(true) : null;

    return(
        <div className={`menu__index ${activeIndex ? 'active' : ''}`}
            onClick={()=>onActive(index)}
            onMouseOver={()=>showArrow()} 
            onMouseLeave={()=>showArrow()}>
            {children}
            {arrow ? iconsMap.doubleRightArror(16) : null}
        </div>
    )
}

Sidebar.MenuIndex = MenuIndex;


export default Sidebar;