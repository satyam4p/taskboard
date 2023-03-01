/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui';
import ProfileTogggle from './Profile/ProfileToggle';
import './stylesheet.scss';

function SecondaryBar({ 
    setToggleSideMenu, 
    toggleProfile,
    setToggleProile,
    setToggleAddMenu,
    showSideMenu }){

    return(
        <>
            <div className = {`secondary-bar-container`}>
                <button className='hamburger-btn'
                        onClick={()=>{
                        setToggleSideMenu((prev)=>!prev)
                        setToggleAddMenu(false)
                    }}>
                        <div className={`bar bar1 ${showSideMenu ? 'showSideMenu' : '' }`}/>
                        <div className={`bar bar2 ${showSideMenu ? 'showSideMenu' : '' }`} />
                        <div className={`bar bar3 ${showSideMenu ? 'showSideMenu' : '' }`} />
                </button>
                <button className='profile-btn'
                        onClick={()=>setToggleProile(!toggleProfile)} />
            </div>

            {toggleProfile && <ProfileTogggle />}
        </>

    )
}



export default SecondaryBar;