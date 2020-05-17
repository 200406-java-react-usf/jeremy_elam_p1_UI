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

import { authenticate } from '../remote/auth-service';
import { Users } from '../models/users';
import { Redirect } from 'react-router-dom';

interface ILoginProps{
	authUser: Users;
	setAuthUser: (user: Users) => void;
}

const useStyles = makeStyles({
	loginContainer: {
		display: "flex", 
		justifyContent: 'center',
		margin: 20,
		marginTop: 40,
		padding:20
	},
	loginForm: {
		width: "50%"
	}
});

function LoginComponent(props: ILoginProps){
	const classes = useStyles();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	let updateUsername = (e: any) =>{
		setUsername(e.currentTarget.value);

		
	}

	let updatePassword = (e:any) =>{
		setPassword(e.currentTarget.value);

	}
	

	let login = async ()=>{
		if(username === '' || password === ''){
			setErrorMessage('Both username and password must be entered to login.')
		}
		
		let authUser = await authenticate(username, password);
		props.setAuthUser(authUser);
		console.log(props.authUser);
	}

	return (
		props.authUser ? 
		<Redirect to="/home" /> :
		<>
			{/* ask question about this later to kennedy */}
			<div className = {classes.loginContainer}>
				<form className = {classes.loginForm}>
					<Typography align = "center" variant = "h4">Login</Typography>

					<FormControl margin = "normal" fullWidth>
						<InputLabel htmlFor = "username">Username</InputLabel>
						<Input 
							onChange = {updateUsername}
							value = {username}
							id = "username" type = "text"
							placeholder = "Enter your username"/>
					</FormControl>

					<FormControl margin= "normal" fullWidth>
						<InputLabel htmlFor = "password">Password</InputLabel>
						<Input 
							onChange={updatePassword}
							value={password}
							id = "password" type = "password"/>
					</FormControl>
					<br></br>
					<Button onClick = {login} variant = "contained" color = "secondary" size = "medium">Login</Button>
					<br/><br/>
					{
						errorMessage ?
						<span style={{color:"red"}}>{errorMessage}</span>
						:
						<></>
					}
				</form>
			</div>
		</>
	);
}

export default LoginComponent;