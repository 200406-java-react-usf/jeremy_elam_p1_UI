import React from 'react';
import {Redirect} from 'react-router-dom';
import {Button} from '@material-ui/core';
import {getUsers} from '../remote/user-service';
import {allReimb} from '../remote/reimb-service'
import {logout} from '../remote/auth-service';
import { Users } from '../models/users';
import UserComponent from './AllUserComponent'

interface IHomeProps{
	authUser: Users;
}



const HomeComponent = (props: IHomeProps) =>{
	console.log(props.authUser);
	
	return (
		!props.authUser ?
		<Redirect to = "/login" /> :
		<>	
			<br></br>
			<br/>
			<h1>Welcome, {props.authUser.username}! </h1>
			<h2>User ID: {props.authUser.ers_user_id}</h2>
			

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