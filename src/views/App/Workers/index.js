import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GET_BARBERS } from '../../../state/modules/barbers/actions';

// Permissions
import { Restricted } from '../../../auth/permissions'

// MUI
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, CircularProgress } from '@mui/material'

// Components
import PageTitle from '../../../components/PageTitle'


export default function DataGridDemo() {

  // Variables
  const dispatch = useDispatch()
  const barbers = useSelector(state => state.BARBERS.barbers)

  // Methods
  useEffect(() => {
      dispatch({ type: GET_BARBERS })
  },[])

  if(barbers.status === 'loading'){
      return <CircularProgress />
  }
  

  return (
    <Restricted to="view_workers">
      <PageTitle />     
      <div style={{ height: `calc(${barbers.data.length + 2} * 52px + 8px)`, minHeight: 180, maxHeight: 580, width: '100%' }}>
          <DataGrid
              rows={barbers.data}
              columns={columns}
              pageSize={9}
              rowsPerPageOptions={[9]}
              // checkboxSelection
              disableSelectionOnClick
          />
      </div>
    </Restricted>
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
      headerName: 'Ime radnika',
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