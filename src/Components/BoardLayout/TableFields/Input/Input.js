import { useEffect, useState } from "react";



const InputTableField = ({id, value, changeHandler})=>{


    const [inputValue, setinputValue] = useState(value);

    const handleNameChange = (e)=>{
        
        let value =e.target.value;
        setinputValue(value);

    }

    useEffect(()=>{

        changeHandler(inputValue, id)

    },[inputValue]);



    return(
        <input style={{
            width:'98%',
            height:'2em',
            border:'none',
            boxShadow:'0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
        }} value={inputValue}
            onChange={e=>handleNameChange(e)}
        />
    )
}

export default InputTableField;