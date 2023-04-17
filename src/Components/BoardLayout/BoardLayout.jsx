import React, { useState, useRef, useEffect, useCallback } from 'react';
// import Tables from './templates/Tables/Tables';
// import Column from 'antd/lib/table/Column';
import './stylesheet.scss';
// import BoardActions from './BoardActions/BoardActions';
import composedTableLayout from './WithLayout/WithTable/WithTableLayout';
import ThemeContext from '../../theme/themeContext';
import { useContext } from 'react';
import InputTableField from './TableFields/Input/Input';
import { initialiseTaskTable, taskNameUpdate } from './helpers/boardTasksUpdateHelper';
import { debounce } from 'lodash';
import useSaveTransaction from '../../helpers/hooks/useSaveTransaction';


const BoardLayout = (props)=>{

    const [layout, setLayout] = useState();
    const [taskMap, setTaskMap] = useState();
    const [activeInput, setInput] = useState({id: null, index:null});
    const { boardTasks, type } = props;
    const [tasks, setTasks] = useState(boardTasks);
    const { theme } = useContext(ThemeContext);
    const activeHeaderRef = useRef([]);
    const boardTasksArray = taskMap ? Array.from(taskMap.values()) : [];
    const saveTransaction = useSaveTransaction();
    useEffect(()=>{

        initialiseTaskTable(props.boardTasks, setTaskMap);

    },[props.boardTasks])

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
    const handleNameChange = useCallback(
        debounce((value, id, taskMap)=>{
            taskNameUpdate(taskMap, value, id, setTaskMap); 
            saveTransaction(value, 'name', id);
        }, 400), []);

    useEffect(()=>{

        console.log("taskMap updated");

    },[taskMap, setTaskMap])


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
                         {boardTasksArray && boardTasksArray.length 
                            ? boardTasksArray.map((task, index)=>{
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
                                                    onClick = {e=>setInput(prev=>{
                                                        if(prev?.index !== index){
                                                            return {
                                                                index,
                                                                id: task?._id
                                                            }
                                                        }
                                                        return {
                                                            ...prev
                                                        }
                                                    })}>
                                                        { 
                                                            activeInput && activeInput?.index === index ?
                                                            <InputTableField taskMap = {taskMap} id = {task?._id} value = {task.name} changeHandler = {handleNameChange}/>
                                                            : <>{task.name}</>
                                                        }
                                                </div>
                                                
                                            </td>
                                            <td className='status' onClick={()=>setInput(null)}>
                                                <div className={`status-value ${task.status.trim().split(" ").join("-").toLowerCase()} ${theme}`}>
                                                    {task.status}
                                                </div>
                                                
                                            </td>
                                            <td className='assignee' onClick={()=>setInput(null)}>
                                                {task.assignee}
                                            </td>
                                            <td className='label' onClick={()=>setInput(null)}>
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