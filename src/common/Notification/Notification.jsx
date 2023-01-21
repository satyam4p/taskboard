import React from 'react';
import useAuth from '../../helpers/hooks/useAuth';
import './stylesheet.scss';


const Notification = () => {
    const { setNotification, notificationType, notificationText } = useAuth();

    return(
        <div className={`notification ${notificationType}`}>
            <div onClick={ e => setNotification(false)} className='close'>[X]</div>
            <div>
                <h4>{notificationText}</h4>
            </div>
            
        </div>
    )
}

export default Notification;