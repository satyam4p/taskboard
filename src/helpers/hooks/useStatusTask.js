import { camelCase } from 'lodash';
import React, { useState } from 'react';


const useStatusTask=()=>{
    const [taskAsPerStatus, setTaskAsperStatus] = useState([]);

    function getTaskAsperStatus(taskList, status){
        // console.log("tasklist:: ",taskList);
        // console.log("taskList:: ",taskList, 'length:: ',taskList.length);
        /** reduce the main taskList into array of different object with status as their key and value as required data */
        /** the use state behaviour needs to be debugged for updating the tasklist */
        /** TODO: need to cleanup and make this whole as reusable function instead of hook- search alternatives */
        let count=0;
        let listOfTasks = []
        if(taskList && taskList.length > 0){
            listOfTasks = taskList.reduce((acc,curr)=>{
                count = count+1;
                /** need to add the index of each task that is pushed */
                if(curr.status == status){
                    acc.push({...curr});
                }
                return acc;
            },[]);
            // debugger;
            // console.log("listOfTasks:: ",listOfTasks);
            setTaskAsperStatus((prevList=>{
                // debugger;
                return listOfTasks
            }));
        }
        return listOfTasks;
        // console.log("list of obj:: ",listOfTasks);
        
    }

    return [taskAsPerStatus, getTaskAsperStatus];
}
export default useStatusTask;
