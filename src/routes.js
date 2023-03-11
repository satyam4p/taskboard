import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Login = React.lazy(()=> import('./views/auth'));
const Logout = React.lazy(()=> import('./views/logout'));

const Home = React.lazy(()=> import('./views/home'));
const Board = React.lazy(()=>import('./views/Board/board'));
const Layout = React.lazy(()=>import('./Components/Layout'));


const routes = createBrowserRouter([
    /**auth routes */
    { 
        path: '/login', 
        element:( 
            <React.Suspense>
                <Login/>,
            </React.Suspense>
            )  , 
        AuthRequired: false 
    },
    { 
        path: '/logout', 
        element: ( 
            <React.Suspense>
                <Logout/>,
            </React.Suspense>
            ) , 
        AuthRequired: false
    },

    /**private routes */
    {   
        path:'/',
        name:'Home',
        element: (
          <React.Suspense>
            <Home/>,
          </React.Suspense>  
        ),
        AuthRequired: true,
        children: [
            {
                path:'/board',
                name:'Board', 
                element: (
                    <React.Suspense fallback={<h5>loading...</h5>}>
                        <Board/>
                    </React.Suspense>
                ),
                AuthRequired: true
            }, 
        ]
    },
])

export {routes}




