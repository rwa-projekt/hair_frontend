import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GET_BARBERS } from '../../../../../state/modules/barbers/actions';
import { useIsLaptop } from '../../../../../hooks/useDevice';
import { useNavigate } from 'react-router'

// MUI
import { CircularProgress, Stack, Box, Chip, Avatar, Typography } from '@mui/material';

// Components
import ScrollView from '../../../../../components/ScrollView'

export default function Services(){

    // Variables
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const barbers = useSelector(state => state.BARBERS.barbers)

    // Methods
    useEffect(() => {
        dispatch({ type: GET_BARBERS })
    },[])

    if(barbers.status === 'loading'){
        return <CircularProgress />
    }

    // Methods
    function handleNavigate(){
        navigate('/users')
    }

    return(
        <Stack style={{ width: '100%' }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ height: 20 }}>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>Frizeri</Typography>
                <Typography
                    onClick={handleNavigate}
                    variant="body1" 
                    sx={{ color: "primary.main", cursor: 'pointer' }}
                >
                    Vidi sve
                </Typography>
            </Stack>
            <Box sx={{ width: '100%', maxWidth: 1200, mt: 3 }}>
                <ScrollView>               
                    {
                        barbers?.data?.map((item, index) => {
                            return (
                                <Card id={index} itemId={index} key={index} item={item} />
                            )
                        })
                    }
                </ScrollView>
            </Box>  
        </Stack>
    )
}


function Card({ item }){

    return(
        <Chip
            label={item.name || "Frizer"}
            variant={'outlined'}
            color={'default'}
            avatar={
                <Avatar 
                    sx={{ 
                        mr: '4px !important', 
                        width: '48px !important', 
                        height: '48px !important', 
                        fontSize: '18px !important' 
                    }}
                >
                    { item.name === "" ? "F" : item.name[0].toUpperCase() }
                </Avatar>
            }
            sx={{ 
                mb: '12px !important',
                ml: '0px !important', 
                mr: '12px !important', 
                height: 'auto',
                boxSizing: 'border-box !important',
                border: "none !important",
                fontSize: 16,
            }}
        />
    )
}