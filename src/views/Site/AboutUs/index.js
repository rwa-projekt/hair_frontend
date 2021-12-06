import React from 'react'

// MUI
import { Box, Button, Stack, Chip, Typography, useTheme, useMediaQuery } from '@mui/material'

// Icons
import { IconBrandGithub } from '@tabler/icons'

// Illustrations
import AboutProjectIllustration from '../../../assets/illustrations/about_project_illustration.png'
import AboutUsIllustration from '../../../assets/illustrations/about_us_illustration.png'

// Components
import SectionHeader from './components/SectionHeader'

export default function AboutUs(){

    // Variables
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Methods
    function navigateOnDragansGithub() {
        window.open('https://github.com/dragan00', '_blank')
    }

    function navigateOnIvansGithub() {
        window.open('https://github.com/Giollesco', '_blank')
    }

    return(
        <Stack
            spacing={20}
            sx={{
                pt: 4,
                height: '100%', 
                minHeight: 'calc(100vh - 81px - 16px)' // 81px => Header, 16px => pt from container 
            }}
        >

            <Box>
                <SectionHeader 
                    title="O projektu"
                    subtitle="Općenito o projektu te korištene tehnologije"
                />

                <Stack
                    direction={ isMobile ? 'column' : 'row' }
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ width: '100%', mt: 4 }}
                >
                    <Stack
                        direction="column"
                        spacing={8}
                        sx={{ width: 'max-content' }}
                    >
                        <Box>
                            <Typography variant="h6" sx={{ mb: 1.5 }}>Općenito</Typography>
                            <Typography variant="subtitle2" sx={{ fontWeight: 400, opacity: .8, maxWidth: 400, lineHeight: '200%' }}>
                                Cilj ovog projekta je modernizirati i olakšati frizerske narudžbe.
                                Nadamo se da ćemo uz ovaj projekt ostvariti potrebno 
                                znanje i motivaciju za daljni rad u ovom području.
                            </Typography>
                        </Box>

                        <Box>
                            <Typography variant="h6" sx={{ mb: 1.5 }}>Tehnologije</Typography>
                            <Typography variant="subtitle2" sx={{ fontWeight: 400, opacity: .8, maxWidth: 400, lineHeight: '200%'  }}>
                                Na backend-u su korištene sljedeće tehnologije: 
                                <Box sx={{ color: 'primary.dark', fontWeight: 600 }}>Python, Django, PostgreSQL </Box><br />
                                Na frontend-u su korištene sljedeće tehnologije: 
                                <Box sx={{ color: 'primary.dark', fontWeight: 600 }}>HTML, CSS, JS, React, React Router, Redux, Material Design</Box>
                            </Typography>
                        </Box>

                    </Stack>

                    <Box sx={{ width: 'max-content' }}>
                        <img style={{ maxWidth: 480 }} src={AboutProjectIllustration} />
                    </Box>
                </Stack>
            </Box>

            <Box>
                <SectionHeader 
                    title="O nama"
                    subtitle="Osnovne informacije o autorima ovoga projekta"
                />

                <Stack
                    direction={ isMobile ? 'column' : 'row' }
                    alignItems="center"
                    sx={{ width: '100%' }}
                >
                    <Stack
                        direction="column"
                        spacing={10}
                        sx={{ width: '100%' }}
                    >
                        <Stack
                            direction="column"
                            spacing={1.5}
                            sx={{ maxWidth: 'max-content' }}
                        >
                            <Chip label="Back-end" color="primary" sx={{ fontWeight: 600,  maxWidth: 'max-content' }} />
                            <Typography variant="h6">Dragan Zovko</Typography>
                            <Typography variant="subtitle2" sx={{ fontWeight: 400, opacity: .8, maxWidth: 380, lineHeight: '200%'  }}>
                                Student treće godine računarstva. Imam 21 godinu i dolazim iz Širokog Brijega.
                            </Typography>
                            <Button 
                                onClick={navigateOnDragansGithub} 
                                startIcon={<IconBrandGithub size={18} />} 
                                sx={{ maxWidth: 'max-content', borderRadius: 40 }} 
                                variant="outlined"
                            >
                                Check Github profile
                            </Button>
                        </Stack>
                        
                        
                        <Stack
                            direction="column"
                            spacing={1.5}
                            sx={{ maxWidth: 'max-content' }}
                        >
                            <Chip label="Front-end" color="primary" sx={{ fontWeight: 600,  maxWidth: 'max-content' }} />
                            <Typography variant="h6">Ivan Đolo</Typography>
                            <Typography variant="subtitle2" sx={{ fontWeight: 400, opacity: .8, maxWidth: 380, lineHeight: '200%'  }}>
                                Student treće godine računarstva. Imam 22 godine i dolazim iz Širokog Brijega.
                            </Typography>
                            <Button
                                onClick={navigateOnIvansGithub}
                                startIcon={<IconBrandGithub size={18} />} 
                                sx={{ maxWidth: 'max-content', borderRadius: 40 }} 
                                variant="outlined"
                            >
                                Check Github profile
                            </Button>
                        </Stack>
                    </Stack>
                    <Box sx={{ width: 'max-content' }}>
                        <img style={{ maxWidth: 480 }} src={AboutUsIllustration} />
                    </Box>
                </Stack>
            </Box>
        </Stack>
    )
}