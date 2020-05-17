import React, {useState} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import {Link} from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Users} from '../models/users';


interface INavbarProps{
	authUser: Users;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	link: {
		textDecoration: 'none',
		color: 'white'
	}
	}),
);

const NavBarComponent = (props: INavbarProps)=>{

	const classes = useStyles();
	return (
		<>
				<AppBar position="fixed">
					<Toolbar>
						<IconButton edge = "start" className={classes.menuButton} color = "inherit" aria-lable = "menu">
							ERS
						</IconButton>
							<Typography color = "inherit" variant = "h6" className = {classes.title}>
								<Link to = "/home" color = "inherit" className = {classes.title}> Home </Link>
							</Typography>
							<Typography>
								<Link to = "/reimb" color = "inherit" className = {classes.menuButton}> Reimbursement</Link>
							</Typography>
							<Typography>
								<Link to = "/users" color = "inherit" className = {classes.menuButton}> testing</Link>
							</Typography>
							<Typography>
								<Link to = "/reimb/all" color = "inherit" className = {classes.menuButton}> All Reimbursement</Link>
							</Typography>
							
							<Typography>
								<Link to = "/user/update" color = "inherit" className = {classes.menuButton}> Update User</Link>
							</Typography>
							<Typography>
								<Link to="/login" color="inherit" className = {classes.link}>LOGIN </Link>
							</Typography>
							<Typography>
								<text> / </text>
							</Typography>
							<Typography>
								<Link to="/register" color="inherit" className = {classes.link}>REGISTER</Link>
							</Typography>
					</Toolbar>
				</AppBar>
		</>
		
	)
}

export default NavBarComponent;


