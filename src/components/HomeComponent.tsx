import React from 'react';
import {Redirect} from 'react-router-dom';
import {Button} from '@material-ui/core';
import {getUsers} from '../remote/user-service';
import {allReimb, pendingReimb} from '../remote/reimb-service'
import {logout} from '../remote/auth-service';
import { Users } from '../models/users';
import UserComponent from './AllUserComponent'

export interface IHomeProps{
	authUser: Users;
}



export const HomeComponent = (props: IHomeProps) =>{
	return (
		!props.authUser ?
		<Redirect to = "/login" /> :
		<>	
			<br></br>
			<br/>
			<h1>Welcome, {props.authUser.username}! </h1>
			<h2>User ID: {props.authUser.ers_user_id}</h2>
			<h2>User ID: {props.authUser.role_name}</h2>

			
		</>
	)
}

export default HomeComponent;