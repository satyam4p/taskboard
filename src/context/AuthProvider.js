import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider=({ children })=>{

    const [ auth, setAuth] = useState({});
    const [ showNotification, setNotification] = useState(false);
    const [ notificationText, setNotificationText ] = useState();
    const [ notificationType, setNotificationType ] = useState();

    return(
        <AuthContext.Provider value={{ auth, setAuth, showNotification, 
            setNotification, notificationType, setNotificationType, notificationText, setNotificationText}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;