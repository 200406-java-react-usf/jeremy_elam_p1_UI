import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import { 
    Typography, 
    FormControl, 
    InputLabel, 
    Input,
    Button, 
    makeStyles 
} from '@material-ui/core';

import { authenticate } from '../remote/auth-service';
import { Reimbursements } from '../models/reimbs';
import { Users } from '../models/users';
import { updateReimb } from '../remote/reimb-service';


interface ILoginProps{
	authUser: Users;
	setNewReimb: (reimb: Reimbursements) => void;
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

function UpdateRimbComponent(props: ILoginProps){
	const classes = useStyles();

	const [reimb_id, setReimbId] = useState(NaN);
	const [amount, setAmount] = useState(NaN);
	const [description, setDescription] = useState('');
	const [reimb_type, setReimbType] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	let newReimbId = (e: any) =>{
		setReimbId(e.currentTarget.value);
	}
	let newAmount = (e: any) =>{
		setAmount(e.currentTarget.value);
	}
	let newDescription =  (e: any) =>{
		setDescription(e.currentTarget.value);
	}
	let newReimbType = (e: any) =>{
		setReimbType(e.currentTarget.value)
	}
	let update = async ()=>{
		if(reimb_id === NaN || amount === NaN || description === '' || reimb_type === ''){
			setErrorMessage('All areas must be filled in.')
		}else{
		try{
			let updatedUser = await updateReimb(reimb_id, amount, description, reimb_type);
			props.setNewReimb(updatedUser);
			} catch(e){
				setErrorMessage("Only Pending Reimbursements can be updated!!!!!")
			}
		}
	}

	return (
		!props.authUser || (props.authUser.role_name !== 'employee') ?
		<>
			<h1>You're not authorized to view this page</h1>
		</>

		:
		<>
			<div className = {classes.loginContainer}>
				<form className = {classes.loginForm}>
					<Typography align = 'center' variant = 'h4'>Update Reimbursements</Typography>
					<FormControl margin = 'normal' fullWidth>
						<InputLabel htmlFor = 'reimb_id'> Reimb Id</InputLabel>
						<Input
							onChange = {newReimbId}
							value = {reimb_id}
							id = "reimb_id" type = "number" 
							placeholder = "Enter the Id number you wish to update"/>
					</FormControl>
					<FormControl margin = 'normal' fullWidth>
						<InputLabel htmlFor = 'amount'> Amount</InputLabel>
						<Input
							onChange = {newAmount}
							value = {amount}
							id = "amount" type = "number" 
							placeholder = "Enter Amount"/>
					</FormControl>
					<FormControl margin = 'normal' fullWidth>
						<InputLabel htmlFor = 'Description'> Description</InputLabel>
						<Input
							onChange = {newDescription}
							value = {description}
							id = "description" type = "text" 
							placeholder = "Enter Amount"/>
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
					<Button onClick = {update} variant = "contained" color = "secondary" size = "medium">Submit Update</Button>
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

export default UpdateRimbComponent;