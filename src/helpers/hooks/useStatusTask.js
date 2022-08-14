import React, { useState } from 'react';


const useStatusTask=(taskList, status='New')=>{
    const [taskAsPerStatus, setTaskAsperStatus] = useState([]);

    function getTaskAsperStatus(){
        let taskArray = taskList.filter( task => task.status == status );
        setTaskAsperStatus([...taskArray]);
    }
    return [taskAsPerStatus, getTaskAsperStatus];
}
export default useStatusTask;
