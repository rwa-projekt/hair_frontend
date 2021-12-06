import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    menuCaption: {
        ...theme.typography.menuCaption,
        textOverflow: "ellipsis", 
        whiteSpace: "nowrap", 
        overflow: "hidden",
        transition: "250ms ease",
        fontSize: 12,
        fontWeight: 600,
        // textTransform: 'uppercase',
        // color: theme.palette.primary.dark
    },
    subMenuCaption: {
        ...theme.typography.subMenuCaption,
        marginTop: -14,
        textOverflow: "ellipsis", 
        whiteSpace: "nowrap", 
        overflow: "hidden",
    },
    menuDivider: {
        marginTop: '2px',
        marginBottom: '10px'
    },
    menuItemsError: {
        padding: "6px 17px",
        paddingBottom: "12px"
    }
}));

export { useStyles }