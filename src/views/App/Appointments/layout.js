import React, { useState } from "react";

// Context
import { useAppointments } from './index'


// MUI
import { Stack, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

// Components
import PageTitle from '../../../components/PageTitle'
import Services from './components/Services';
import Calendar from './components/Calendar';
import Barbers from './components/Barbers';
import Checkout from './components/Checkout';

// Icons
import { IconCheck } from '@tabler/icons'
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';

export default function Appointments(){

    // Variables
    const { checkout, submit, canSubmit } = useAppointments()

    const [open, setOpen] = React.useState(false);

    function handleOpen(){
        setOpen(true)
    }
  
    function handleClose(){
        setOpen(false)
    }

    function handleSubmit(){
        submit()
        setOpen(false)
    }

    return(
        <Stack
            direction="column"
            alignItems="flex-start"
            spacing={4}
        >
            <Stack sx={{ width: '100%' }} direction="row" alignItems="center" justifyContent="space-between">
                <PageTitle />
                <Button
                    onClick={handleOpen}
                    variant={canSubmit ? 'contained' : 'text'}
                    color="success"
                    disabled={!canSubmit}
                    disableElevation
                    size="large"
                    sx={{ borderRadius: '8px !important' }}
                >
                    { canSubmit ? 'Rezerviraj' : 'Unesite podatke' }
                </Button>
            </Stack>
            <Barbers />
            <Calendar />
            <Services />
            {/* <Checkout /> */}


            <Dialog 
                onClose={handleClose} 
                open={open}
            >
                <DialogTitle>Checkout</DialogTitle>
                <DialogContent dividers sx={{ width: 600 }}>
                    <Checkout />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit}>Ok</Button>
                </DialogActions>
            </Dialog>
        </Stack>
    )
}