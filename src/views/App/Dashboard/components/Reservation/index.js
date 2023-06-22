import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GET_RESERVATIONS } from '../../../../../state/modules/reservations/actions'
import moment from 'moment'
import { useNavigate } from 'react-router'

// MUI
import { Stack, Avatar, CircularProgress, Typography, Chip, useTheme } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useIsLaptop } from '../../../../../hooks/useDevice';

export default function DataGridDemo() {

    // Variables
    const smallScreen = useIsLaptop()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const reservations = useSelector(state => state.RESERVATIONS.reservations)
    console.log("🚀 ~ file: index.js:19 ~ DataGridDemo ~ reservations:", reservations)

    // Methods
    useEffect(() => {
        dispatch({ type: GET_RESERVATIONS })
    },[])

    if(reservations.status === 'loading'){
        return <CircularProgress />
    }

    // Methods
    function handleNavigate(){
        navigate('/history')
    }

    function parseData(){
        let arr = []
        let sorted = reservations.data.sort(function(a,b){
            return new Date(a.start_datetime) - new Date(b.start_datetime);
        });
        let future = sorted.filter(item => new Date(item.start_datetime) > new Date())
        let past = sorted.filter(item => new Date(item.start_datetime) < new Date())

        let final = future.length ? future : past
        let key = future.length ? 0 : -1

        final.map(item => {
            arr.push({
                id: item?.id,
                barber: item?.order_items[0]?.barber?.name || 'Frizer',
                avatar: item?.order_items[0]?.hair_style.avatar,
                service: item?.order_items[0]?.hair_style.name,
                status: item?.status,
                duration: item?.duration + " min.",
                start_datetime: moment(item?.start_datetime).calendar(),
                end_datetime: moment(item?.end_datetime).calendar(),
                total_price: item?.total_price + " KM"
            })
        })

        return arr.at(key)
    }
  
    const data = parseData() ?? { // Fallback
        barber: "",
        avatar: "",
        service: "",
        status: "",
        duration: "",
        start_datetime: "",
        end_datetime: "",
        total_price: ""
    }

    return (
        <Stack sx={{ width: '100%', height: 200 }}>
            {
                reservations.data.length ?
                    <>
                    {/* <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ height: 20 }}>
                        <Typography variant="h6" sx={{ fontWeight: 500 }}>{ smallScreen && "Rezervacija" }</Typography>
                        <Typography
                            onClick={handleNavigate}
                            variant="body1" 
                            sx={{ color: "primary.main", cursor: 'pointer' }}
                        >
                            Vidi sve
                        </Typography>
                    </Stack> */}
                    <img 
                        src={data.avatar}  
                        style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 16 }}
                    />
                    <Stack
                        direction="column"
                        alignItems={smallScreen ? "flex-start" : "flex-end"}
                        justifyContent="space-between"
                        sx={{ width: '100%', height: 180, mt: 1, p: 0, borderRadius: 2 }}
                        spacing={1}
                    >
                         <Stack
                            direction="column"
                            alignItems="flex-start"
                            justifyContent="center"
                            sx={{ width: '100%' }}
                        >
                            <Typography variant="h6" sx={{ textAlign:'left' }}>{ data.service }</Typography>
                            <Typography variant="subtitle2" sx={{ opacity: .75, fontWeight: 400, textAlign: 'left' }}>{ data.total_price }</Typography>
                        </Stack>
                        {/* <Typography variant="caption" sx={{ fontSize: 14, opacity: .75 }}>
                            { data.start_datetime }
                        </Typography>
                        <Stack
                            direction={smallScreen ? "row" : "row-reverse"}
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{ width: '100%' }}
                            spacing={2}
                        >
                            <Avatar
                                src={data.avatar}
                                sx={{ width: 72, height: 72 }}
                            />
                            <Stack
                                direction="column"
                                alignItems="flex-start"
                                justifyContent="center"
                                sx={{ width: '100%' }}
                            >
                                <Typography variant="h6" sx={{ textAlign:'left' }}>{ data.service }</Typography>
                                <Typography variant="subtitle2" sx={{ opacity: .75, fontWeight: 400, textAlign: 'left' }}>{ data.total_price }</Typography>
                            </Stack>
                        </Stack> */}
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="flex-start"
                            sx={{ width: '100%' }}
                            spacing={2}
                        >
                            <Chip label={data.start_datetime} variant="filled" color="primary" />
                            <Chip label={data.barber} variant="filled" color="default" />
                            <Chip 
                                label={data.status === 'active' ? 'Aktivna' : 'Završena'}
                                color={data.status === 'active' ? 'success' : 'error'}
                            />
                        </Stack>
                    </Stack>
                </>
                :
                <Stack 
                    direction="column" 
                    alignItems="center" 
                    justifyContent="center" 
                    spacing={1} 
                    sx={{ width: '100%', height: smallScreen ? '100%' : 240 }}
                >
                    <Typography variant="h6">
                        Rezervacije
                    </Typography>

                    <Typography 
                        variant="caption" 
                        sx={{ opacity: .5, maxWidth: smallScreen ? '100%' : 140, textAlign: smallScreen ? 'left' :  'center' }}
                    >
                        Rezervirajte svoj prvi termin.
                    </Typography>
                </Stack>
            }
        </Stack>
    );
}