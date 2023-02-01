import React, { useState, useEffect } from 'react';

import DrawerLoader from './loader/DrawerLoader';

/** custom style */
import './stylesheet.scss';

const AddDrawer = ({showDrawer, config})=>{

    return(
        <div className={`drawer-container ${showDrawer ? 'show' : 'hide'}`}>
            <DrawerLoader/>
        </div>
    )
}

export default AddDrawer;