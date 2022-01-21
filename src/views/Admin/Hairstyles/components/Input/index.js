import React from "react";

// MUI
import { TextField } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'


const useCustomSTyles = makeStyles(() =>
  createStyles({
    root: {
      borderBottom: '1px solid #e1e1e1',
      overflow: 'hidden',
      color: "#fff",
      '&:hover': {
        borderBottom: '1px solid #e1e1e1',
      },
      '&$focused': {
        borderBottom: '1px solid #e1e1e1',
        boxShadow: 'none',
      },
    },
    focused: {},
  }),
);

function Input(props) {
    const classes = useCustomSTyles();
  
    return (
      <TextField
        variant="outlined"
        // InputProps={{ classes, disableUnderline: true }}
        {...props}
      />
    );
}


export default Input;