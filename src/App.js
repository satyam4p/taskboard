import React, { useState, useEffect } from 'react';
import { routes } from './routes';
import { Route, Routes } from 'react-router';
import Layout from './Components/Layout';
import RequireAuth from './Components/RequireAuth';
import shortid from 'shortid';

function App() {
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
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Layout/>}>
          {routes.map((routes, key)=>{
            if(routes.AuthRequired){
              return <Route element={<RequireAuth/>} key={shortid.generate()+key}>
                <Route path={routes.path} element={<routes.component/>} key={shortid.generate()+key}/>
              </Route>
            }
            return <Route path={routes.path} element={<routes.component/>} key={shortid.generate()+key}/>
          })}
        </Route>
      </Routes> 
    </React.Fragment>
  );
}

export default App;
