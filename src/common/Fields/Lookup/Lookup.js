
import React from 'react';
// import { Select } from 'antd';
import { Select, Box } from 'theme-ui';

const onChange = (value) => {
  console.log(`selected ${value}`);
};

//this array will be obtained from the api call or props
const options = [
  'hello',
  'blah',
  'hjasdv',
  'yiqwe',
  'Hi'
]

const onSearch = (value) => {
  console.log('search:', value);
};

const LookupField = () => (
  <Select sx={{
    minWidth:'120px'
  }} defaultValue="Hello"
  arrow={
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
  >
  {options.map((option, key)=>{
    return(
      <option key={key}>
        {option}
      </option>
    )
  })}
  </Select>
);

export default LookupField;