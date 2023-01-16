import React, {useEffect, useContext, useState, useCallback} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertToRaw, convertFromRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import TaskContext from '../Modals/Task/TaskContext/TaskProvider';
import './stylesheet.scss';
import debounce from '../../helpers/commonUtils/debounce';
import { cloneDeep } from 'lodash';


const TextEditor = ()=>{
    
    const [editorState, setEditorState] = useState(()=>{
        EditorState.createEmpty();
    });
    const { task, setTask } = useContext(TaskContext); 
    
    useEffect(()=>{
        console.log("editorState:: ",editorState);
        if(editorState !== undefined){
            const currentState = editorState.getCurrentContent();
            console.log("EditorState:: ",convertToRaw(currentState));
        }
    },[ editorState ]);

    const updateParentState = useCallback(
        debounce((editorState)=>{
            setTask(prevTask=>{
                const currentState = editorState.getCurrentContent();
                const rawContent = convertToRaw(currentState);
                let taskClone = cloneDeep(task);
                taskClone.taskData['description'] = rawContent;
                return {
                    ...prevTask,
                    taskData: taskClone.taskData
                }
                })
            
        },4),[])

    return(
        <div className= 'text-editor--container'>
            <Editor
                editorState={editorState}
                onEditorStateChange = {setEditorState}
                toolbar={{
                    options: ['inline', 'fontSize', 'fontFamily', 'history'],
                    'fontFamily':{
                        options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
                    }
                  }}
            />
        </div>
    )
}
export default TextEditor;
