import React, { useEffect, useState } from "react";
import axios from '../../../../../axios/hairstyles'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

// MUI
import { Stack, Box, Button, Snackbar, InputAdornment } from '@mui/material'
import MuiAlert from '@mui/material/Alert';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

// Components
import Input from '../../../../../form-components/Input'
import Upload from '../../../../../services/upload-files'
import Loading from '../../../../../components/Loading'

// Form
import { FORM_VALIDATIONS } from '../../../../../constants'
import { useForm } from "react-hook-form";
import { GET_HAIRSTYLES } from "../../../../../state/modules/hairstyles/actions";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Form() {

	// Constants
	const _defaultValues = {
        name: "",
        price: 0,
		time_needed: 30,
		file: null
    }

	// Variables
	const dispatch = useDispatch()
	const location = useLocation()
	const navigate = useNavigate()
	const [id, setId] = useState(location.pathname.split('/').at(-1))
	const [loading, setLoading] = useState(false)
	const [hairstyle, setHairstyle] = useState({})
	const [submitLoading, setSubmitLoading] = useState(false)
	const [deleteLoading, setDeleteLoading] = useState(false)
	const [success, setSuccess] = useState(false);
    const [fail, setFail] = useState(false);
	const [initialImage, setInitialImage] = useState([])
	const [defaultValues] = useState(_defaultValues)
    const methods = useForm({ defaultValues }); 
    const { handleSubmit, register, control, formState, setValue } = methods;

	// Methods
	useEffect(() => {
		if(id !== 'add'){
			const token = localStorage.getItem("token")
			const options = { token }
			setLoading(true)
			axios(options).get(`/${id}/`)
				.then(res => {
					setHairstyle(res.data)
					const { name, price, time_needed, avatar } = res.data
					setValue('name', name)
					setValue('price', price)
					setValue('time_needed', time_needed)
					setInitialImage([avatar])
					setLoading(false)
				})
		}
		else{
			setValue('name', '')
			setValue('price', 0)
			setValue('time_needed', 30)
			setInitialImage([])
		}
	}, [id])

	useEffect(() => {
		setId(location.pathname.split('/').at(-1))
	},[location])


	function setImage(file){
		setValue('file', file)
	}

	// Callbacks
	const onSuccess = () => { setSuccess(true) };
    const closeSuccess = () => { setSuccess(false) };
    const onFail = () => { setFail(true) };
    const closeFail = () => { setFail(false) };

	async function onSubmit(form) {
		// Set loading
		setSubmitLoading(true)

		// Destructuring form
		const { name, price, time_needed, file } = form;

		// Creating object
		const data =  { name, price: +price, time_needed: +time_needed }

		// Creating form data
        let formData = new FormData();

		// Appending to form data
		formData.append('data', JSON.stringify(data));
		
		// Token
		const token = await localStorage.getItem("token")
		const updateOptions = { token }
		const addOptions = {
			token,
			contentType: 'multipart/form-data'
		}

		if(location.state.update){
			console.log("UPDATE DATA => ", data)
			axios(updateOptions)
				.put(`/${hairstyle.id}/`, { name, price: +price, time_needed: +time_needed })
				.then(res => {

					// Updating redux
					dispatch({ type: GET_HAIRSTYLES })

					onSuccess()
					setSubmitLoading(false)
					setTimeout(() => {
						navigate('/admin/hairstyles')
					}, 500);
				})
				.catch(err => {
					setSubmitLoading(false)
					onFail()
				})
		}
		else{
			formData.append('files', file[0]);
			setSubmitLoading(true)
			axios(addOptions)
				.post("", formData)
				.then(res => {

					// Updating redux
					dispatch({ type: GET_HAIRSTYLES })

					onSuccess()
					setSubmitLoading(false)
					setTimeout(() => {
						navigate('/admin/hairstyles')
					}, 500);
				})
				.catch(err => {
					setSubmitLoading(false)
					onFail()
				})
		}
    }

	async function onDelete() {
		// Set loading
		setDeleteLoading(true)

		// Token
		const token = await localStorage.getItem("token")
		const options = { token }

		// Axios
		axios(options)
			.delete(`/${hairstyle.id}/`)
			.then(res => {

				// Updating redux
				dispatch({ type: GET_HAIRSTYLES })

				onSuccess()
				setDeleteLoading(false)
				setTimeout(() => {
					navigate('/admin/hairstyles')
				}, 500);
			})
			.catch(err => {
				setDeleteLoading(false)
				onFail()
		})
    }

	if(loading){
		return <Loading />
	}

	return (
		<Stack
			direction="column"
			alignItems="flex-start"
			spacing={6}
			sx={{ maxWidth: 720 }}
		>
			<Box sx={{ height: 240, width: '100%', borderRadius: 2, position: 'relative', border: '1px solid #dadada' }}>
				<Upload 
					initial={initialImage} 
					update={location?.state?.update} 
					id={hairstyle.id} 
					setForm={setImage}
					onSuccess={onSuccess}
					onFail={onFail}
				/>
			</Box>

			<Input 
				name="name"
				required 
				control={control} 
				label="Ime usluge"
				placeholder="Unesite ime usluge..."
				type="text"
				{...register("name", { 
					required: FORM_VALIDATIONS, 
				})}
			/>

			<Input 
				name="price"
				required 
				control={control} 
				label="Cijena usluge"
				type="number"
				placeholder="Unesite cijenu usluge..."
				endAdornment={<InputAdornment position="end">KM</InputAdornment>}
				{...register("price", { 
					required: FORM_VALIDATIONS, 
				})}
			/>

			<Input
				disabled={true}
				name="time_needed"
				required 
				control={control} 
				label="Vrijeme potrebno"
				type="number"
				placeholder="Unesite vrijeme potrebno za uslugu..."
				endAdornment={<InputAdornment position="end">min.</InputAdornment>}
				{...register("time_needed", { 
					required: FORM_VALIDATIONS, 
				})}
			/>


			<Stack
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				sx={{ width: '100%' }}
			>
				{/* Submit */}
				{
					submitLoading ?
						<LoadingButton
							loading
							loadingPosition="start"
							startIcon={<SaveIcon />}
							variant="outlined"
							sx={{ textTransform: 'none' }} 
						>
							Spremanje...
						</LoadingButton>
						:
						<Button
							onClick={handleSubmit(onSubmit)}
							sx={{ textTransform: 'none' }} 
							variant="contained" 
							inputMode="submit"
							disabled={!formState.isValid}
						>
							{ formState.isValid ? 'Spremi' : 'Unesite podatke' }
						</Button>
				}
				{
					location?.state?.update && (
						deleteLoading ?
							<LoadingButton
								loading
								loadingPosition="start"
								startIcon={<SaveIcon />}
								variant="text"
								sx={{ textTransform: 'none' }} 
							>
								Brisanje...
							</LoadingButton>
							:
							<Button
								onClick={onDelete}
								sx={{ textTransform: 'none' }} 
								variant="text" 
								inputMode="submit"
								color="secondary"
								disabled={!formState.isValid}
							>
								Izbriši uslugu
							</Button>
					)
				}
			</Stack>


			<Snackbar 
                open={success} 
                autoHideDuration={3000} 
                onClose={closeSuccess}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
            >
                <Alert onClose={closeSuccess} severity="success" sx={{ width: '100%' }}>
                    Uspješno ste dodali/uredili uslugu.
                </Alert>
            </Snackbar>

            <Snackbar 
                open={fail} 
                autoHideDuration={3000} 
                onClose={closeFail}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
            >
                <Alert onClose={closeFail} severity="error" sx={{ width: '100%' }}>
                    Došlo je do pogreške pri dodavanju/uređivanju usluge
                </Alert>
            </Snackbar>

		</Stack>
	);
}