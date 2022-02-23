import React from 'react';
import { Navigate } from "react-router-dom";
import loadable from '@loadable/component'
import { useAuth } from '../auth'

// Layout
import { RequireAuth as AuthGuard } from '../auth'
import MainLayout from '../layout/App/index';

// App views
const NotFound = loadable(() => import('./fallback-routes/404'));
const Logout = loadable(() => import('../views/Auth/Logout'));
const Dashboard = loadable(() => import('../views/App/Dashboard'));
const Appointments = loadable(() => import('../views/App/Appointments'));
const Hairstyles = loadable(() => import('../views/App/Hairstyles'));
const Workers = loadable(() => import('../views/App/Workers'));
const UsersWorkers = loadable(() => import('../views/App/Workers/components/Workers'));
const UsersClients = loadable(() => import('../views/App/Workers/components/Clients'));
const History = loadable(() => import('../views/App/History'));
const Profile = loadable(() => import('../views/App/Profile'));

// ==============================|| MAIN ROUTING ||============================== //


export default function AppRoutes(){

    const { hasPermission } = useAuth()
    const hasViewClientsPermission = hasPermission('view_client')

    const AppRoutes = {
        path: '/',
        element: 
            <AuthGuard>
                <MainLayout />
            </AuthGuard>,
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
                path: '/users',
                element: <Workers />,
                children: hasViewClientsPermission && [
                    {
                        path: '',
                        element: <Navigate replace to="workers" />
                    },
                    {
                        path: 'workers',
                        element: <UsersWorkers />
                    },
                    {
                        path: 'clients',
                        element: <UsersClients />
                    }
                ]
            },
            {
                path: '/history',
                element: <History />
            },
            // {
            //     path: '/user/me',
            //     element: <Profile />
            // },
        ]
    };

    return AppRoutes
    
}