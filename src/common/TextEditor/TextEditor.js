import React, {useEffect, useContext, useState} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './stylesheet.scss';


const TextEditor = ()=>{
    
    const [editorState, setEditorState] = useState(()=>{
        EditorState.createEmpty();
    });
    useEffect(()=>{
        console.log("editorState:: ",editorState)
    },[ editorState ]);

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
