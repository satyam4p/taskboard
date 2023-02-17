import React from 'react';
import { routes } from './routes';
import { Route, Routes } from 'react-router';
import Layout from './Components/Layout';
import RequireAuth from './Components/RequireAuth';
import shortid from 'shortid';
import PersistUser from './Components/PersistUser';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Layout/>}>
          {routes.map((routes, key)=>{
            if(routes.AuthRequired){
              return(
                <Route element={<PersistUser/>} key={shortid.generate()}>
                  <Route element={<RequireAuth/>} key={shortid.generate()+key}>
                    <Route path={routes.path} element={<routes.component/>} key={shortid.generate()+key}/>
                  </Route>
                </Route>
              )  
            }
            return <Route path={routes.path} element={<routes.component/>} key={shortid.generate()+key}/>
          })}
        </Route>
      </Routes> 
    </React.Fragment>
  );
}

export default App;
