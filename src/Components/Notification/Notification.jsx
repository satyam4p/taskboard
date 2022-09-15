import React from 'react';
import './stylesheet.scss';


const Notification = ({notificationOn, notificationText, setNotification}) => {
    if(notificationOn){
        setTimeout(()=>{
            setNotification(false);
        },2000);
    }
    return(
        <div className='notification'>
            <h6>{notificationText}</h6>
        </div>
    )
}

export default Notification;