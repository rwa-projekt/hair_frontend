import React from 'react'

// MUI
import { Grid } from '@mui/material'

// Components
import PageTitle from '../../../components/PageTitle'
import Banner from './components/Banner'

export default function Dashboard(){
    return(
        <div>
            <PageTitle />
            <Grid container spacing={4}>
                <Grid item md={12} lg={8}>
                    <Banner />
                </Grid>
                <Grid item md={12} lg={4}>
                    Nešto
                </Grid>
            </Grid>
            
        </div>
    )
}