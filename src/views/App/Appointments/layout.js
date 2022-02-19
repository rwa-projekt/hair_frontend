import React, { useState } from "react";
import { useIsLaptop } from '../../../hooks/useDevice'

// Context
import { useAppointments } from './index'


// MUI
import { Stack, Box, Button, IconButton, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

// Components
import PageTitle from '../../../components/PageTitle'
import Services from './components/Services';
import Calendar from './components/Calendar';
import Barbers from './components/Barbers';
import Checkout from './components/Checkout';

// Icons
import { IconCheck, IconDots } from '@tabler/icons'

export default function Appointments(){

    // Variables
    const { checkout, submit, canSubmit } = useAppointments()
    const smallScreen = useIsLaptop()

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
            spacing={smallScreen ? 0 : 4}
        >
            <Stack sx={{ width: '100%' }} direction="row" alignItems="center" justifyContent="space-between">
                <PageTitle />
                {
                    smallScreen ?
                        canSubmit ?
                            <Button
                                onClick={handleOpen}
                                variant="outlined"
                                disableElevation
                                size="large"
                                sx={{ 
                                    borderRadius: '100px !important', 
                                    width: 40, height: 40,
                                    padding: 0, minWidth: 0,
                                    mb: 4
                                }}
                            >
                                <IconCheck />
                            </Button>
                            :
                            <Button
                                disabled={true}
                                variant="text"
                                disableElevation
                                size="large"
                                sx={{ mb: 4 }}
                            >
                                <IconDots />
                            </Button>
                        :
                        <Button
                            onClick={handleOpen}
                            variant={canSubmit ? 'contained' : 'text'}
                            disabled={!canSubmit}
                            disableElevation
                            size="large"
                            sx={{ borderRadius: '8px !important' }}
                        >
                            { canSubmit ? 'Rezerviraj' : 'Unesite podatke' }
                        </Button>
                }
            </Stack>
            <Barbers />
            <Calendar />
            <Services />
            {/* <Checkout /> */}


            <Dialog 
                onClose={handleClose} 
                open={open}
                fullScreen={smallScreen}
                sx={{ 
                    width: smallScreen ? '100vw' : 'auto',  
                }}
            >
                <DialogTitle>
                    <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        spacing={1}
                        sx={{ py: 3 }}
                    >
                        <Box sx={{ 
                            width: 80, height: 80, 
                            display: 'grid', placeItems: 'center',
                            borderRadius: 60, 
                            bgcolor: "#69c5332b",
                            border: "1px solid #69c53377", 
                        }}>
                            <IconCheck size="1.75em" style={{ color: "#47931b" }} />
                        </Box>

                        <Typography variant="h5">
                            Rezervacija
                        </Typography>

                        <Typography variant="body1" sx={{ opacity: .75 }}>
                            Jeste li sigurni da želite potvrditi rezervaciju?
                        </Typography>

                    </Stack>
                </DialogTitle>

                <DialogContent sx={{ width: smallScreen ? '100%' : 600, height: smallScreen ? '100%' : 'auto', px: 4 }}>
                    <Checkout />
                </DialogContent>

                <DialogActions sx={{ p: 2 }}>
                    <Button onClick={handleClose} autoFocus>
                        Odustani
                    </Button>
                    <Button onClick={handleSubmit}>Potvrdi</Button>
                </DialogActions>
            </Dialog>
        </Stack>
    )
}