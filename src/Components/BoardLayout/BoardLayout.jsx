import React, { useState, useRef } from 'react';
// import Tables from './templates/Tables/Tables';
// import Column from 'antd/lib/table/Column';
import './stylesheet.scss';
// import BoardActions from './BoardActions/BoardActions';
import composedTableLayout from './WithLayout/WithTable/WithTableLayout';
import ThemeContext from '../../theme/themeContext';
import { useContext } from 'react';

const BoardLayout = (props)=>{

    const [layout, setLayout] = useState();
    const [activeInput, setInput] = useState();
    const { boardTasks, type } = props;
    const { theme } = useContext(ThemeContext);
    const activeHeaderRef = useRef([]);
    const [inputVal, setInputVal] = useState('');//need to find a way o set values of reach input :: maybe use userRef???
    const handleHoverAction=(e, task, index)=>{
        // if(activeHeaderRef.current[index].className && activeHeaderRef.current[index].className === "showPopup"){
        //     activeHeaderRef.current[index].className = ''
        //     // activeHeaderRef.current[index].style.color = '';
        // }else{
        //     activeHeaderRef.current[index].className = 'showPopup';
        //     // activeHeaderRef.current[index].addElement('div',)
        //     // activeHeaderRef.current[index].style.color = "blue";
        // }
        
    }
    /** change the name value and consistently view thechanged value in Ui,, i.e make it controlled input component */
    const handleNameChange= (event) =>{

        // console.log("value:: ",event.target.value );

    }

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
                            ? boardTasks.map((task, index)=>{
                                    return(
                                        <tr className={`table-row ${theme}`}>
                                            <td className='sequence'>
                                                <div>
                                                    {index+1}
                                                </div>
                                            </td>
                                            <td className='name'>
                                                <div className='task-name' ref={el => activeHeaderRef.current[index] = el} 
                                                    onMouseOut={e=>handleHoverAction(e, task, index)} 
                                                    onMouseOver={e=>handleHoverAction(e, task, index)}
                                                    onClick = {e=>setInput(prev=>prev !== index ? index : prev)}>
                                                        { 
                                                            activeInput === index ?
                                                            <>
                                                            <input style={{
                                                                width:'98%',
                                                                height:'2em',
                                                                border:'none',
                                                                boxShadow:'0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
                                                            }} value={task.name}
                                                                onChange={e=>handleNameChange(e)}
                                                            />
                                                            </>
                                                                : <>{task.name}</>
                                                        }
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