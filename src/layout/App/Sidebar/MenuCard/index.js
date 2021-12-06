import React from 'react'

// MUI
import { styled, useTheme } from '@mui/material/styles';
import {
    Avatar,
    Card,
    CardContent,
    Grid,
    LinearProgress,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    linearProgressClasses
} from '@mui/material';
import { blue } from '@mui/material/colors'

// Icons
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

// styles
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 30,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#fff'
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.main : blue[900]
    }
}));

const CardStyle = styled(Card)(({ theme }) => ({
    background: theme.palette.mode === 'light' ? blue[50] : blue[800],
    marginBottom: '22px',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: '157px',
        height: '157px',
        background: theme.palette.mode === 'light' ? blue[100] : blue[900],
        borderRadius: '50%',
        top: '-105px',
        right: '-96px'
    }
}));

// ==============================|| PROGRESS BAR WITH LABEL ||============================== //

function LinearProgressWithLabel({ value, ...others }) {
    const theme = useTheme();

    return (
        <Grid container direction="column" spacing={1} sx={{ mt: 1.5 }}>
            <Grid item>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Typography variant="body2" sx={{ color: theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.primary.light }}>
                            Progress
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" color="inherit">{`${Math.round(value)}%`}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <BorderLinearProgress value={value} variant="determinate" {...others} />
            </Grid>
        </Grid>
    );
}


// ==============================|| SIDEBAR MENU Card ||============================== //

const MenuCard = () => {
    const theme = useTheme();

    return (
        <CardStyle elevation={0}>
            <CardContent sx={{ p: 2 }}>
                <List sx={{ p: 0, m: 0 }}>
                    <ListItem alignItems="flex-start" disableGutters sx={{ p: 0 }}>
                        <ListItemAvatar sx={{ mt: 0 }}>
                            <Avatar
                                variant="rounded"
                                sx={{
                                    ...theme.typography.commonAvatar,
                                    ...theme.typography.largeAvatar,
                                    color: theme.palette.mode === 'light' ? theme.palette.primary.dark : blue[900],
                                    border: 'none',
                                    borderColor: theme.palette.primary.main,
                                    background: '#fff',
                                    marginRight: '12px'
                                }}
                            >
                                <TableChartOutlinedIcon fontSize="inherit" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            sx={{ mt: 0 }}
                            primary={
                                <Typography variant="subtitle1" sx={{ color: theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.primary.light, fontWeight: 600, fontSize: 14, marginBottom: "-4px" }}>
                                    Get Extra Space
                                </Typography>
                            }
                            secondary={<Typography variant="caption"> 28/32 GB</Typography>}
                        />
                    </ListItem>
                </List>
                <LinearProgressWithLabel value={20} />
            </CardContent>
        </CardStyle>
    );
};

export default MenuCard;