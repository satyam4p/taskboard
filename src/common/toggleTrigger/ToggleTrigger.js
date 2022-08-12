import React from 'react';
import './stylesheet.scss'

const ToggleTrigger = ({collapse, setCollapse}) =>{
    const handleToggle=()=>{
        setCollapse(prevCollapse=>{
            return !prevCollapse;
        })
    }
    return(
        <div className={`toggle-container collapse-${collapse}`}>
            <span className={`toggle-arrow collapse-${collapse}`} onClick={handleToggle}>
                <span></span>
                <span></span>
            </span>
        </div>
    )
}

export default ToggleTrigger;