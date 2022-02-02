import React, { useState, useEffect } from 'react'
import { useIsMobile, useIsTablet } from '../../../hooks/useDevice'
import { useSelector, useDispatch } from 'react-redux'

// MUI
import { Box, Stack, Typography, Chip, LinearProgress } from '@mui/material'

// Components
import PageTitle from '../../../components/PageTitle'
import Card from './components/ServiceCard';


// Icons
import { GET_HAIRSTYLES } from '../../../state/modules/hairstyles/actions'

export default function Hairstyles(){

    // Hooks
    const dispatch = useDispatch()
    const isTablet = useIsTablet()
    const isPhone = useIsMobile()
    
    // Variables
    const hairstyles = useSelector(state => state.HAIRSTYLES.hairstyles)

    useEffect(() => {
      dispatch({
        type: GET_HAIRSTYLES
      })
    }, [])


    return(
        <div>
            {/* Page title */}
            <PageTitle />

            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ mb: 4 }}
            >
                {/* Tabs */}
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                >
                    <Chip 
                        label="Sve usluge"
                        variant="filled"
                    />
                </Stack>
            </Stack>

            {/* Listing Hairstyles */}
            {
              hairstyles.status === 'loading' ? 
                <LinearProgress />
                :
                <Stack 
                    direction="row" 
                    flexWrap="wrap"
                    sx={{ width: '100%' }} 
                >
                    {
                        hairstyles.data.map((item, index) => (
                            <Card item={item} key={index} />
                        ))
                    }
                </Stack>
            }
        </div>
    )
}