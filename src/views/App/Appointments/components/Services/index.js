import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GET_HAIRSTYLES } from '../../../../../state/modules/hairstyles/actions';
import { useIsLaptop } from '../../../../../hooks/useDevice';

// Context
import { useAppointments } from '../../index'

// MUI
import { CircularProgress, Stack, Box, Chip, Avatar, Typography } from '@mui/material';

// Components
import ScrollView from '../../../../../components/ScrollView'

export default function Services(){

    // Variables
    const smallScreen = useIsLaptop()
    const dispatch = useDispatch()
    const hairstyles = useSelector(state => state.HAIRSTYLES.hairstyles)
    const { setService, serviceSelected } = useAppointments()

    // Methods
    useEffect(() => {
        dispatch({ type: GET_HAIRSTYLES })
    },[])

    if(hairstyles.status === 'loading'){
        return <CircularProgress />
    }

    return(
        <div id="appointments-services" style={{ width: '100%', marginTop: -60 }}>
            <Box sx={{ width: '100%' }}>
                {
                    smallScreen &&
                        <>
                            <Box sx={{ height: 12 }} />
                            <Typography variant="caption" sx={{ height: 40, pl: 1 }}>Usluge</Typography>
                            <Box sx={{ height: 12 }} />
                        </>
                }
                <ScrollView>               
                    {
                        hairstyles.data.map((item, index) => {
                            const selected = serviceSelected(item.id) 
                            return (
                                <Card
                                    itemId={index}
                                    id={index}     
                                    key={index}
                                    item={item}
                                    selected={selected}
                                    onClick={() => setService(item)}
                                />
                            )
                        })
                    }
                </ScrollView>
            </Box>  
        </div>
    )
}

function Card({ item, selected, onClick }){
    return(
        <Chip
            variant={selected ? 'contained' : 'outlined'}
            color={selected ? 'secondary' : 'default'}
            onClick={onClick}
            label={
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                >
                    <Avatar 
                        src={item.avatar}
                        sx={{ 
                            mr: '4px !important', 
                            width: '40px !important', 
                            height: '40px !important', 
                            fontSize: '18px !important' 
                        }}
                    />
                    <Stack direction="column" justifyContent="space-between" alignItems="flex-start">
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            { item.name }
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Typography variant="body1">
                                { item.price } KM,
                            </Typography>
                            <Typography variant="body1">
                                { item.time_needed } min.
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            }
            sx={{ 
                mb: '12px !important',
                ml: '0px !important', 
                mr: '12px !important', 
                px: 1,
                py: 4,
                pr: 4,
                boxSizing: 'border-box !important',
                fontSize: 14,
            }}
        />
    )
}