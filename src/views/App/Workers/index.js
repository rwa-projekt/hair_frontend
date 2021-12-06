import * as React from 'react';

// MUI
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Chip } from '@mui/material'

// Components
import PageTitle from '../../../components/PageTitle'


export default function DataGridDemo() {
  return (
      <>
        <PageTitle />     
        {/* <div style={{ height: 480, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                // checkboxSelection
                disableSelectionOnClick
            />
        </div> */}
    </>
  );
}

const columns = [
    { field: 'id', headerName: 'ID', width: 40 },
    { 
      field: 'avatar', 
      headerName: 'Photo', 
      width: 80 ,
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
      field: 'firstName',
      headerName: 'First name',
      minWidth: 120,
      flex: 1,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      minWidth: 120,
      flex: 1,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      minWidth: 80,
      flex: 1,
    },
    {
        field: 'status',
        headerName: 'Status',
        minWidth: 160,
        flex: 1,
        // TODO => Dark mode
        renderCell: (params) => (
            <Chip
                label={params.row.status} 
                color={params.row.status === 'Working' ? 'success' : 'error'} 
            />
        ),
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      minWidth: 200,
      flex: 1,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status: 'Working' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, status: 'Working' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, status: 'Not working' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, status: 'Working' },
    { id: 5, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status: 'Not working' },
    { id: 6, lastName: 'Frances', firstName: 'Rossini', age: 36, status: 'Not working' },
    { id: 7, lastName: 'Roxie', firstName: 'Harvey', age: 65, status: 'Working' },
  ];