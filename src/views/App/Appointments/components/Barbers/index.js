import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GET_BARBERS } from '../../../../../state/modules/barbers/actions';
import { useIsLaptop } from '../../../../../hooks/useDevice';

// Context
import { useAppointments } from '../../index'

// MUI
import { CircularProgress, Stack, Box, Typography, Avatar, Chip } from '@mui/material';

// Components
import ScrollView from '../../../../../components/ScrollView'

export default function Barbers(){

    // Variables
    const dispatch = useDispatch()
    const barbers = useSelector(state => state.BARBERS.barbers)
    const { setBarber, barberSelected } = useAppointments()

    // Methods
    useEffect(() => {
        dispatch({ type: GET_BARBERS })
    },[])

    if(barbers.status === 'loading'){
        return <CircularProgress />
    }

    return(
        <div id="appointments-barbers" style={{ width: '100%' }}>
            <Box sx={{ width: '100%' }}>
                <ScrollView>
                    {
                        barbers.data?.length ?
                        barbers.data.map((item, index) => {
                            const selected = barberSelected(item.id)
                            return(
                                <Card
                                    itemId={index}
                                    id={index}      
                                    key={index}
                                    item={item}
                                    selected={selected}
                                    onClick={() => setBarber(item)}
                                />
                                
                            )
                        })
                        :
                        <Typography variant="caption" sx={{ opacity: .5 }}>Izgleda da trenutno nema dostupnih frizera...</Typography>
                    }
                </ScrollView>
            </Box>
        </div>
    )
}


function Card({ item, selected, onClick }){

    // Hooks
    const smallScreen = useIsLaptop()

    return(
        <Chip
            label={item.name || "Frizer"}
            variant={selected ? 'contained' : 'outlined'}
            color={selected ? 'secondary' : 'default'}
            onClick={onClick}
            avatar={
                <Avatar 
                    sx={{ 
                        mr: smallScreen ? '0px !important' : '4px !important', 
                        width: smallScreen ? '20px !important' : '40px !important', 
                        height: smallScreen ? '20px !important' : '40px !important', 
                        fontSize: smallScreen ? '10px !important' : '18px !important' 
                    }}
                >
                    { item.name === "" ? "F" : item.name[0].toUpperCase() }
                </Avatar>
            }
            sx={{ 
                mb: '12px !important',
                ml: '0px !important', 
                mr: '12px !important', 
                px: smallScreen ? .5 : 2,
                py: smallScreen ? 2.25 : 4,
                boxSizing: 'border-box !important',
                fontSize: 14,
            }}
        />
    )
}