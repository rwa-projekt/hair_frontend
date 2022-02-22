import React from 'react'

// MUI
import { Grid } from '@mui/material'

// Components
import PageTitle from '../../../components/PageTitle'
import Banner from './components/Banner'
import Services from './components/Services'
import Reservation from './components/Reservation'
import Barbers from './components/Barbers'

export default function Dashboard(){
    return(
        <div>
            <PageTitle />
            <Grid container spacing={8}>
                <Grid item xs={12} lg={8}>
                    <Banner />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Reservation />
                </Grid>
                <Grid item xs={12}>
                    <Services />
                </Grid>
                <Grid item xs={12}>
                    <Barbers />
                </Grid>
            </Grid>
            
        </div>
    )
}