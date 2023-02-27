import React, { useState } from "react";
import shortid from "shortid";
import iconsMap from "../../../IconsMapper/IconsMap";
import './stylesheet.scss';


const MoreOptions = ({handleMoreAction})=>{

    const options = ["Archive", "Delete Task", "Save and Exit"]

    return(
    <div className="more-options-container">
       {options.map((option, index)=>{
        return (
            <div className = "options-index" key={shortid.generate()+index} onClick={()=>handleMoreAction(option)} >
                {option}
            </div>
        )
       })}
    </div>)

}

const TaskActionBar = ({currentTaskStatus, handleClose, handleEdit, handleShare, editEnabled, handleMoreAction}) => {

    const [showMore, setMore] = useState(false);
    const handleMore =(e)=>{
        e.preventDefault();
        setMore(!showMore);
    }


    return(
        <div className="actions-container">
            <div className="icons-container">
                {<button type="submit" disabled={!editEnabled}> 
                { currentTaskStatus === "loading" 
                    ? <span style={{color:'green'}}>Creating...{iconsMap.loading(18)}</span> 
                    : editEnabled && currentTaskStatus !== "succeeded" ? iconsMap.create(18) : iconsMap.save(18) } 
                </button>}
            </div>
            <div className="icons-container">
                {<button sx={{
                    background:'transparent',
                    border:'none'
                }}
                onClick={(e)=>handleShare(e)}
                >
                    {iconsMap.share(18)}
                </button>}
            </div>
            <div className="icons-container">
                {<button 
                onClick={e=>handleEdit(e)}
                sx={{
                    background:'transparent',
                    border:'none'
                }}>
                    {iconsMap.edit(editEnabled, 18)}
                </button>}
            </div>
            <div className="icons-container">
                {<button
                    onClick={e=>handleMore(e)}
                    sx={{
                    background:'transparent',
                    border:'none'
                    }}>
                    {iconsMap.more(18, 800, showMore)}
                </button>}
                { showMore ? <MoreOptions handleMoreAction = {handleMoreAction}/> : null}
            </div>
            <div className="icons-container"
                onClick={(e)=>handleClose(e)}>
                {iconsMap.close(18)}
            </div>
        </div>
    )

}


export default TaskActionBar;