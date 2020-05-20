import React, {useState} from 'react';
import {Alert} from '@material-ui/lab';
import { 
    Typography, 
    FormControl, 
    InputLabel, 
    Input,
    Button, 
    makeStyles 
} from '@material-ui/core';

import {Users} from '../models/users';
import {updateUser} from '../remote/user-service';

interface IUpdateProps{
	updateUser: Users;
	setUpdateUser: (users: Users) => void;
}

const useStyles = makeStyles({
	registerContainer:{
		display: "flex",
		justifyContent: 'center',
		margin: 20, 
		marginTop: 40,
		padding: 20
	},
	updateForm: {
		width: "50%"
	}
});

function UpdateUserComponent(props: IUpdateProps){
	const classes = useStyles();

	const [id, setId] = useState(NaN);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [first_name, setFirstName] = useState('');
	const [last_name, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [role_name, setRoleName] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	let newId = (e: any) =>{
		setId(e.currentTarget.value);
	}
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
	let newRole = (e: any) =>{
		setRoleName(e.currentTarget.value);
	}

	let update = async ()=>{
		if(id === NaN || role_name === '' || username === '' || password === '' || first_name === '' || last_name === '' || email === ''){
			setErrorMessage('All areas must be filled in.')
		}
		let updatedUser = await updateUser(id, username, password, first_name, last_name, email, role_name);
		props.setUpdateUser(updatedUser);
	}

	return (
		<>
			<div className = {classes.registerContainer}>
				<form className = {classes.updateForm}>
				<Typography align = 'center' variant = 'h4'>Update User</Typography>

				<FormControl margin = 'normal' fullWidth>
						<InputLabel htmlFor = 'user_id'> User Id</InputLabel>
						<Input
							onChange = {newId}
							value = {id}
							id = "user_id" type = "number" 
							placeholder = "Enter the Id number you wish to update"/>
				</FormControl>
			
				<FormControl margin = 'normal' fullWidth>
					<InputLabel htmlFor = 'username'> Username</InputLabel>
					<Input
						onChange = {newUsername}
						value = {username}
						id = "username" type = "text" 
						placeholder = "Enter a New or Current Username"/>
				</FormControl>

				<FormControl margin = 'normal' fullWidth>
					<InputLabel htmlFor = 'password'> Password </InputLabel>
					<Input
						onChange = {newPassword}
						value = {password}
						id = "password" type = "text" 
						placeholder = "Enter a New or Current Password"/>
				</FormControl>
				<FormControl margin = 'normal' fullWidth>
					<InputLabel htmlFor = 'firstName'> First Name</InputLabel>
					<Input
						onChange = {newFirstName}
						value = {first_name}
						id = "firstName" type = "text" 
						placeholder = "Enter a New or Current First Name"/>
				</FormControl>
				<FormControl margin = 'normal' fullWidth>
					<InputLabel htmlFor = 'last_name'> Last Name</InputLabel>
					<Input
						onChange = {newLastName}
						value = {last_name}
						id = "last_name" type = "text" 
						placeholder = "Enter a New or Current Last Name"/>
				</FormControl>
				<FormControl margin = 'normal' fullWidth>
					<InputLabel htmlFor = 'email'> Email </InputLabel>
					<Input
						onChange = {newEmail}
						value = {email}
						id = "email" type = "text" 
						placeholder = "Enter a New or Current Email Address"/>
				</FormControl>
				<FormControl margin = 'normal' fullWidth>
					<label> Select the Type of Reimbursement:
					<select onChange = {newRole} value = {role_name} >
						<option >Select a Role</option>
						<option value = 'admin'>admin</option>
						<option value = 'finance'>finance</option>
						<option value = 'employee'>employee</option>
					</select>
					</label>
				</FormControl>
				<br/>
				<Button onClick = {update} variant = "contained" color = "secondary" size = "medium">Update User</Button>
				<br/>
				{
					errorMessage ?
					<span style = {{color: 'red'}}>{errorMessage}</span>
					:
					<></>
				}
				</form>
			</div>
		</>
	)
}

export default UpdateUserComponent;