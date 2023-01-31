import React, { useState, useEffect } from 'react';

/** custom style */
import './stylesheet.scss';

const AddDrawer = ({showDrawer})=>{

   


    return(
        <div className={`drawer-container ${showDrawer ? 'show' : 'hide'}`}>

        </div>
    )
}

export default AddDrawer;