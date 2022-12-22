import React, { useState } from "react";
import Input from "antd/lib/input/Input";

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

