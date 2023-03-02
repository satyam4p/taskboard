/** @jsxImportSource theme-ui */
import { useContext } from 'react';
import iconsMap from '../../common/IconsMapper/IconsMap';
import ThemeContext from '../../theme/themeContext';
import ProfileTogggle from './Profile/ProfileToggle';
import './stylesheet.scss';


function SecondaryBar({ 
    setToggleSideMenu, 
    toggleProfile,
    setToggleProile,
    setToggleAddMenu,
    showSideMenu }){
    
        const {theme, setTheme} = useContext(ThemeContext);
    

    return(
        <>
            <div className = {`secondary-bar-container ${theme === "light" ? "" : "secodnary-dark"}`}>
                <button className='hamburger-btn'
                        onClick={()=>{
                        setToggleSideMenu((prev)=>!prev)
                        setToggleAddMenu(false)
                    }}>
                        <div className={`bar bar1 ${showSideMenu ? 'showSideMenu' : '' }`}/>
                        <div className={`bar bar2 ${showSideMenu ? 'showSideMenu' : '' }`} />
                        <div className={`bar bar3 ${showSideMenu ? 'showSideMenu' : '' }`} />
                </button>
                <div className='right-section'>
                    <button className='theme-change-btn' onClick={()=>setTheme( theme === "light" ? "dark" : "light")}>
                        {iconsMap.theme(24)}
                    </button>
                    <button className='profile-btn'
                            onClick={()=>setToggleProile(!toggleProfile)} />
                </div>
                
            </div>

            {toggleProfile && <ProfileTogggle />}
        </>

    )
}



export default SecondaryBar;