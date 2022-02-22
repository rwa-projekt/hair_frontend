import React from "react";
import {  useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// MUI
import { Stack, Typography, Box, Button, Avatar, CircularProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// Icons
import EmptyIcon from '../../../../../assets/illustrations/empty_notes.png';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { IconCut, IconPlus } from '@tabler/icons';


export default function Empty() {

	// Hooks
	const navigate = useNavigate()

	// Variables
    const hairstyles = useSelector(state => state.HAIRSTYLES.hairstyles)

	// Methods
    function handleAddService() {
        navigate('add', { state: { update: false } })
    }

	function handleOnItemClick(item){
		navigate(`/admin/hairstyles/${item.id}`, { state: { update: true } })
	}

	return (
		<Stack
			direction="column"
			spacing={8}
			sx={{ width: '100%' }}
		>
			<Stack direction="column" alignItems="flex-start" justifyContent="flex-start" spacing={2}>

				{/* <img src={EmptyIcon} style={{ width: 400 }} /> */}

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
								<IconCut size="1.5em" color="#fff" />
							</Box>

							<Typography variant="h6" sx={{ opacity: .75 }}>
								Usluge šišanja (
									{
										hairstyles.status === 'loading' ? 
											"..." :
											hairstyles.data.length
									}
								)
							</Typography>
						</Box>
						

						<Typography	variant="subtitle2" sx={{ opacity: .75  }}>
							Broj dodanih usluga za šišanje i uređivanje kose i brade
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
					Dodane usluge
				</Typography>

				{
					hairstyles.status === 'loading' ? <CircularProgress /> :
						hairstyles.data.length ?
						<div style={{ height: `calc(${hairstyles.data.length + 2} * 52px + 8px)`, minHeight: 180, maxHeight: 580, width: '100%' }}>
							<DataGrid
								rows={hairstyles.data}
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
							Trenutno nema dodanih usluga
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
		//   Adding sufix
		renderCell: params => `${params.row.price} KM`
	},
	{
		field: 'time_needed',
		headerName: 'Vrijeme potrebno',
		width: 160,
		//   Adding sufix
		renderCell: params => `${params.row.time_needed} min.`
	},
	{
		field: 'name',
		headerName: 'Ime',
		minWidth: 120,
		flex: 1,
	},
];