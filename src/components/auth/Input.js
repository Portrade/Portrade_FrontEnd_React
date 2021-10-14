import React, { useState, useEffect } from "react";
import { InputAdornment, Grid, IconButton, TextField } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import "./css/input.css";

const Input = ({ name, label, type, required, autoFocus, error, setChange, helperText=null }) => {
	
	const [showPassword, setShowPassword] = useState(false);
	
	const handleShowPassword = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	}
	
	// useEffect(() => {	
	// }, [showPassword]);

	return (
		<Grid item>
			<TextField
				name={name}
				label={label}
				type={ (name === "password" || name === "passwordReg") && showPassword ? "text" : type}
				variant="outlined"
				fullWidth
				required={required}
				autoFocus={autoFocus}
				helperText={
					helperText	  ? helperText 				   :
					error		  ? "비밀번호가 일치하지 않습니다" : null }
				error={error}
				onChange={(e) => setChange(e.target.value)}
				InputProps={ (name === "password" || name === "passwordReg") ? {
					endAdornment: (
						<InputAdornment position="end">
							<IconButton onClick={handleShowPassword}>
								{showPassword ? <Visibility /> : <VisibilityOff />}
							</IconButton>
						</InputAdornment>
					)
				} : null }
			/>
		</Grid>
	);
}

export default Input;