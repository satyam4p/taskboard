import React,{useEffect} from "react";
import { Box } from "theme-ui";



const ProfileTogggle =(props)=>{

    return(
        <Box sx={{
            width:'200px',
            height:'400px',
            background:'lightblue',
            position:'absolute',
            top:'80px',
            right:'40px',
            borderRadius:'4px',
            zIndex:'300'
        }}>
        </Box>
    )

}

export default ProfileTogggle;