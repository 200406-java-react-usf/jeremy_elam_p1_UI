import React, {useState} from 'react';
import {Alert} from '@material-ui/lab'
import { 
    Typography, 
    FormControl, 
    InputLabel, 
    Input,
    Button, 
    makeStyles 
} from '@material-ui/core';


import { Users} from '../models/users';
import {registerUser} from '../remote/register-service';

interface IRegisterProps{
	newUser: Users;
	setNewUser: (user: Users) => void;
}

const useStyles = makeStyles({
	registerContainer: {
		display: "flex",
		justifyContent: 'center',
		margin: 20,
		marginTop: 40,
		padding: 20
	}, 
	registerForm: {
		width: "50%"
	}
});

function RegisterComponent(props: IRegisterProps){
	const classes = useStyles();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [first_name, setFirstName] = useState('');
	const [last_name, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [role_name, setRoleName] = useState('')
	const [errorMessage, setErrorMessage] = useState('');

	let newUsername = (e: any) =>{
		setUsername(e.currentTarget.value);
	}
	let newPassword = (e: any) =>{
		setPassword(e.currentTarget.value);
	}
	let newFirstName = (e: any) =>{
		setFirstName(e.currentTarget.value);
	}
	let newLastName = (e: any) =>{
		setLastName(e.currentTarget.value);
	}
	let newEmail = (e: any) =>{
		setEmail(e.currentTarget.value);
	}
	let newRoleName = (e: any) =>{
		setRoleName(e.currentTarget.value);
	}
	let register = async () =>{
		if(role_name === ''|| username === '' || password === '' || first_name === '' || last_name === '' || email === ''){
			setErrorMessage('All areas must be filled in.')
		}
		let newUser = await registerUser(first_name, last_name, username, email, password, role_name);
		props.setNewUser(newUser);
	}

	return (
		<>
			<div className = {classes.registerContainer}>
				<form className = {classes.registerForm}>
					<Typography align = 'center' variant = 'h4'>Register to ERS</Typography>

					<FormControl margin = 'normal' fullWidth>
						<InputLabel htmlFor = 'first_name'> First Name</InputLabel>
						<Input
							onChange = {newFirstName}
							value = {first_name}
							id = "first_name" type = "text" 
							placeholder = "Enter your First Name"/>
					</FormControl>

					<FormControl margin = 'normal' fullWidth>
						<InputLabel htmlFor = 'lastName'> Last Name</InputLabel>
						<Input
							onChange = {newLastName}
							value = {last_name}
							id = "lastName" type = "text" 
							placeholder = "Enter your Last Name"/>
					</FormControl>

					<FormControl margin = 'normal' fullWidth>
						<InputLabel htmlFor = 'username'> Username </InputLabel>
						<Input
							onChange = {newUsername}
							value = {username}
							id = "username" type = "text" 
							placeholder = "Enter the Username you want to use."/>
					</FormControl>

					<FormControl margin = 'normal' fullWidth>
						<InputLabel htmlFor = 'email'> Email Address </InputLabel>
						<Input
							onChange = {newEmail}
							value = {email}
							id = "email" type = "text" 
							placeholder = "Enter your Email Address"/>
					</FormControl>
					
					<FormControl margin = 'normal' fullWidth>
						<InputLabel htmlFor = 'password'> Password </InputLabel>
						<Input
							onChange = {newPassword}
							value = {password}
							id = "password" type = "password" 
							placeholder = "Enter your First Name"/>
					</FormControl>
					<FormControl margin = 'normal' fullWidth>
						<label> Select the Type of Reimbursement:
						<select onChange = {newRoleName} value = {role_name} >
							<option >Select a Type</option>
							<option value = 'admin'>Admin</option>
							<option value = 'finance'>Finance Manager</option>
							<option value = 'employee'>Employee</option>
						</select>
						</label>
					</FormControl>  
					<br></br>
					<Button onClick = {register} variant = "contained" color = "secondary" size = "medium">Register</Button>
					<br></br>
					{
						errorMessage ?
						<span style={{color: "red"}}>{errorMessage}</span>
						:
						<></>
					}
				</form>
			</div>
		</>
	);
}

export default RegisterComponent;