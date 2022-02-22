import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios'
import { getApiEndpoint } from '../../../../../axios/endpoints'
import { useAuth } from '../../../../../auth'
import { useIsLaptop } from '../../../../../hooks/useDevice';

// Context
import { useAppointments } from '../../index'

// Date fns
import isWeekend from 'date-fns/isWeekend';
import hrLocale from 'date-fns/locale/hr'

// MUI
import { TextField, Box, Paper, Stack, Chip, Typography } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import CalendarPicker from '@mui/lab/CalendarPicker';

// Components
import ScrollView from '../../../../../components/ScrollView'

const allTimestamps = [
    "9:00", "9:30", "10:00", "10:30","11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30","16:00", "16:30"
]

export default function Calendar() {

	// Hooks
    const { user } = useAuth()
	const smallScreen = useIsLaptop()

	// Variables
	const { barber, setDate, setTime, timeSelected } = useAppointments()
	const [value, setValue] = useState(new Date());
	const [timestamps, setTimestamps] = useState([]);

	// Methods
	useEffect(() => {
		setDate(moment(value).format('YYYY-MM-DD'))
		getTimestamps()
	}, [])

	useEffect(() => {
		getTimestamps()
	}, [value, barber])


	function handleOnChange(newValue){
		setValue(newValue)

		// Date
		const date = moment(newValue).format('YYYY-MM-DD')
		setDate(date)
		setTime("")
	}

	function getTimestamps(){
		if(barber){
			axios.get(
				`${getApiEndpoint()}barber_booking/orders/busy/?barber=${barber?.id}&date=${moment(value).format('YYYY-MM-DD')}`,
				{headers: {	Authorization: "Token " + user.data.token}}
			)
				.then(res => {
					console.log("Response => ", res)
					setTimestamps(res.data)
				})
				.catch(err => {
					console.log("Error => ", err)
					setTimestamps([])
				})
		}
	}

	function handleOnChipClick(time){
		setTime(time)
	}

	function parseTimestamp(timestamp){
		return moment(timestamp).format('h:mm')
	}

	function _freeTimestamps(){
		const busyTimestamps = timestamps.map(item => parseTimestamp(item.start_datetime))
		return allTimestamps
			.filter(x => !busyTimestamps.includes(x))
			.concat(busyTimestamps.filter(x => !allTimestamps.includes(x)));
	}

	const freeTimestamps = _freeTimestamps()

	// Content
	const timestampsContent = freeTimestamps.map((item, index) => {
		const color = timeSelected(item) ? 'primary' : 'default'
		return (
			<Chip
				itemId={index}
				id={index}      
				key={index}
				label={item}
				variant='contained'
				color={color}
				onClick={() => handleOnChipClick(item)}
				sx={{ 
					mb: '12px !important',
					ml: '0px !important', 
					mr: '12px !important', 
					px: smallScreen ? .5 : 2.5,
					py: smallScreen ? 2.25 : 3,
					boxSizing: 'border-box !important',
					fontSize: 14,
				}}
			/>
		)
	})

	const timestampsLayout = 
		smallScreen ? 
			<Box sx={{ width: '100%' }}>
				<Typography variant="caption" sx={{ height: 40, pl: 1 }}>Termini</Typography>
				<Box sx={{ height: 12 }} />
				<ScrollView>
					{ timestampsContent }
				</ScrollView>
			</Box>
			:
			<>{ timestampsContent }</>

	return (
		<Stack
			direction={smallScreen ? 'column' : 'row'}
			alignItems='flex-start'
			justifyContent="space-between"
			sx={{ width: '100%', height: '100%' }}
		>
			
			<Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
				<LocalizationProvider dateAdapter={AdapterDateFns} locale={hrLocale}>
					{
						smallScreen ?
						<CalendarPicker
							orientation="landscape"
							openTo="day"
							views={["day"]}
							date={value}
							shouldDisableDate={isWeekend}
							minDate={new Date()}
							showToolbar
							toolbarTitle="Izaberite datum"
							onChange={newValue => handleOnChange(newValue)}
							renderInput={(params) => <TextField {...params} />}
						/>
						:
						<StaticDatePicker
							orientation="landscape"
							openTo="day"
							views={["day"]}
							date={value}
							shouldDisableDate={isWeekend}
							minDate={new Date()}
							showToolbar
							toolbarTitle="Izaberite datum"
							onChange={newValue => handleOnChange(newValue)}
							renderInput={(params) => <TextField {...params} />}
						/>
					}
				</LocalizationProvider>
				
				{/* Hide Button */}
				{
					!smallScreen &&
						<Paper
							elevation={0} 
							sx={{ 
								width: 80, height: 80,
								position: 'absolute',
								bottom: 0, left: 0
							}}
						/>
				}
			</Box>

			<Stack
				direction="row"
				alignItems="flex-start"
				justifyContent="flex-start"
				spacing={2}
				flexWrap={smallScreen ? 'nowrap' : 'wrap'}
				sx={{ width: smallScreen ? '100%' : '65%', height: 'max-content'}}
			>
				{
					barber === null?
						<Stack 
							direction="column" 
							alignItems="center" 
							justifyContent="center" 
							spacing={1} 
							sx={{ width: '100%', height: smallScreen ? '100%' : 240 }}
						>
							{
								!smallScreen &&	
									<Typography variant="h6">
										Termini
									</Typography>
							}

							<Typography 
								variant="caption" 
								sx={{ opacity: .5, maxWidth: smallScreen ? '100%' : 200, textAlign: smallScreen ? 'left' :  'center' }}
							>
								Izaberite frizera da biste vidjeli slobodne termine.
							</Typography>
						</Stack>
					:
					freeTimestamps.length ? 
						timestampsLayout
						:
						<Stack 
							direction="column" 
							alignItems="center" 
							justifyContent="center" 
							spacing={1} 
							sx={{ width: '100%', height: smallScreen ? '100%' : 240 }}
						>
							{
								!smallScreen && 
									<Typography variant="h6">
										Termini
									</Typography>
							}

							<Typography 
								variant="caption" 
								sx={{ opacity: .5, maxWidth: smallScreen ? '100%' : 200, textAlign: smallScreen ? 'left' :  'center' }}
							>
								Izgleda da { barber.name || "Frizer" } nema slobodnih termina u {" "}
								{ moment(value).format('dddd') === "srijeda" ? "srijedu" : moment(value).format('dddd')}.
							</Typography>
						</Stack>
				}
			</Stack>
		</Stack>
	);
}