import React, { useState } from 'react';
import Tables from './templates/Tables/Tables';
import Column from 'antd/lib/table/Column';
import './stylesheet.scss';
import BoardActions from './BoardActions/BoardActions';
import composedTableLayout from './WithLayout/WithTable/WithTableLayout';
import ThemeContext from '../../theme/themeContext';
import { useContext } from 'react';

const BoardLayout = (props)=>{

    const [layout, setLayout] = useState();
    const { boardTasks, type } = props;
    console.log("boardTasks:: ",boardTasks);
    console.log("boardTasks:: ",boardTasks);
    console.log("Type:: ",type);
    const { theme } = useContext(ThemeContext);
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
                                        <tr className={`table-row ${theme}`}>
                                            <td className='sequence'>
                                                <div>
                                                    {key+1}
                                                </div>
                                                
                                            </td>
                                            <td className='name'>
                                                <div className='task-name'>
                                                    {task.name}
                                                </div>
                                                
                                            </td>
                                            <td className='status'>
                                                <div className={`status-value ${task.status.trim().split(" ").join("-").toLowerCase()} ${theme}`}>
                                                    {task.status}
                                                </div>
                                                
                                            </td>
                                            <td className='assignee'>
                                                {task.assignee}
                                            </td>
                                            <td className='label'>
                                                <div className={`label-value ${task.label.trim().split(" ").join("-").toLowerCase()} ${theme}`}>
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