import React from 'react';
import { Navigate } from "react-router-dom";
import loadable from '@loadable/component'

// Layout
import { RequireAdmin as AuthGuard } from '../auth'
import AdminLayout from '../layout/Admin/index';

// App views
const NotFound = loadable(() => import('./fallback-routes/404'));
const Dashboard = loadable(() => import('../views/Admin/Dashboard'));
const Hairstyles = loadable(() => import('../views/Admin/Hairstyles'));
const Form = loadable(() => import('../views/Admin/Hairstyles/views/Form'));
const Empty = loadable(() => import('../views/Admin/Hairstyles/views/Empty'));


// ==============================|| MAIN ROUTING ||============================== //

const AdminRoutes = {
    path: '/',
    element: 
        <AuthGuard>
            <AdminLayout />
        </AuthGuard>,
    children: [
        {
            path: '/',
            element: <Navigate to="/admin/dashboard" />
        },
        {
            path: '/admin',
            children:[
                {
                    path: '*',
                    element: <NotFound />
                },
                {
                    path: '',
                    element: <Navigate to="dashboard" />
                },
                {
                    path: 'dashboard',
                    element: <Dashboard/>
                },
                {
                    path: 'hairstyles',
                    element: <Hairstyles/>,
                    children: [
                        {
                            path: '*',
                            element: <Form />
                        },
                        {
                            path: '',
                            element: <Empty />
                        },
                    ]
                }
            ]
        },
    ]
};

export default AdminRoutes;