import React from 'react';
import { Navigate } from "react-router-dom";
import loadable from '@loadable/component'

// Layout
import AuthLayout from '../layout/Auth/index';

// App views
const Login = loadable(() => import('../views/Auth/Login'));
const Register = loadable(() => import('../views/Auth/Register'));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <AuthLayout />,
    children: [
        {
            path: '/',
            element: <Navigate replace to="auth/login" />
        },
        {
            path: '/auth/login',
            element: <Login/>
        },
        {
            path: '/auth/register',
            element: <Register />
        }
    ]
};

export default MainRoutes;