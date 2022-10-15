import React from 'react'
;import { BrowserRouter, Switch } from 'react-router-dom';
import { Navigate, Route } from 'react-router';

const Login = React.lazy(()=> import('./views/auth'));
const Logout = React.lazy(()=> import('./views/logout'));

const Home = React.lazy(()=> import('./views/home'));


const PrivateRoute =( { Component, ...rest } )=>(
    <Route 
        {...rest}
        render = {(props)=>{
            const isAuthenticated = isAuthenticated();
            if(!isAuthenticated){
                return (
                    <Navigate
                        to = {{pathName: '/login' }}
                    />
                )
            }
            return <Component {...props} />
        }}
    />
);

const routes = [

    /**auth routes */
    { path: '/login', name: 'Login', component: Login, route: Route },
    { path: 'logout', name: 'Logout', component: Logout, route: Route},

    /**private routes */
    { path:'/home', name:'Home', component: Home, route: PrivateRoute},
]

export { routes, PrivateRoute };




