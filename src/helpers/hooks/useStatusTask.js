import React, { useState } from 'react';


const useStatusTask=(taskList, status='New')=>{
    const [taskAsPerStatus, setTaskAsperStatus] = useState([]);

    function getTaskAsperStatus(taskList){
        console.log("taskList:: ",taskList, 'length:: ',taskList.length);
        /** reduce the main taskList into array of different object with status as their key and value as required data */
        // let taskListAsperStatuses = taskList.map
        let taskArray = taskList.filter( task => task.status == status );

        setTaskAsperStatus([...taskArray]);
    }
    return [taskAsPerStatus, getTaskAsperStatus];
}
export default useStatusTask;
