import React from "react";
import {  useNavigate } from 'react-router-dom'

// MUI
import { Stack, Typography, Box, Button, Avatar, CircularProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// Icons
import { IconPlus, IconUser } from '@tabler/icons';


export default function Empty() {

	// Hooks
	const navigate = useNavigate()

	// Variables
    const workers = {
		status: '',
		data: []
	}

	// Methods
    function handleAddService() {
        navigate('add', { state: { update: false } })
    }

	function handleOnItemClick(item){
		navigate(`/admin/workers/${item.id}`, { state: { update: true } })
	}

	return (
		<Stack
			direction="column"
			spacing={8}
			sx={{ width: '100%' }}
		>
			<Stack direction="column" alignItems="flex-start" justifyContent="flex-start" spacing={2}>

				<Stack direction="row" spacing={4}>
					<Stack
						direction="column"
						justifyContent="space-between"
						sx={{ width: 320, height: 260, p: 4, bgcolor: "grey.200", borderRadius: 4 }}
					>
						<Box>
							<Box 
								sx={{ 
									bgcolor: "primary.main", 
									width: 40, height: 40, 
									display: 'grid', 
									placeItems: 'center', 
									borderRadius: 2, 
									mb: 2 
								}}
							>
								<IconUser size="1.5em" color="#fff" />
							</Box>

							<Typography variant="h6" sx={{ opacity: .75 }}>
								Korisnici (
									{
										workers.status === 'loading' ? 
											"..." :
											workers.data.length
									}
								)
							</Typography>
						</Box>
						

						<Typography	variant="subtitle2" sx={{ opacity: .75  }}>
							Broj korisnika koji upravljaju ovom aplikacijom
						</Typography>
					</Stack>

					<Button 
							variant="outlined" 
							onClick={handleAddService}
							sx={{ 
								width: 320, 
								height: 260, 
								p: 4, 
								border: "2px dashed", 
								borderColor: "grey.200", 
								borderRadius: 4,
								display: 'grid',
								placeItems: 'center'
							}}
						>
							<IconPlus size="3em" />
						</Button>
				</Stack>
			</Stack>

			<Stack direction="column" spacing={4}>
				<Typography variant="h6">
					Dodani korisnici
				</Typography>

				{
					workers.status === 'loading' ? <CircularProgress /> :
						workers.data.length ?
						<div style={{ height: `calc(${workers.data.length + 2} * 52px + 8px)`, width: '100%' }}>
							<DataGrid
								rows={workers.data}
								columns={columns}
								pageSize={9}
								rowsPerPageOptions={[9]}
								// checkboxSelection
								disableSelectionOnClick
								onRowClick={item => handleOnItemClick(item)}
							/>
						</div>
						:
						<Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
							Trenutno nema dodanih korisnika
						</Typography>

				}
			</Stack>

		</Stack>
	);
}





const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { 
      field: 'avatar', 
      headerName: 'Photo', 
      width: 100 ,
      renderCell: (params) => (
          <Avatar
		  	src={params.row.avatar}
            sx={{ 
              width: '36px !important', 
              height: '36px !important' 
            }} 
          />
      ),
    },
    {
      field: 'price',
      headerName: 'Cijena',
      width: 160,
    },
    {
      field: 'time_needed',
      headerName: 'Vrijeme potrebno',
      width: 160,
    },
	{
		field: 'name',
		headerName: 'Ime',
		minWidth: 120,
		flex: 1,
	},
];