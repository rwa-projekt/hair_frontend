import React from 'react'

// MUI
import { Grid } from '@mui/material'

// Components
import PageTitle from '../../../components/PageTitle'
import Banner from './components/Banner'
import Hairstyles from './components/Hairstyles'

export default function Dashboard(){
    return(
        <div>
            <PageTitle />
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Banner />
                </Grid>
                <Grid item xs={12}>
                    {/* <Hairstyles /> */}
                </Grid>
            </Grid>
            
        </div>
    )
}