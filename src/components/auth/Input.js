import React, { useState, useEffect } from "react";
import { InputAdornment, Grid, IconButton, TextField } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import "./css/input.css";

const Input = ({ name, label, type, required, autoFocus, handleChange, helperText=null }) => {
	
	const [showPassword, setShowPassword] = useState(false);
	const [passwords, setPasswords] = useState({ passwordReg: "", confirmPasswordReg: "" });
	
	useEffect(() => {
		
	}, [showPassword]);

	const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
	}

	// const handleChange = (e) => {
	// 	setPasswords({ ...passwords, [e.target.name]: e.target.value });
	// }

	const passwordNotMatch = () =>
		passwords.confirmPasswordReg !== passwords.passwordReg ? true : false
	
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
					helperText 			? helperText 				   :
					passwordNotMatch()  ? "비밀번호가 일치하지 않습니다" : null }
				error={name === "confirmPasswordReg" && passwordNotMatch()}
				onChange={handleChange}
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