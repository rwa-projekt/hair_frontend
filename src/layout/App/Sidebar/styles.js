import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
    logoIcon: {
        minWidth: 40,
        width: 40,
        height: 40,
        strokeWidth: 1.5,
        color: theme.palette.grey[700]
    },
    logoIconButton:{
        minWidth: 55,
        maxWidth: 55,
        width: 55,
        height: 48,
        marginRight: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px'
    },
    logoName:{
        fontWeight: 500,
        color: theme.mode === 'dark' && "#00000099"
    }
}));