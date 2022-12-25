/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import { Input } from 'antd';

const TextField = () => {

    const [value, setValue] = useState();

    return(
        <Input
            value = {value}
            type="text"
            autoComplete="off"
            sx={{
                padding:'5px',
            }}
        />
    )

}

export default TextField;

