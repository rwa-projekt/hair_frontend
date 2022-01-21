import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useNavigate } from 'react-router-dom'
import { useIsTablet } from '../../../../../hooks/useDevice';

// Styles
import { styles } from './styles'
import { Stack, Typography, Button } from '@mui/material'

// Components
import { SimpleHairstyles as Card } from '../../../Hairstyles/components/Card'

// Icons
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Hairstyles() {

  // Variables
  const isTablet = useIsTablet()
  const navigate = useNavigate()

  // Methods
  function handleSeeAll(){
      navigate('/hairstyles')
  }

  return (
    <div style={{ width: '100%' }}>

        {/* Header */}
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 4 }}
        >
            {/* Title */}
            <Typography 
                variant="subtitle2"
                sx={{
                    fontWeight: 600, 
                    fontSize: isTablet ? 14 : 16, 
                    opacity: .75, 
                }}    
            >
                Hairstyles
            </Typography>

            {/* See more CTA */}
            <Button
                onClick={handleSeeAll}
                endIcon={<KeyboardArrowRightIcon />}
            >
                <Typography 
                    variant="subtitle2"
                    sx={{
                        fontWeight: 600, 
                        fontSize: isTablet ? 14 : 16, 
                        opacity: .75, 
                    }}    
                >
                    Vidi sve
                </Typography>
            </Button>
        </Stack>

        {/* Hairstyles */}
        <SwipeableViews 
            style={styles.root} 
            slideStyle={styles.slideContainer}
            animateTransitions={true}
            enableMouseEvents={isTablet}
        >
            {
                hairstyles.map((item, index) => (
                    <Card
                        key={index}
                        {...item}
                    />
                ))
            }
        </SwipeableViews>
    </div>
  );
}


const hairstyles = [
    {
      image: 'https://i2.wp.com/therighthairstyles.com/wp-content/uploads/2015/03/10-mens-medium-blonde-hairstyle.jpg?resize=500%2C568&ssl=1',
      name: 'Medium blonde',
      price: "15",
      time: '30.00'
    },
    {
      image: 'https://hairmanz.com/wp-content/uploads/2021/04/professional-hairstyles-for-men-41.jpg',
      name: 'Professional hairstyle',
      price: "15",
      time: '30.00'
    },
    {
      image: 'https://www.fantasticsams.com/sites/default/files/FS_Classic_Hairstyles_for_Men-compressed.jpg',
      name: 'Classic hairstyle',
      price: "15",
      time: '30.00'
    },
    {
        image: 'https://www.menshairstylestoday.com/wp-content/uploads/2019/02/Long-Hairstyle-For-Men-Beard.jpg',
        name: 'Medium-length undercut',
        price: "15",
        time: '30.00'
    },
]