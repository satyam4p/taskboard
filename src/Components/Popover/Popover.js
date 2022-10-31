/** @jsxImportSource theme-ui */
import React from "react";

const Popover=( { actions } )=>{
    console.log("actions:: ",actions);
    return actions.length > 0 ? (
        <div sx={{
            display:'flex',
            flexDirection:'column',
            minWidth:'80%',
            position:'absolute',
            zIndex:'100',
            left:'calc(100%)',
            background:'#CAD8D0',
            // color:'#',
            alignItems:'flex-start',
            justifyContent:'left',
            borderRadius:'4px',
            '&::before':{
                content:'""'
            }
        }}>
            <ul sx={{
                px:'10px',
                listStyle:'none',
                fontSize:1
            }}>
                {actions.map(( action,key )=>{

                    return(
                        <li key={key} sx={{
                            py:'3px'
                        }}>
                            {action.label}
                        </li>
                    );
                })}
            </ul>
        </div>
        )
     : null
}

export default Popover;