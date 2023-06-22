import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GET_BARBERS } from '../../../state/modules/barbers/actions';

// React router
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// Permissions
import { Restricted } from '../../../auth/permissions'

// MUI
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, CircularProgress, Tabs, Tab, Box  } from '@mui/material'

// Components
import PageTitle from '../../../components/PageTitle'


export default function DataGridDemo() {

  // Variables
  const dispatch = useDispatch()
  const barbers = useSelector(state => state.BARBERS.barbers)
  const location = useLocation()
  const [value, setValue] = useState(location.pathname.split('/')[2]);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
      setValue(location.pathname.split('/')[2])
  }, [location])

  // Methods
  useEffect(() => {
      dispatch({ type: GET_BARBERS })
  },[])

  if(barbers.status === 'loading'){
      return <CircularProgress />
  }

  const restrictedContent =
    <>
      <PageTitle />
      <div 
        style={{ 
          height: `calc(${barbers.data.length + 2} * 52px + 8px)`, 
          minHeight: 180, 
          maxHeight: 580, 
          width: '100%' 
        }}
      >
        <DataGrid
            rows={barbers.data}
            columns={columns}
            pageSize={9}
            rowsPerPageOptions={[9]}
            // checkboxSelection
            disableSelectionOnClick
        />
      </div> 
    </>
    

  return (
    <Restricted to="view_client" fallback={restrictedContent}>
      <PageTitle />     
        <div id="profile-tabs">
            {/* Tabs */}
            <Box sx={{ width: '100%', mb: 4 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs 
                        value={value} 
                        onChange={handleChange} 
                        aria-label="basic tabs example"
                    >
                        <LinkTab label="Frizeri" value="workers" />
                        <LinkTab label="Klijenti" value="clients" />
                    </Tabs>
                </Box>
            </Box>

            {/* Rendering routes */}
            <Outlet />
        </div>
    </Restricted>
  );
}

function LinkTab(props) {

  // Variables
  const navigate = useNavigate()

  return (
    <Tab
      component="a"
      sx={{ 
          textTransform: "none", 
          mr: 2 
      }}
      onClick={(event) => {
        event.preventDefault();
        navigate(`/users/${props.value}`)
      }}
      {...props}
    />
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