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
            <Flex sx={{
                width:['95%', null, null],
                height:'45px',
                alignSelf:'baseline',
                marginLeft:'calc(100% - 97.5%)',
                marginTop:'1.5%',
                borderRadius:10,
                bg:'#F6F6F6',
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between'
            }}>
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
            </Flex>

            {toggleProfile && <ProfileTogggle />}
        </>

    )
}



export default SecondaryBar;