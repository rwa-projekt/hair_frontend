import React from 'react'

// Context
import { useAppointments } from '../../index'

// MUI
import { Button, Stack, Box, Avatar, Chip } from '@mui/material';

export default function Barbers(){

    // Variables
    const barbers = [
        { name: "Ivan", id: 1 },
        { name: "Dragan", id: 2 },
        { name: "Test", id: 3 },
    ]
    const { setBarber, barberSelected } = useAppointments()

    return(
        <div id="appointments-barbers">
            <Stack direction="row" spacing={4} sx={{ width: '100%' }}>
                                    
                {
                    barbers.map((item, index) => {
                        const selected = barberSelected(item.id)
                        return(
                            <Card       
                                key={index}
                                item={item}
                                selected={selected}
                                onClick={() => setBarber(item)}
                            />
                            
                        )
                    })
                }
            </Stack>
        </div>
    )
}


function Card({ item, selected, onClick }){
    return(
        <Chip
            label={item.name}
            variant={selected ? 'contained' : 'outlined'}
            color={selected ? 'secondary' : 'default'}
            onClick={onClick}
            avatar={
                <Avatar 
                    sx={{ 
                        mr: '4px !important', 
                        width: '40px !important', 
                        height: '40px !important', 
                        fontSize: '18px !important' 
                    }}
                >
                    { item.name[0].toUpperCase() }
                </Avatar>
            }
            sx={{ 
                mb: '12px !important',
                ml: '0px !important', 
                mr: '12px !important', 
                px: 2,
                py: 4,
                boxSizing: 'border-box !important',
                fontSize: 14,
            }}
        />
    )
}