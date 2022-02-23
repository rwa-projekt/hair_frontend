import React, { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { GET_HAIRSTYLES } from '../../../state/modules/hairstyles/actions'

// MUI
import { Stack, Typography, Tabs, Tab, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Container, IconButton, CircularProgress, Snackbar } from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { IconCut, IconListSearch } from '@tabler/icons';

// Components
import Drawer from '../../../components/AdminDrawer'
import Input from './components/Input'
import { AdminPageTitle as PageTitle } from '../../../components/PageTitle'


export default function Hairstyles(){

    // Hooks
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    // Variables
    const hairstyles = useSelector(state => state.HAIRSTYLES.hairstyles)
    const [value, setValue] = useState(0);
    const [search, setSearch] = useState("")

    // Data
    const data = useMemo(() => (
        hairstyles.data.filter(element => element.name.toLowerCase().includes(search.toLowerCase()))
    ), [search, hairstyles])

    // Methods
    useEffect(() => {
        dispatch({
            type: GET_HAIRSTYLES
        })
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function handleAddService() {
        navigate('add', { state: { update: false } })
    }

    function handleOnServiceClick(id) {
        navigate(`/admin/hairstyles/${id}`, { state: { update: true } })
    }

    function handleSearch(event){
        setSearch(event.target.value)
    }

    return(
        <Stack direction="row">
            {/* Drawer */}
            <Drawer loading={hairstyles.status === 'loading'}>
                <Stack
                    direction="column"
                    justifyContent="stretch"
                    spacing={2}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        {/* Title */}
                        <Typography variant="h6" sx={{ color: "#fff" }}>
                            Usluge
                        </Typography>

                        {/* Add service */}
                        <IconButton onClick={handleAddService}>
                            <AddRoundedIcon />
                        </IconButton>
                    </Stack>

                    {/* Search input */}
                    <Input onChange={handleSearch} placeholder="Pretražite..." />

                    {/* Tabs */}
                    <Box sx={{ width: '100%' }}>
                        {/* Divider */}
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            {/* Tabs */}
                            <Tabs
                                textColor="secondary" 
                                indicatorColor='secondary' 
                                value={value} 
                                onChange={handleChange}
                            >
                                {/* Tab */}
                                <Tab label="Sve" sx={{ textTransform: 'none' }}/>
                            </Tabs>
                        </Box>


                        {/* All services */}
                        <TabPanel value={value} index={0}>
                            {
                                hairstyles.status === 'loading' ? 
                                <Box sx={{ width: '100%', height: 400, display: 'grid', placeItems: 'center' }}>
                                    <CircularProgress color="secondary" />
                                </Box>
                                :
                                <List
                                    className='custom-scrollbar'
                                    sx={{ height: 'calc(100vh - 288px)', overflowY: 'auto' }}
                                >
                                    {
                                        hairstyles.data.length ?
                                            data.length ?
                                                data.map((item, index) => (
                                                    <ListItem 
                                                        key={index} 
                                                        disablePadding 
                                                        selected={item.id == location.pathname.split('/').at(-1)}
                                                        sx={{ borderRadius: 2 }}
                                                    >
                                                        {/* Button */}
                                                        <ListItemButton 
                                                            onClick={() => handleOnServiceClick(item.id)} 
                                                            sx={{ borderRadius: 2 }}
                                                        >

                                                            {/* Service icon */}
                                                            <ListItemIcon sx={{ mr: -2, opacity: .7 }}>
                                                                <IconCut size="1.125em" />
                                                            </ListItemIcon>

                                                            {/* Service name */}
                                                            <ListItemText 
                                                                primary={item.name}
                                                                sx={{ color: "#fff", opacity: .7, py: 1, pt: 1.1 }}
                                                            />
                                                        </ListItemButton>
                                                    </ListItem>
                                                ))
                                                :
                                                <Box sx={{ width: '100%', height: 400, display: 'grid', placeItems: 'center' }}>
                                                    <Stack direction="column" alignItems="center" spacing={1}>
                                                        <Typography variant="h6" sx={{ color: "#fff" }}>
                                                            Pretraga
                                                        </Typography>

                                                        <Typography 
                                                            variant="caption" 
                                                            sx={{ color: "#fff", opacity: .75, maxWidth: 200, textAlign: 'center', wordBreak: 'break-all' }}
                                                        >
                                                            Nažalost ne postoji usluga: "{ search }" 
                                                        </Typography>
                                                        
                                                        <IconListSearch style={{ color: "#fff" }} />
                                                    </Stack>
                                                </Box>
                                            :
                                            <Box sx={{ width: '100%', height: 400, display: 'grid', placeItems: 'center' }}>
                                                <Stack direction="column" alignItems="center" spacing={1}>
                                                    <Typography variant="h6" sx={{ color: "#fff" }}>
                                                        Dodajte uslugu
                                                    </Typography>

                                                    <Typography 
                                                        variant="caption" 
                                                        sx={{ color: "#fff", opacity: .75, maxWidth: 200, textAlign: 'center' }}
                                                    >
                                                        Trenutno nemate niti jednu dodanu uslugu
                                                    </Typography>
                                                    
                                                    {/* Add service */}
                                                    <IconButton onClick={handleAddService}>
                                                        <AddRoundedIcon />
                                                    </IconButton>
                                                </Stack>
                                            </Box>
                                    }
                                </List>
                            }
                        </TabPanel>

                    </Box>
                </Stack>
            </Drawer>

            <Stack
                sx={{ width: '100%', height: '100%' }}
            >
                <Container className='custom-scrollbar' maxWidth="lg" sx={{ pt: 8, height: '100vh', maxHeight: '100vh', overflow: 'auto' }}>
                    <PageTitle />
                    <Box sx={{ height: 20 }} />
                    <Outlet />
                    <Box sx={{ height: 80 }} />
                </Container>
            </Stack>

        </Stack>
    )
}










function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ py: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }