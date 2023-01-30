import React from "react";
import iconsMap from "../../../IconsMapper/IconsMap";
import './stylesheet.scss';

const TaskActionBar = ({currentTaskStatus, handleClose, handleEdit, handleShare, editEnabled, handleMore}) => {

    return(
        <div className="actions-container">
            <div className="icons-container">
                {<button type="submit" disabled={!editEnabled}> 
                { currentTaskStatus === "loading" 
                    ? <span style={{color:'green'}}>Creating...{iconsMap.loading()}</span> 
                    : editEnabled && currentTaskStatus !== "succeeded" ? iconsMap.create() : iconsMap.save() } 
                </button>}
            </div>
            <div className="icons-container">
                {<button sx={{
                    background:'transparent',
                    border:'none'
                }}
                onClick={(e)=>handleShare(e)}
                >
                    {iconsMap.share()}
                </button>}
            </div>
            <div className="icons-container">
                {<button 
                onClick={e=>handleEdit(e)}
                sx={{
                    background:'transparent',
                    border:'none'
                }}>
                    {iconsMap.edit(editEnabled)}
                </button>}
            </div>
            <div className="icons-container">
                {<button
                    onClick={e=>handleMore(e)}
                    sx={{
                    background:'transparent',
                    border:'none'
                    }}>
                    {iconsMap.more()}
                </button>}
            </div>
            <div className="icons-container"
                onClick={(e)=>handleClose(e)}>
                {iconsMap.close()}
            </div>
        </div>
    )

}

export default TaskActionBar;