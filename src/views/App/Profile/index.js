import React from 'react'
import { useAuth } from '../../../auth'

// MUI
import { Grid, Avatar, Stack, Typography } from '@mui/material'

// Components
import PageTitle from '../../../components/PageTitle'

export default function Dashboard(){

    const { user } = useAuth()
    
    console.log("USER => ", user)

    return(
        <div>
            <PageTitle />
            <Grid container spacing={8}>

                <Grid item xs={12} sx={{ height: 80 }} />

                <Grid item xs={12} lg={4}>
                    <Avatar 
                        sx={{ width: 200, height: 200 }}
                    />
                </Grid>
                <Grid item xs={12} lg={8}>
                    <Stack direction="column" alignItems="flex-start" spacing={4}>
                        <Information label="Ime i prezime" value={user.data.account.name || "Korisnik"} />
                    </Stack>
                </Grid>
            </Grid>
            
        </div>
    )
}

function Information({ label = "", value = "" }){
    return(
        <Stack direction="column" alignItems="flex-start">
            <Typography variant="body2">{ label }</Typography>
            <Typography variant="h4">{ value }</Typography>
        </Stack>
    )
}