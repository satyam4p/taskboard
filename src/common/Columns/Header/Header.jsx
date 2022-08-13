import React from 'react';
import { Typography }  from 'antd';

const { Title } = Typography;


const Header = ({colType})=>{
    
    return(
        <Title className='col-header' level={5}>{colType}</Title>
    )
}

export default Header;