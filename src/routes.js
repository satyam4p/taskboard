import React from 'react'

const Login = React.lazy(()=> import('./views/auth'));
const Logout = React.lazy(()=> import('./views/logout'));

const Home = React.lazy(()=> import('./views/home'));
const Board = React.lazy(()=>import('./views/board'));

const routes = [
    /**auth routes */
    { path: '/login', component: Login, AuthRequired: false },
    { path: '/logout', component: Logout, AuthRequired: false},

    /**private routes */
    { path:'/', name:'Home', component: Home, AuthRequired: true},
    { path:'/board', name:'Board', component: Board, AuthRequired: true}
]

export { routes };




