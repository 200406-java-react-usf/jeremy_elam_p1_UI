import React from 'react';
import {Redirect} from 'react-router-dom';
import {Button} from '@material-ui/core';
import {getUsers} from '../remote/user-service';
import {allReimb} from '../remote/reimb-service'
import {logout} from '../remote/auth-service';

interface IHomeProps{
	username: string;
}

const HomeComponent = (props: IHomeProps) =>{
	return (
		!props.username ?
		<Redirect to = "/login" /> :
		<>	
			<br></br>
			<br/>
			<h1>Welcome, {props.username}! </h1>
			

			<br/>
			<Button onClick = {getUsers} variant = "contained" color = "primary" size = "medium">Get All Users</Button>
			<br/>
			<Button onClick = {logout} variant = "contained" color = "primary" size = "medium"> Logout</Button>
			<br/>
			<Button onClick = {allReimb} variant = "contained" color = "secondary" size = "small"> Get All Reimb Stuff</Button>
		</>
	)
}

export default HomeComponent;