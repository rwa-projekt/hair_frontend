import React from 'react';
import { Navigate } from "react-router-dom";
import loadable from '@loadable/component'

// Layout
import { RequireAdmin as AuthGuard } from '../auth'
import AdminLayout from '../layout/Admin/index';

// App views
const NotFound = loadable(() => import('./fallback-routes/404'));
const Dashboard = loadable(() => import('../views/Admin/Dashboard'));

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
                }
            ]
        },
    ]
};

export default AdminRoutes;