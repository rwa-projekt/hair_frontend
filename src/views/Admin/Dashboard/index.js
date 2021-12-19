import React from 'react'
import { useNavigate} from 'react-router-dom'
import { useAuth } from '../../../auth'

// MUI
import { Button } from '@mui/material'

// Components
import PageTitle from '../../../components/PageTitle'

export default function Admin(){

    // Hooks
    const navigate = useNavigate()
    const auth = useAuth()

    // Methods
    function handleLogout() {
        auth.logout()
    }

    function handleGoToUserView() {
        navigate('/dashboard')
    }

    return(
        <div>
            <PageTitle />

            Admin panel - Back office

            <Button onClick={handleGoToUserView}>
                Go to application
            </Button>

            <Button onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}