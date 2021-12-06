import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    collapseIcon: {
        fontSize: '1rem',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    collapseIconSub: {
        fontSize: '1rem',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    menuIcon: {
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    listIcon: {
        minWidth: '18px',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    listCustomIconSub: {
        width: '6px',
        height: '6px',
    },
    listCustomIconSubActive: {
        width: '8px',
        height: '8px',
    },
    listItem: {
        marginBottom: '5px',
        alignItems: 'flex-start'
    },
    listItemNoBack: {
        marginBottom: '5px',
        backgroundColor: 'transparent !important',
        paddingTop: '8px',
        paddingBottom: '8px',
        alignItems: 'flex-start'
    },
    subMenuCaption: {
        ...theme.typography.subMenuCaption
    },
    menuItemsError: {
        padding: "6px 17px",
        paddingBottom: "12px"
    },
    collapseWrapper: {
        position: 'relative',
        '&:after': {
            content: "''",
            position: 'absolute',
            left: '24px',
            top: 0,
            height: '100%',
            width: '1px',
            opacity: .25,
            background: theme.palette.primary.light
        }
    }
}));

export { useStyles }