import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Alert} from '@material-ui/lab'

import { 
    Typography, 
    FormControl, 
    InputLabel, 
    Input,
    Button, 
    makeStyles 
} from '@material-ui/core';

import {Reimbursements} from '../models/reimbs';
import {newReimb} from '../remote/reimb-service';
import { Users } from '../models/users';

export interface IReimbProps{
	authUser: Users;
	newReimb: Reimbursements;
	setNewReimb: (reimb: Reimbursements) => void;
}

const useStyles = makeStyles({
	reimbContainer: {
		display: "flex",
		justifyContent: 'center',
		margin: 20,
		marginTop: 40,
		padding: 20
	}, 
	reimbForm: {
		width: "50%"
	}
});

function ReimbComponent(props: IReimbProps){
	const classes = useStyles();

	const [amount, setAmount] = useState(NaN);
	const [description, setDescription] = useState('');
	const [author_id, setAuthorId] = useState(NaN);
	const [reimb_type, setReimbType] = useState(NaN);
	const [errorMessage, setErrorMessage] = useState('');

	let newAmount = (e: any) =>{
		setAmount(e.currentTarget.value);
	}

	let newDescription = (e: any) =>{
		setDescription(e.currentTarget.value);
	}

	let newAuthorId = (e: any) =>{
		setAuthorId(e.currentTarget.value);
	}

	let newReimbType = (e: any) =>{
		setReimbType(e.currentTarget.value);
	}

	let reimb = async () =>{
		if(amount === NaN || description === '' || author_id === NaN ||reimb_type === NaN){
			setErrorMessage('All categories are required to submit a reimbursement')
		}

		//@ts-ignore
		let newReimbursement = await newReimb(amount, description, props.authUser.ers_user_id,reimb_type )
		props.setNewReimb(newReimbursement);
		
	}

	return (
		!props.authUser.username ? 
		<Redirect to = "/login" /> :
		<>
			<div className = {classes.reimbContainer}>
				<form className = {classes.reimbForm}>
					<Typography align = 'center' variant = 'h4'>Reimbursement</Typography>
					<FormControl margin = 'normal' fullWidth>
						<InputLabel htmlFor = 'amount'>Reimbursement Amount</InputLabel>
						<Input
							onChange = {newAmount}
							value = {amount}
							id = "amount" type = "number"
							placeholder = "Reimbursement Amount" />
					</FormControl>
					<FormControl margin = 'normal' fullWidth>
						<InputLabel htmlFor = 'description'>Description</InputLabel>
						<Input
							onChange = {newDescription}
							value = {description}
							id = "description" type = "text"
							placeholder = "Description" />
					</FormControl>
					<FormControl margin = 'normal' fullWidth>
						<label> Select the Type of Reimbursement:
						<select onChange = {newReimbType} value = {reimb_type} >
							<option >Select a Type</option>
							<option value = 'lodging'>lodging</option>
							<option value = 'travel'>travel</option>
							<option value = 'food'>food</option>
							<option value = 'other'>other</option>
						</select>
						</label>
					</FormControl>  
					
					<br></br>
					<Button onClick = {reimb} variant = "contained" color = "secondary" size = "medium">Submit Reimbursement</Button>
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

export default ReimbComponent;
