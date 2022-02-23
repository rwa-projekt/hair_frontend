import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CLIENTS } from '../../../../../state/modules/barbers/actions'

// MUI
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, CircularProgress } from '@mui/material'


export default function Clients() {

  // Variables
  const clients = useSelector(state => state.BARBERS.clients)
  const dispatch = useDispatch()

  // Methods
  useEffect(() => {
      dispatch({ type: GET_CLIENTS })
  },[])

  if(clients.status === 'loading'){
      return <CircularProgress />
  }

  return (
    <div 
        style={{ 
          height: `calc(${clients.data.length + 2} * 52px + 8px)`, 
          minHeight: 180, 
          maxHeight: 580, 
          width: '100%' 
        }}
      >
        <DataGrid
            rows={clients.data}
            columns={columns}
            pageSize={9}
            rowsPerPageOptions={[9]}
            disableSelectionOnClick
        />
    </div> 
  );
}


const columns = [
    { field: 'id', headerName: 'ID', width: 40 },
    { 
      field: 'avatar', 
      headerName: 'Fotografija', 
      width: 120 ,
      renderCell: (params) => (
          <Avatar
            sx={{ 
              width: '36px !important', 
              height: '36px !important' 
            }} 
          />
      ),
    },
    {
      field: 'name',
      headerName: 'Ime klijenta',
      minWidth: 160,
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'E-mail adresa',
      minWidth: 160,
      flex: 1,
    },
    {
      field: 'phone_number',
      headerName: 'Broj telefona',
      minWidth: 160,
      flex: 1,
    }
];