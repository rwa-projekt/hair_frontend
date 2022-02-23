import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GET_RESERVATIONS } from '../../../state/modules/reservations/actions';
import moment from 'moment'

// MUI
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, CircularProgress, Chip } from '@mui/material'

// Components
import PageTitle from '../../../components/PageTitle'


export default function DataGridDemo() {

    // Variables
    const dispatch = useDispatch()
    const reservations = useSelector(state => state.RESERVATIONS.reservations)

    // Methods
    useEffect(() => {
        dispatch({ type: GET_RESERVATIONS })
    },[])

    if(reservations.status === 'loading'){
        return <CircularProgress />
    }

  
    // Methods
    function parseData(){
        let arr = []
        
        reservations.data.map(item => {
            arr.push({
                id: item?.id,
                barber: item?.order_items[0]?.barber?.name || 'Frizer',
                avatar: item?.order_items[0]?.hair_style?.avatar,
                service: item?.order_items[0]?.hair_style?.name,
                status: item?.status,
                duration: item?.duration,
                start_datetime: moment(item?.start_datetime)?.calendar(),
                end_datetime: moment(item?.end_datetime)?.calendar(),
                total_price: item?.total_price
            })
        })

        return arr
    }
  
    const data = parseData()

    return (
        <div>
            <PageTitle />     
            <div style={{ height: `calc(${reservations.data.length + 2} * 52px + 8px)`, minHeight: 180, maxHeight: 580, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    disableSelectionOnClick
                />
            </div>
        </div>
    );
}

const columns = [
    {
        field: 'barber',
        headerName: 'Ime frizera',
        minWidth: 120,
        flex: 1,
    },
    { 
        field: 'avatar', 
        headerName: 'Slika usluge', 
        width: 100 ,
        renderCell: (params) => (
            <Avatar
                alt="Slika usluge"
                src={params.row.avatar}
                sx={{ 
                    width: '36px !important', 
                    height: '36px !important' 
                }} 
            />
        ),
    },
    {
        field: 'service',
        headerName: 'Usluga',
        minWidth: 160,
        flex: 1,
    },
    {
        field: 'status',
        headerName: 'Status',
        minWidth: 60,
        flex: 1,
        //   Adding sufix
		renderCell: params => (
            <Chip 
                label={params.row.status === 'active' ? 'Aktivna' : 'Završena'}
                color={params.row.status === 'active' ? 'success' : 'error'}
            />
        )
    },
    {
        field: 'duration',
        headerName: 'Trajanje',
        minWidth: 60,
        flex: 1,
        //   Adding sufix
		renderCell: params => `${params.row.duration} min.`
    },
    {
        field: 'start_datetime',
        headerName: 'Početak',
        minWidth: 120,
        flex: 1,
    },
    {
        field: 'end_datetime',
        headerName: 'Kraj',
        minWidth: 120,
        flex: 1,
    },
    {
        field: 'total_price',
        headerName: 'Cijena',
        minWidth: 60,
        flex: 1,
        //   Adding sufix
		renderCell: params => `${params.row.total_price} KM`
    }
];