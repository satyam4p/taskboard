/** @jsxImportSource theme-ui */
import { Box, Flex } from "theme-ui";
import useAuth from "../../../helpers/hooks/useAuth";
import useAxiosPrivate from "../../../helpers/hooks/useAxiosPrivate";

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

    return(
        <Box sx={{
            width:'200px',
            height:'400px',
            background:'#F6F6F6',
            position:'absolute',
            top:'70px',
            right:'40px',
            borderRadius:'4px',
            zIndex:'300',
        }}>
            <Flex sx={{
                flexDirection:'column',
                padding:'10px',
                alignItems:'flex-start',
            }}>
                <div sx={{
                    width:'95%',
                    mx:'5px',
                    my:'5px',
                    alignSelf:'center',
                }}>
                    <button
                         sx={{
                            width:'100%',
                            height:'inherit',
                            border:'none',
                            borderRadius:'5px',
                            bg:'transparent',
                            margin:0,
                            padding:'5px',
                            textAlign:'left',
                            alignSelf:'center',
                            '&:hover':{
                                bg:'#DFDFDF',
                                cursor:'pointer'
                            },
                            display:'flex',
                            alignItems:'center',
                            fontSize:"12px"
                        }}>Your Profle</button>
                </div>
                <div sx={{
                        width:'95%',
                        height:'0.8px',
                        bg:"#CECECE",
                        alignSelf:'center',
                        margin:'0px',
                    }}/>
                <div sx={{
                    width:'95%',
                    mx:'5px',
                    my:'5px',
                    alignSelf:'center'
                }}>
                    <button
                         sx={{
                            width:'100%',
                            height:'inherit',
                            border:'none',
                            borderRadius:'5px',
                            bg:'transparent',
                            margin:0,
                            padding:'5px',
                            textAlign:'left',
                            alignSelf:'center',
                            '&:hover':{
                                bg:'#DFDFDF',
                                cursor:'pointer'
                            },
                            display:'flex',
                            alignItems:'center',
                            fontSize:"12px"
                        }}
                        onClick={e=>handlLogout(e)}
                        >Sign Out</button>
                         
                    <button
                        sx={{
                            width:'100%',
                            height:'inherit',
                            border:'none',
                            borderRadius:'5px',
                            bg:'transparent',
                            margin:0,
                            padding:'5px',
                            textAlign:'left',
                            alignSelf:'center',
                            '&:hover':{
                                bg:'#DFDFDF',
                                cursor:'pointer'
                            },
                            display:'flex',
                            alignItems:'center',
                            fontSize:"12px"
                        }}
                        onClick={e=>handlLogout(e, 'all')}
                        >Sign Out All</button>
                </div>
            </Flex>
        </Box>
    )

}

export default ProfileTogggle;