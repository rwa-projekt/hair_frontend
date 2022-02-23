import { useRoutes } from 'react-router-dom'

// Routes
import AppRoutesHook from './App'
import AuthRoutes from './Auth'
import SiteRoutes from './Site'
import AdminRoutes from './Admin'

// ==============================|| ROUTING RENDER ||============================== //

export default function Routes() {

    const AppRoutes = AppRoutesHook()

    return useRoutes([SiteRoutes, AuthRoutes, AppRoutes, AdminRoutes], '')
}