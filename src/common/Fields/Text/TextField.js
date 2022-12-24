import React, { useState } from "react";
import { Input } from 'antd';

const { TextArea } = Input;

const TextField = () => {

    const [value, setValue] = useState();

    return(
        <TextArea
            value = {value}
        />
    )

}

export default TextField;

