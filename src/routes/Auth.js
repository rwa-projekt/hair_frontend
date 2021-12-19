import React from 'react';
import { Navigate } from "react-router-dom";
import loadable from '@loadable/component'

// Layout
import AuthLayout from '../layout/Auth/index';
import { RequireUser } from '../auth'

// App views
const Login = loadable(() => import('../views/Auth/Login'));
const Register = loadable(() => import('../views/Auth/Register'));

// ==============================|| MAIN ROUTING ||============================== //

const AuthRoutes = {
    path: '/',
    element: 
        <RequireUser>
            <AuthLayout />
        </RequireUser>,
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

export default AuthRoutes;