
import React, { useState } from 'react';
import { Select, Box } from 'theme-ui';

//this array will be obtained from the api call or prop

const getOptions = ()=> {
  return new Promise((resolve, reject) => setTimeout(resolve(
    ['hello',
      'blah',
      'hjasdv',
      'yiqwe',
      'Hi']
  ), 2000 )); 
}

const LookupField = () => {
    const [options, setOptions] = useState([]);
    const handleChange = () =>{
      console.log("change clicked");
    }
    const handleClick= async ()=>{
      if(options.length > 0){
        return;
      }
      const optionsList = await getOptions();
      console.log("options list:: ",optionsList);
      setOptions(optionsList);
    }

  return(
    <Select sx = {{
        minWidth:'120px'
      }} 
    defaultValue="Hello"
    arrow = {
      <Box
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentcolor"
        sx={{
          ml: -28,
          alignSelf: 'center',
          pointerEvents: 'none',
        }}>
        <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
      </Box>
    }
      onClick={handleClick}
      onChange={handleChange}
      >
      {options.map((option, key)=>{
        return (
            <option key={key}>
              {option}
            </option>
        )
      })}
      </Select>
  );
  
}
  

export default LookupField;