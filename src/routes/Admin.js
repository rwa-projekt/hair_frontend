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
const HairstylesForm = loadable(() => import('../views/Admin/Hairstyles/views/Form'));
const HairstylesEmpty = loadable(() => import('../views/Admin/Hairstyles/views/Empty'));
const Workers = loadable(() => import('../views/Admin/Workers'));
const WorkersForm = loadable(() => import('../views/Admin/Workers/views/Form'));
const WorkersEmpty = loadable(() => import('../views/Admin/Workers/views/Empty'));


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
            element: <Navigate to="/admin" />
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
                    element: <Navigate to="hairstyles" />
                },
                // {
                //     path: 'dashboard',
                //     element: <Dashboard/>
                // },
                {
                    path: 'hairstyles',
                    element: <Hairstyles/>,
                    children: [
                        {
                            path: '*',
                            element: <HairstylesForm />
                        },
                        {
                            path: '',
                            element: <HairstylesEmpty />
                        },
                    ]
                },
                // {
                //     path: 'workers',
                //     element: <Workers/>,
                //     children: [
                //         {
                //             path: '*',
                //             element: <WorkersForm />
                //         },
                //         {
                //             path: '',
                //             element: <WorkersEmpty />
                //         },
                //     ]
                // }
            ]
        },
    ]
};

export default AdminRoutes;