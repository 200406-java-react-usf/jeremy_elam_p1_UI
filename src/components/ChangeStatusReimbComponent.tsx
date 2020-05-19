import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

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
import { Reimbursements } from '../models/reimbs';
import { updateReimb } from '../remote/reimb-service';
import { authenticate } from '../remote/auth-service';


interface IUpdateProps{
	authUser: Users;
	newReimb: Reimbursements;
	setNewReimb: (reimb: Reimbursements) => void;
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

function ChangeStatusReimbComponent(props: IUpdateProps){
	const classes = useStyles();

	const [reimb_id, setReimbId] = useState(NaN);
	const [reimb_status, setReimbStatus] = useState('');

	
	const [errorMessage, setErrorMessage] = useState('');

	let newReimbId = (e: any) =>{
		setReimbId(e.currentTarget.value);
	}

	let newReimbStatus = (e: any) =>{
		setReimbStatus(e.currentTarget.value);
	}
	
	console.log(props.authUser.ers_user_id);
	

	let update = async () =>{
		if(reimb_status === '' || reimb_id === NaN)
			setErrorMessage('All categories are required to submit an Update');

		//@ts-ignore
		let updateReimbursement = await updateReimb(reimb_id,props.authUser.ers_user_id , reimb_status);
		props.setNewReimb(updateReimbursement)
	}

	return (
		!props.authUser.username ? 
		<Redirect to = "/login" /> :
		<>
			<div className = {classes.registerContainer}>
				<form className = {classes.updateForm}>
					<Typography align = 'center' variant = 'h4'>Approve or Deny Reimbursements</Typography>
					<FormControl margin ='normal' fullWidth>
						<InputLabel htmlFor = 'reimb_id'>Reimb Id</InputLabel>
						<Input
							onChange = {newReimbId}
							value = {reimb_id}
							id = "reimb_id" type = "number"
							placeholder = "Reimbursement ID Number"/>
					</FormControl>
					<FormControl margin = 'normal' fullWidth>
						<label> Select the Type of Reimbursement:
						<select onChange = {newReimbStatus} value = {reimb_status} >
							<option >Select a Type</option>
							<option value = 'approved'>Approve</option>
							<option value = 'denied'>Deny</option>
						</select>
						</label>
					</FormControl>  
					<br></br>
					<Button onClick = {update} variant = "contained" color = "secondary" size = "medium">Submit Reimbursement</Button>
					<br></br>
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

export default ChangeStatusReimbComponent;