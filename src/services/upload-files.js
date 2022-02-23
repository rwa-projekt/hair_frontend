import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import axios from '../axios/hairstyles'

// MUI
import { Box, IconButton, Stack, Typography } from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded';

export default function UploadImages({ multiple = false, setForm, initial = [], update = false, id = 0, onSuccess, onFail }){

	// Variables
	const location = useLocation()
	const [images, setImages] = useState([])
	const [imageURLs, setImageURLs] = useState(initial)

	// Methods
	useEffect(() => {
		if(!images.length) return;
		const newImageURLs = []
		images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
		setImageURLs(newImageURLs)
	}, [images])

	async function changeImage(file){
		// Creating form data
        let formData = new FormData();

		// Appending to form data
		formData.append('files', file);

		// Token
		const token = await localStorage.getItem("token")
		const options = { token, contentType: 'multipart/form-data', type: file.type }

		axios(options)
			.post(`/${id}/set_avatar/`, formData)
			.then(res => {
				console.log("RES => ", res)
				onSuccess()
			})
			.catch(err => {
				console.log("ERR => ", err)
				onFail()
			})
	}

	function onChange(e) {
		setImages([...e.target.files])
		
		if(!multiple){
			setForm(e.target.files)
		}
		else{
			setForm([...e.target.files])
		}

		if(!!update){
			changeImage(e.target.files[0])
		}
	}

	return(
		<div style={{ width: '100%', height: '100%', postion: 'relative !important' }}>
			<IconButton
				sx={{ 
					position: 'absolute', 
					bottom: 10, right: 10, 
					height: 40, width: 40, 
					cursor: 'pointer',
					bgcolor: 'secondary.light', 
					'&:hover': { bgcolor: '#f1d0d2' } 
				}}
			>
				<label htmlFor="file-input">
					<AddRoundedIcon sx={{ color: "#DF6D73", mt: 1, cursor: 'pointer' }} />
				</label>
			</IconButton>

			<input
				id="file-input"
				type="file"
				multiple={multiple}
				accept='image/*'
				onChange={onChange}
				style={{ display: 'none' }}
			/>

			<Box sx={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
				{
					initial.length || update || images.length ? 
						imageURLs.map((src, index) => 
							<img 
								key={index} 
								src={src} 
								style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 6 }} 
							/>
						)
						:
						<Stack direction="column" alignItems="center" spacing={1}>
							<Typography variant="h6">
								Dodajte fotografiju
							</Typography>

							<Typography 
								variant="caption" 
								sx={{  opacity: .75, maxWidth: 220, textAlign: 'center' }}
							>
								Dozvoljene ekstenzije fotografije su: .png,.jpg,.jpeg
							</Typography>
						</Stack>
				}
			</Box>
		</div>
	)
}