import { useEffect, useState } from "react";
import useAxiosPrivate from "./useAxiosPrivate"

const useProfile = () =>{
    const [profileCallEnded, setprofileCallEnded] = useState(false);
    const [userProfile, setUserProfile] = useState(null);
    const axiosPrivate = useAxiosPrivate();
    const getUserProfile = async ()=>{
        try{
            const userProfile = await axiosPrivate.get('/auth/me');
            setprofileCallEnded(true);
            return userProfile;
        }catch(error){
            console.log("an error occured while fetching profile:: ",error);
        }
    }
    useEffect(()=>{
        getUserProfile().then(response=>{
            if(response.data){
                setUserProfile(response.data);
            }
        }).catch(error=>{
            console.log("an error occured while fetching profile:: ",error);
        });
    },[])
    
    return userProfile;   
}
export default useProfile;