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

import {Reimbursements} from '../models/reimbs';
import {newReimb} from '../remote/reimb-service';

interface IReimbProps{
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
	const [reimb_id, setReimbId] = useState(NaN);
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

	let newReimbId = (e: any) =>{
		setReimbId(e.currentTarget.value);
	}

	let reimb = async () =>{
		if(amount === NaN || description === '' || author_id === NaN ||reimb_id === NaN){
			setErrorMessage('All categories are required to submit a reimbursement')
		}

		let newReimbursement = await newReimb(amount, description, author_id,reimb_id )
		props.setNewReimb(newReimbursement);
		
	}


}
