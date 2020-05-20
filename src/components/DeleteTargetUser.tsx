import React,{useState} from 'react';

import { 
    Typography, 
    FormControl, 
    InputLabel, 
    Input,
    Button, 
    makeStyles 
} from '@material-ui/core';

import {deleteUser} from '../remote/user-service';
import {Users} from '../models/users';
import {Redirect} from 'react-router-dom';


interface IDeleteProps{
    authUser: Users;
    setDeleteUser: (user: Users) => void;
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

function DeleteComponent(props: IDeleteProps){
    const classes = useStyles();
    
    const [userId, setUserId] = useState(NaN);
    const [errorMessage, setErrorMessage] = useState('');

    let removeId = (e: any) =>{
        setUserId(e.currentTarget.value);
    }

    let deleteId = async () =>{
        if(userId === NaN)
            setErrorMessage("Need to provide user Id");

        let deletedUser = await deleteUser(userId);
        props.setDeleteUser(deletedUser);
    }

    return (
        !props.authUser || (props.authUser.role_name !== 'admin') ?
		<>
			<h1>You're not authorized to view this page</h1>
		</>

		:
        <>
            <div className = {classes.loginContainer}>
                <form className = {classes.loginForm}>
                    <Typography align = 'center' variant = 'h4'> Delete User</Typography>
                    <FormControl margin = 'normal' fullWidth>
                        <InputLabel htmlFor = 'delete_id'>Delete User</InputLabel>
                        <Input 
                            onChange = {removeId}
                            value = {userId}
                            id = "delete_id" type = "number"
                            placeholder = "Delete User Id" />

                    </FormControl>
                    <br/>
                    <Button onClick = {deleteId} variant = "contained" color = "secondary" size = "medium">Delete User</Button>
                    <br/>
                </form>
            </div>
        </>
    )
}

export default DeleteComponent;