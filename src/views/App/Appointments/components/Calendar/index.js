import React, { useState, useEffect } from 'react';
import moment from 'moment';

// Context
import { useAppointments } from '../../index'

// Date fns
import isWeekend from 'date-fns/isWeekend';
import hrLocale from 'date-fns/locale/hr'

// MUI
import { TextField, Box, Paper, Stack, Chip } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

export default function Calendar() {

	// Variables
	const { setDate, setTime, timeSelected } = useAppointments()
	const [value, setValue] = useState(new Date());

	// Methods
	useEffect(() => {
		setDate(moment(value).format('YYYY-MM-DD'))
	}, [])

	function handleOnChange(newValue){
		setValue(newValue)

		// Date
		const date = moment(newValue).format('YYYY-MM-DD')
		setDate(date)
		setTime("")
	}

	function handleOnChipClick(time){
		setTime(time)
	}


	// Dummy data
	const timestamps = [
		{ id: 1, time: "8:00" },
		{ id: 2, time: "8:30" },
		{ id: 3, time: "9:00" },
		{ id: 4, time: "9:30" },
		{ id: 5, time: "10:00" },
		{ id: 6, time: "10:30" },
		{ id: 7, time: "11:00" },
		{ id: 8, time: "11:30" },
		{ id: 9, time: "12:00" },
		{ id: 10, time: "12:30" },
		{ id: 11, time: "13:00" },
		{ id: 12, time: "13:30" },
	]

	return (
		<Stack
			direction="row"
			alignItems="flex-start"
			justifyContent="space-between"
		>
			
			<Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
				<LocalizationProvider dateAdapter={AdapterDateFns} locale={hrLocale}>
					<StaticDatePicker
						orientation="landscape"
						openTo="day"
						views={["day"]}
						value={value}
						shouldDisableDate={isWeekend}
						showToolbar
						toolbarTitle="Izaberite datum"
						onChange={newValue => handleOnChange(newValue)}
						renderInput={(params) => <TextField {...params} />}
					/>
				</LocalizationProvider>
				
				{/* Hide Button */}
				<Paper
					elevation={0} 
					sx={{ 
						width: 80, height: 80,
						position: 'absolute',
						bottom: 0, left: 0
					}}
				/>
			</Box>

			<Stack
				direction="row"
				alignItems="flex-start"
				justifyContent="flex-start"
				spacing={2}
				flexWrap="wrap"
				sx={{ width: '65%', height: 'max-content' }}
			>
				{
					timestamps.map((item, index) => {
						const color = timeSelected(item.time) ? 'primary' : 'default'
						return (
							<Chip
								key={index}
								label={item.time}
								variant='contained'
								color={color}
								onClick={() => handleOnChipClick(item.time)}
								sx={{ 
									mb: '12px !important',
									ml: '0px !important', 
									mr: '12px !important', 
									p: 3,
									boxSizing: 'border-box !important',
									fontSize: 14,
								}}
							/>
						)
					})
				}
			</Stack>
		</Stack>
	);
}