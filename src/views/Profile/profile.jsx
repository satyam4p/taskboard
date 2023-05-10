import { useEffect, useState } from "react";
import useProfile from "../../helpers/hooks/useProfile";

const UserProfile = ( props )=>{

    const [getUserProfile, profileCallEnded] = useProfile();
    useEffect(()=>{
       getUserProfile();
    },[profileCallEnded]);

    return(
        <div>
            User Profile
        </div> 
    )
}   

export default UserProfile;