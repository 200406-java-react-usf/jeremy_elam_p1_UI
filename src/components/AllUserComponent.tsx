import React, {useEffect, useState} from 'react'; 
import {Users} from '../models/users';
import {getUsers, deleteUser} from '../remote/user-service';
import { Link } from 'react-router-dom';


export interface IUserProp{
	authUser: Users;
	setThisUser: (user: Users) => void;
}


const UserComponent = (props: IUserProp) =>{	
	const [usersState, setUsersState] = useState([] as Users[]);

	let users: any[] = [];
	
	useEffect(()=>{
		let fetchData = async() =>{
			const response = await getUsers();
			
			for(let user of response){
				users.push(
					<tr key = {user.ers_user_id}>
						<td>{user.ers_user_id}</td>
						<td>{user.first_name}</td>
						<td>{user.last_name}</td>
						<td>{user.username}</td>
						<td>{user.email}</td>
						{
							user.role_name === 'admin'?
							<td>Admin</td>
							:
							user.role_name === 'finance' ?
							<td>Financial Manager</td>
							:
							<td>Employee</td>
						}
						<td><Link to={'/user/update'} onClick={ () => {props.setThisUser(new Users(user.id, user.username, user.password, user.firstName, user.lastName, user.email, user.roleId))}}>edit</Link>
                        </td>
                        <td><Link to={'/users'} onClick={
							async ()=>{
								await deleteUser(user.ers_user_id)
							}
						}>delete</Link>
                        </td>
					</tr>
				)
			}
			setUsersState(users);
		}
		fetchData();
	},[users]);

	return (
		!props.authUser || (props.authUser.role_name !== 'admin') ?
		<>
			<h1>You're not authorized to view this page</h1>
		</>

		:
		<>
			<h1>User Component</h1>
            
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>

                <tbody>
                    {usersState}
                </tbody>

            </table>

        </>
    );
}

export default UserComponent;