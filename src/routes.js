import React from 'react'
;import { BrowserRouter, Switch } from 'react-router-dom';
import { Navigate, Route } from 'react-router';
import RequireAuth from './Components/RequireAuth';

const Login = React.lazy(()=> import('./views/auth'));
const Logout = React.lazy(()=> import('./views/logout'));

const Home = React.lazy(()=> import('./views/home'));

const routes = [
    /**auth routes */
    { path: '/login', component: Login, AuthRequired: false },
    { path: 'logout', component: Logout, AuthRequired: false},

    /**private routes */
    { path:'/', name:'Home', component: Home, AuthRequired: true},
]

export { routes };




