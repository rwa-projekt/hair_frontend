export const PaperProps = {
    elevation: 0,
    sx: {
        maxWidth: {
            xs: 'calc(100vw - 32px)',
            sm: 520
        },
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 1.5,
        '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1.5,
        }
    },
}

export const actionsMenu = {
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    bgcolor: 'background.paper',
    color: 'text.secondary',
    '& svg': {
        m: 1,
    },
    '& hr': {
        mx: 0.5,
    },
            
}