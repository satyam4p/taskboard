import React from 'react';


const useStatusTask=(taskList, status='New')=>{
    const taskAsPerStatus = taskList.filter( task => task.status == status );
    return [taskAsPerStatus];
}
export default useStatusTask;
