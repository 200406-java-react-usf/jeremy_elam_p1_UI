import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	ListItem,
	Theme,
	createStyles,
	makeStyles,
	List,
	ListItemText
} from '@material-ui/core';
import {Users} from '../models/users';
import { projectOneClient } from '../remote/projectOne-client';


interface INavbarProps{
	authUser: Users;
	setAuthUser: (user: Users) => void;
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

    async function logout(){

        await projectOneClient.get('/auth');
        //@ts-ignore
        props.setAuthUser(null as User);
	}
	return (
		<>
			<List component = "nav">
				<ListItem component = "div">
					<Typography color = "inherit" variant = "h5">ERS</Typography>
					{
						!props.authUser ? 
						<ListItemText inset>
							<Typography color = "inherit" variant = "h6">
								<Link to = "/login" className = {classes.link} >Login</Link>
							</Typography>
						</ListItemText>

						:
						props.authUser.role_name === 'admin' ?
							<>
								<ListItemText inset>
									<Typography color = "inherit" variant = "h6">
										<Link to = "/home" className = {classes.link}>Home</Link>
									</Typography>
								</ListItemText>

								<ListItemText inset>
									<Typography color = "inherit" variant = "h6">
										<Link to = "/register" className = {classes.link}>Register New User</Link>
									</Typography>
								</ListItemText>

								<ListItemText inset>
									<Typography color = "inherit" variant = "h6">
										<Link to = "/users" className = {classes.link}>All Users</Link>
									</Typography>
								</ListItemText>

								<ListItemText inset>
									<Typography color = "inherit" variant = "h6">
										<Link to = "/user/update" className = {classes.link}>Update User</Link>
									</Typography>
								</ListItemText>

								<ListItemText inset>
                                    <Typography color = "inherit" variant = "h6">
                                        <Link to = '' onClick = {logout} className = {classes.menuButton}>Logout</Link>
                                    </Typography>
                                </ListItemText> 
							</>
						:
						props.authUser.role_name === 'finance' ?
							<>
								<ListItemText inset>
									<Typography color = "inherit" variant = "h6">
										<Link to = "/home" className = {classes.link}>Home</Link>
									</Typography>
								</ListItemText>

								<ListItemText inset>
									<Typography color = "inherit" variant = "h6">
										<Link to = "/reimb/all" className = {classes.link}>All Reimbursements</Link>
									</Typography>
								</ListItemText>
								
								<ListItemText inset>
									<Typography color = "inherit" variant = "h6">
										<Link to = "/reimb/status/approved" className = {classes.link}>Approved Reimbursements</Link>
									</Typography>
								</ListItemText>
								<ListItemText inset>
									<Typography color = "inherit" variant = "h6">
										<Link to = "/reimb/status/denied" className = {classes.link}>Denied Reimbursements</Link>
									</Typography>
								</ListItemText>
								<ListItemText inset>
									<Typography color = "inherit" variant = "h6">
										<Link to = "/reimb/status/pending" className = {classes.link}>Pending Reimbursements</Link>
									</Typography>
								</ListItemText>
								<ListItemText inset>
									<Typography color = "inherit" variant = "h6">
										<Link to = "/reimb/status/change" className = {classes.link}>Approve or Deny Reimbursement</Link>
									</Typography>
								</ListItemText>
								
								

								<ListItemText inset>
                                    <Typography color = "inherit" variant = "h6">
                                        <Link to = '' onClick = {logout} className = {classes.link}>Logout</Link>
                                    </Typography>
                                </ListItemText> 
							</>
							:
							<>
							<ListItemText inset>
									<Typography color = "inherit" variant = "h6">
										<Link to = "/home" className = {classes.link}>Home</Link>
									</Typography>
							</ListItemText>

							<ListItemText inset>
									<Typography color = "inherit" variant = "h6">
										<Link to = "/reimb" className = {classes.link}>New Reimbursement</Link>
									</Typography>
							</ListItemText>

							<ListItemText inset>
                                    <Typography color = "inherit" variant = "h6">
                                        <Link to = '' onClick = {logout} className = {classes.link}>Logout</Link>
                                    </Typography>
                                </ListItemText> 
							</>
 
							
					}
				</ListItem>
			</List>
		</>
		
	)
}

export default NavBarComponent;


