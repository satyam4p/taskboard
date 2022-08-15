import { camelCase } from 'lodash';
import React, { useState } from 'react';


const useStatusTask=()=>{
    const [taskAsPerStatus, setTaskAsperStatus] = useState([]);

    function getTaskAsperStatus(taskList, status){
        console.log("tasklist:: ",taskList);
        // console.log("taskList:: ",taskList, 'length:: ',taskList.length);
        /** reduce the main taskList into array of different object with status as their key and value as required data */
        /** the use state behaviour needs to be debugged for updating the tasklist */
        let count=0;
        if(taskList && taskList.length > 0){
            let listOfTasks = taskList.reduce((acc,curr)=>{
                count = count+1;
                if(curr.status == status){
                    acc.push({...curr});
                }
                return acc;
            },[]);
            // debugger;
            console.log("listOfTasks:: ",listOfTasks);
            setTaskAsperStatus((prevList=>{
                // debugger;
                return listOfTasks
            }));
        }
        
        // console.log("list of obj:: ",listOfTasks);
        
    }

    return [taskAsPerStatus, getTaskAsperStatus];
}
export default useStatusTask;
