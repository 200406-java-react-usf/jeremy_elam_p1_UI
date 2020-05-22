import React, {useState, SyntheticEvent} from 'react';
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
import { projectOneClient } from '../remote/projectOne-client';

interface IUpdateProps{
	authUser: Users;
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

	const [id, setId] = useState(props.updateUser.ers_user_id);
	const [username, setUsername] = useState(props.updateUser.username);
	const [password, setPassword] = useState(props.updateUser.password);
	const [first_name, setFirstName] = useState(props.updateUser.first_name);
	const [last_name, setLastName] = useState(props.updateUser.last_name);
	const [email, setEmail] = useState(props.updateUser.email);
	const [role_name, setRoleName] = useState(props.updateUser.role_name);
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
		try{
		let updatedUser = await updateUser(id, username, password, first_name, last_name, email, role_name);
		props.setUpdateUser(updatedUser);
		}catch(e){
			setErrorMessage("Bad Request. Duplicate Information Found")
		}
	}

	return (
		!props.authUser || (props.authUser.role_name !== 'admin') ?
		<>
			<h1>You're not authorized to view this page</h1>
		</>
		:
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