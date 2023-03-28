import React, { useState } from 'react';
import Tables from './templates/Tables/Tables';
import Column from 'antd/lib/table/Column';
import './stylesheet.scss';
import BoardActions from './BoardActions/BoardActions';
import composedTableLayout from './WithLayout/WithTable/WithTableLayout';

const BoardLayout = (props)=>{

    const [layout, setLayout] = useState();
    const { boardTasks, type } = props;
    console.log("boardTasks:: ",boardTasks);
    console.log("boardTasks:: ",boardTasks);
    console.log("Type:: ",type);
    return(
        <div className='board-layout'>
            <BoardActions/>   

            <div className='layout-container'>
                <table>
                    <thead>
                        <th>
                            #
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Assignee
                        </th>
                        <th>
                            label
                        </th>
                    </thead>
                    <tbody>
                         {boardTasks && boardTasks.length 
                            ? boardTasks.map((task, key)=>{
                                    return(
                                        <tr className='task-card'>
                                            <td>
                                                {key+1}
                                            </td>
                                            <td>
                                                {task.name}
                                            </td>
                                            <td>
                                                {task.status}
                                            </td>
                                            <td>
                                                {task.assignee}
                                            </td>
                                            <td>
                                                {task.label}
                                            </td>
                                        </tr>
                                    )
                                })
                            : null    
                        }
                    </tbody>
                    
                </table>
               
            </div> 
        </div>
    )

}



export default composedTableLayout(BoardLayout);