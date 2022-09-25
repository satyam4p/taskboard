
import { useState, useEffect } from 'react';
import './App.css';
import Home from './views/home';
import SideMenu from './Components/SideMenu/SideMenu';
function App() {

  const [toggleSideMenu, setToggleSideMenu] = useState(true);

  // const [inputData, setInputData] = useState({
  //   firstName:"",
  //   lastName:""
  // });
  // const [constactData, setContacts] = useState([]);
  // const handleInput = (event) =>{
  //   let {name, value} = event.target;
  //   setInputData(prevInput=>{
  //     return {
  //       ...prevInput,
  //       [name] : value
  //     }
  //   })
  // }
  // const handleSubmit = (event) =>{
  //   event.preventDefault();
  //   setContacts(prevContacts => {
  //     return [
  //       ...prevContacts,
  //       inputData
  //     ]
  //   })
  // }
  // let contacts =  constactData.map(data=>{
  //   return(
  //     <div key={data.firstName + data.lastName}>
  //     {data.firstName} {data.lastName}
  //   </div>
  //   )
  // });
  return (
    <div>
      {
        toggleSideMenu && <SideMenu />
      }
      <Home
        setToggleSideMenu = {setToggleSideMenu}
      />

    </div>
  );
}

export default App;
