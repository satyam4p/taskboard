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
            {/* <BoardActions/>    */}

            <div className='layout-container'>
                <table className='board-table'>
                    <thead className='table-header'>
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
                    <tbody className='table-body'>
                         {boardTasks && boardTasks.length 
                            ? boardTasks.map((task, key)=>{
                                    return(
                                        <tr className='table-row'>
                                            <td className='sequence'>
                                                {key+1}
                                            </td>
                                            <td className='name'>
                                                {task.name}
                                            </td>
                                            <td className='status'>
                                                <div className={`status-value ${task.status.trim().split(" ").join("-").toLowerCase()}`}>
                                                    {task.status}
                                                </div>
                                                
                                            </td>
                                            <td className='assignee'>
                                                {task.assignee}
                                            </td>
                                            <td className='label'>
                                                <div className={`label-value ${task.label.trim().split(" ").join("-").toLowerCase()}`}>
                                                    {task.label}
                                                </div>
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