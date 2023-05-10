import { useEffect, useState } from "react";
import useProfile from "../../helpers/hooks/useProfile";
import { selectUserProfile, selectStatus, selectError } from "../../features/profile/profileSlice";
import { useSelector } from "react-redux";
import './stylesheet.scss';

const UserProfile = ( props )=>{
    const userProfile = useSelector(selectUserProfile);
    const profileStatus = useSelector(selectStatus);
    const profileError = useSelector(selectError);
    const [getUserProfile, profileCallEnded] = useProfile();
    useEffect(()=>{
       getUserProfile();
    },[profileCallEnded]);

    return(
        <div className="user-profile">
            <div className="user-profile-image-container">
                <img className="user-profile-image" src={`${userProfile?.profile}`} alt="profile"/>
            </div>
            
        </div> 
    )
}   

export default UserProfile;