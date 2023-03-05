/** @jsxImportSource theme-ui */
import { Flex } from "theme-ui";
import useAuth from "../../../helpers/hooks/useAuth";
import useAxiosPrivate from "../../../helpers/hooks/useAxiosPrivate";
import './stylesheet.scss';
import useTheme from "../../../helpers/hooks/useTheme";

const LOGOUT_URL = 'auth/logout';
const LOGOUT_ALL_URL = 'auth/logoutAll'

const ProfileTogggle =(props)=>{

    const { setAuth } = useAuth();
    const axiosPrivate = useAxiosPrivate();

    const handlLogout= async (e, type)=>{
        type === 'all' 
            ? await axiosPrivate.post(LOGOUT_ALL_URL) 
            : await axiosPrivate.post(LOGOUT_URL); 
        setAuth({});
    }

    const [changeTheme, theme] = useTheme();

    return(
        <div className={`profile-panel-container ${theme === "light" ? "primary" : "secondary"}`}>
            <div classname = "items-container">
                <div className="profile-item">
                    <button>Your Profle</button>
                </div>
                <div sx={{
                        width:'95%',
                        height:'0.8px',
                        bg:"#CECECE",
                        alignSelf:'center',
                        margin:'0px',
                    }}/>
                <div className="profile-item">
                    <button onClick={e=>handlLogout(e)}>Sign Out</button>
                    <button onClick={e=>handlLogout(e, 'all')}>Sign Out All</button>
                </div>
            </div>
        </div>
    )

}

export default ProfileTogggle;