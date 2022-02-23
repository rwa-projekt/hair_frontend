import React, { useState } from "react";
import { Controller } from "react-hook-form";

// MUI
import { TextField, InputAdornment, IconButton } from "@mui/material";

// Icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function FormInputText ({ disabled = false, name, control, label, type = "text", endAdornment, placeholder = "", textFieldProps }) {

  // Variables
  const [passwordVisible, setPasswordVisible] = useState(false)

  // Methods
  function togglePasswordVisibility() {
    setPasswordVisible(previousState => !previousState)
  }

  function handleMouseDownPassword(event){
    event.preventDefault();
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          disabled={disabled}
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          placeholder={placeholder}
          type={passwordVisible ? 'text' : type}
          InputProps={{
            endAdornment: endAdornment ? endAdornment : type === 'password' &&
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                onClick={togglePasswordVisibility}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {
                  passwordVisible ? 
                    <VisibilityOff /> : 
                    <Visibility />
                }
              </IconButton>
            </InputAdornment>
          }}
          {...textFieldProps}
        />
      )}
    />
  );
};