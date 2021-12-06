import React from 'react';
import { Navigate } from "react-router-dom";
import loadable from '@loadable/component'

// Layout
import MainLayout from '../layout/App/index';

// App views
const NotFound = loadable(() => import('./fallback-routes/404'));
const Logout = loadable(() => import('../views/Auth/Logout'));
const Dashboard = loadable(() => import('../views/App/Dashboard'));
const Appointments = loadable(() => import('../views/App/Appointments'));
const Hairstyles = loadable(() => import('../views/App/Hairstyles'));
const Workers = loadable(() => import('../views/App/Workers'));
const History = loadable(() => import('../views/App/History'));
const Profile = loadable(() => import('../views/App/Profile'));
const General = loadable(() => import('../views/App/Profile/components/General'));
const ChangePassword = loadable(() => import('../views/App/Profile/components/ChangePassword'));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '*',
            element: <NotFound />
        },
        {
            path: '/',
            element: <Navigate replace to="/dashboard" />
        },
        {
            path: '/auth/logout',
            element: <Logout />
        },
        {
            path: '/dashboard',
            element: <Dashboard/>
        },
        {
            path: '/appointments',
            element: <Appointments />
        },
        {
            path: '/hairstyles',
            element: <Hairstyles />
        },
        {
            path: '/workers',
            element: <Workers />
        },
        {
            path: '/history',
            element: <History />
        },
        {
            path: '/user/me',
            element: <Profile />,
            children: [
                {
                    path: '',
                    element: <Navigate replace to="general" />
                },
                {
                    path: 'general',
                    element: <General />
                },
                {
                    path: 'change-password',
                    element: <ChangePassword />
                }
            ]
        },
    ]
};

export default MainRoutes;