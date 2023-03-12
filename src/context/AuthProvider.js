import { createContext, useState } from "react";
import { authProvider } from "../helpers/authProvider/authProvider";
import useAxiosPrivate from "../helpers/hooks/useAxiosPrivate";
import urlSchema from '../network/urlSchema/urlSchema.json';
import { useNavigate } from "react-router";

const AuthContext = createContext({});

export const AuthProvider=({ children })=>{
    const axiosPrivate = useAxiosPrivate();
    const [ auth, setAuth] = useState({});
    const [ showNotification, setNotification] = useState(false);
    const [ notificationText, setNotificationText ] = useState();
    const [ notificationType, setNotificationType ] = useState();

    const signIn = (data, callback)=>{

        authProvider.signIn(data, (error, isAuthenticated, {user, token})=>{
            
            if(error){
                console.log("error occured while signing in:: ",error);
                setAuth(null);
                return;
            }
            setAuth({
                isAuthenticated,
                user,
                token
            })
            callback(isAuthenticated);
        })

    }
    const signOut = async (type) =>{
        const LOGOUT = urlSchema.Auth.LOGOUT;
        const LOGOUT_ALL = urlSchema.Auth.LOGOUT_ALL;
        const response =  type === 'all' 
            ? await axiosPrivate.post(LOGOUT_ALL) 
            : await axiosPrivate.post(LOGOUT); 
        
        if(response.status ===  200){
            setAuth({});
            authProvider.isAuthenticated = false;
        }
    }

    return(
        <AuthContext.Provider value={{ auth, setAuth, signIn, signOut, showNotification, 
            setNotification, notificationType, setNotificationType, notificationText, setNotificationText}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;