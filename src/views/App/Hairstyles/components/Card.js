import React, { useState } from 'react'
import { useIsMobile } from '../../../../hooks/useDevice'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

// MUI
import { Stack, Typography, ClickAwayListener } from '@mui/material'
import StarRoundedIcon from '@mui/icons-material/StarRounded';

function Hairstyles({ image = "", name = "", price = "", time = "", flag = 'masonry' }){

    // Variables
    const [overlay, setOverlay] = useState(false)
    const isLight = useSelector(state => state.UI.mode) === 'light'
    const isPhone = useIsMobile()

    // Methods
    function handleOnClick() {
        if(isPhone){
            setOverlay(previousState => !previousState)
        }
    }

    return(
        <ClickAwayListener onClickAway={() => setOverlay(false)}>
            <motion.div 
                onHoverStart={() => setOverlay(true)}
                onHoverEnd={() => setOverlay(false)}
                onClick={handleOnClick}
                whileHover={{ backgroundColor: isLight ? '#333' : '#555' }}
                style={{ borderRadius: 8, marginBottom: isPhone && flag === 'columns' && 16 }}
                animate={ overlay ? { backgroundColor: '#333' } : { backgroundColor: isLight ? '#fff' : '#212121' }}
            >
                <Stack 
                    direction="column"
                    sx={{
                        boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.05)',
                        p: .75,
                        borderRadius: 2,
                        position: 'relative',
                        cursor: 'pointer',
                    }}
                >
                    {/* Hairstyle image */}
                    <img
                        src={`${image}?w=162&auto=format`}
                        srcSet={`${image}?w=162&auto=format&dpr=2 2x`}
                        alt={name}
                        style={{ borderRadius: 7 }}
                    />

                    {/* Informations */}
                    <Stack 
                        direction="row" 
                        alignItems="center" 
                        justifyContent="space-between"
                        sx={{ py: 1, pt: 2, px: 1, width: '100%' }}
                    >
                        <Stack 
                            direction="column" 
                            alignItems="flex-start"
                            sx={{ width: '100%' }}
                        >

                            {/* Hairstyle name */}
                            <Typography 
                                variant="subtitle1" 
                                sx={{ 
                                    fontWeight: 600, 
                                    fontSize: isPhone ? 12 : 14, 
                                    opacity: .75, 
                                    color: overlay && '#fff', 
                                    width: 'calc(100% - 28px)',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}
                            >
                                { name }
                            </Typography>
                            
                            {/* Hairstyle time required */}
                            {/* <Typography 
                                variant="subtitle2"
                                sx={{ fontWeight: 600, fontSize: 12 }}    
                            >
                                { time } minuta
                            </Typography> */}
                        </Stack>

                        {/* Hairstyle price */}
                        <Typography 
                            variant="subtitle2"
                            sx={{ 
                                fontWeight: 700, 
                                fontSize: isPhone ? 10 : 12, 
                                color: "primary.main", 
                                width: 28, minWidth: 28, maxWidth: 28 
                            }}    
                        >
                            { price } €
                        </Typography>
                    </Stack>

                    

                   {/* PSEUDO ELEMENTS */}



                    {/* Overlay */}
                    <motion.div
                        variants={overlayVariants}
                        initial="hidden"
                        animate={overlay ? 'visible' : 'hidden'}
                        transition={{ duration: .35 }}
                        style={{ 
                            position: 'absolute', 
                            width: 'calc(100% - 12px)', // 12px => padding
                            height: isPhone ? 'calc(100% - 45px - 12px)' : 'calc(100% - 48px - 12px)', // 48px => height of information block, 12px => padding
                            left: 6, top: 6, 
                            backgroundColor: '#00000070', 
                            borderRadius: 7,
                            zIndex: 9
                        }}
                    />

                    {/* Star */}
                    <motion.div
                        variants={starVariants}
                        initial="hidden"
                        animate={overlay ? 'visible' : 'hidden'}
                        style={{ 
                            position: 'absolute', 
                            left: 'calc(50% - 28px)', 
                            top: isPhone && flag === 'masonry' ? 'calc(50% - 42px)' : 'calc(50% - 48px + 14px)',
                            zIndex: 10,
                            borderRadius: 20,
                            padding: '2px 14px',
                            backgroundColor: '#FFC94060',
                            display: 'grid',
                            placeItems: 'center'
                        }}
                    >
                        <StarRoundedIcon sx={{ color: '#FFC940' }} />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        animate={overlay ? 'visible' : 'hidden'}
                        style={{ 
                            position: 'absolute', 
                            top: isPhone && flag === 'masonry' ? 'calc(50% - 10px)' : 'calc(50% + 0px)',
                            zIndex: 10,
                            width: '100%'
                        }}
                    >
                        <Typography 
                            variant="subtitle2"
                            sx={{ 
                                fontWeight: 600, 
                                fontSize: isPhone && flag === 'masonry' ? 10 : 14, 
                                opacity: .75, 
                                textAlign: 'center', 
                                width: '100%', 
                                color: '#fff' 
                            }}    
                        >
                            Dodaj u favorite ✋🏽
                        </Typography>
                    </motion.div>
                </Stack>
            </motion.div>
        </ClickAwayListener>
    )
}









function SimpleHairstyles({ image = "", name = "", price = "", time = "", flag = 'column' }){

    // Variables
    const [overlay, setOverlay] = useState(false)
    const isLight = useSelector(state => state.UI.mode) === 'light'
    const isPhone = useIsMobile()

    // Methods
    function handleOnClick() {
        if(isPhone){
            setOverlay(previousState => !previousState)
        }
    }

    return(
        <ClickAwayListener onClickAway={() => setOverlay(false)}>
            <motion.div 
                onHoverStart={() => setOverlay(true)}
                onHoverEnd={() => setOverlay(false)}
                onClick={handleOnClick}
                whileHover={{ backgroundColor: isLight ? '#333' : '#555' }}
                style={{ borderRadius: 8, marginBottom: isPhone && flag === 'columns' && 16, height: 300, width: 240 }}
                animate={ overlay ? { backgroundColor: '#333' } : { backgroundColor: isLight ? '#fff' : '#212121' }}
            >
                <Stack 
                    direction="column"
                    sx={{
                        boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.05)',
                        p: .75,
                        borderRadius: 2,
                        position: 'relative',
                        cursor: 'pointer',
                    }}
                >
                    {/* Hairstyle image */}
                    <img
                        src={`${image}?w=162&auto=format`}
                        srcSet={`${image}?w=162&auto=format&dpr=2 2x`}
                        alt={name}
                        style={{ borderRadius: 7, height: 240, objectFit: 'cover' }}
                    />

                    {/* Informations */}
                    <Stack 
                        direction="row" 
                        alignItems="center" 
                        justifyContent="space-between"
                        sx={{ py: 1, pt: 2, px: 1, width: '100%', }}
                    >
                        <Stack 
                            direction="column" 
                            alignItems="flex-start"
                            sx={{ width: '100%' }}
                        >

                            {/* Hairstyle name */}
                            <Typography 
                                variant="subtitle1" 
                                sx={{ 
                                    fontWeight: 600, 
                                    fontSize: isPhone ? 12 : 14, 
                                    opacity: .75, 
                                    color: overlay && '#fff', 
                                    width: 'calc(100% - 28px)',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}
                            >
                                { name }
                            </Typography>
                            
                            {/* Hairstyle time required */}
                            {/* <Typography 
                                variant="subtitle2"
                                sx={{ fontWeight: 600, fontSize: 12 }}    
                            >
                                { time } minuta
                            </Typography> */}
                        </Stack>

                        {/* Hairstyle price */}
                        <Typography 
                            variant="subtitle2"
                            sx={{ 
                                fontWeight: 700, 
                                fontSize: isPhone ? 10 : 12, 
                                color: "primary.main", 
                                width: 28, minWidth: 28, maxWidth: 28 
                            }}    
                        >
                            { price } €
                        </Typography>
                    </Stack>

                    

                   {/* PSEUDO ELEMENTS */}



                    {/* Overlay */}
                    <motion.div
                        variants={overlayVariants}
                        initial="hidden"
                        animate={overlay ? 'visible' : 'hidden'}
                        transition={{ duration: .35 }}
                        style={{ 
                            position: 'absolute', 
                            width: 'calc(100% - 12px)', // 12px => padding
                            height: isPhone ? 'calc(100% - 45px - 12px)' : 'calc(100% - 48px - 12px)', // 48px => height of information block, 12px => padding
                            left: 6, top: 6, 
                            backgroundColor: '#00000070', 
                            borderRadius: 7,
                            zIndex: 9
                        }}
                    />

                    {/* Star */}
                    <motion.div
                        variants={starVariants}
                        initial="hidden"
                        animate={overlay ? 'visible' : 'hidden'}
                        style={{ 
                            position: 'absolute', 
                            left: 'calc(50% - 28px)', 
                            top: isPhone && flag === 'masonry' ? 'calc(50% - 42px)' : 'calc(50% - 48px + 14px)',
                            zIndex: 10,
                            borderRadius: 20,
                            padding: '2px 14px',
                            backgroundColor: '#FFC94060',
                            display: 'grid',
                            placeItems: 'center'
                        }}
                    >
                        <StarRoundedIcon sx={{ color: '#FFC940' }} />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        animate={overlay ? 'visible' : 'hidden'}
                        style={{ 
                            position: 'absolute', 
                            top: isPhone && flag === 'masonry' ? 'calc(50% - 10px)' : 'calc(50% + 0px)',
                            zIndex: 10,
                            width: '100%'
                        }}
                    >
                        <Typography 
                            variant="subtitle2"
                            sx={{ 
                                fontWeight: 600, 
                                fontSize: isPhone && flag === 'masonry' ? 10 : 14, 
                                opacity: .75, 
                                textAlign: 'center', 
                                width: '100%', 
                                color: '#fff' 
                            }}    
                        >
                            Dodaj u favorite ✋🏽
                        </Typography>
                    </motion.div>
                </Stack>
            </motion.div>
        </ClickAwayListener>
    )
}


export { Hairstyles, SimpleHairstyles }




// Constants
const overlayVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

const starVariants = {
    hidden: {
        opacity: 0,
        y: 10
    },
    visible: {
        opacity: 1,
        y: 0,
        transition:{
            duration: .225
        }
    }
}

const textVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition:{
            duration: .35
        }
    }
}