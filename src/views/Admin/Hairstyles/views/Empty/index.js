import React from "react";
import {  useNavigate } from 'react-router-dom'

// MUI
import { Stack, Typography, Box, Button } from '@mui/material';

// Icons
import EmptyIcon from '../../../../../assets/illustrations/empty_notes.png';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

export default function Empty() {

	// Hooks
	const navigate = useNavigate()

	// Methods
    function handleAddService() {
        navigate('add', { state: { update: 'false' } })
    }

	return (
		<Box sx={{ width: '100%', height: 400, display: 'grid', placeItems: 'center' }}>
			<Stack direction="column" alignItems="center" spacing={2}>

				<img src={EmptyIcon} style={{ width: 400 }} />

				<Typography variant="h4">
					Usluge šišanja
				</Typography>

				<Typography 
					variant="subtitle1" 
					sx={{ opacity: .75, maxWidth: 360, textAlign: 'center' }}
				>
					Pregledajte, dodajte i uredite usluge šišanja kose i brade.
				</Typography>
				
				{/* Add service */}
				<Button variant="outlined" onClick={handleAddService} sx={{ borderRadius: 80, height: 64, width: 64 }}>
					<AddRoundedIcon />
				</Button>
			</Stack>
		</Box>
	);
}