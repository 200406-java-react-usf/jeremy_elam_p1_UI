import {projectOneClient} from './projectOne-client';
import { logout } from './auth-service';


export async function getUsers(){
	let response = await projectOneClient.get('/users');
	return await response.data;
}

export async function getByRole(role:string){
	let response = await projectOneClient.get(`/users/role/${role}`);
	return await response.data;
}

export async function updateUser(ers_user_id: number,username:string, password: string, first_name: string, last_name: string, email: string, role_name: string){
	let response = await projectOneClient.put('/users',{ers_user_id, username, password, first_name,last_name, email, role_name});
	return await response.data;

}

export async function getIdUser(id: number){
	let response = await projectOneClient.get(`/users/${id}`);
	return await response.data;
}

export async function deleteUser(id: number){
	let response = await projectOneClient.delete(`/users`,{data: {ers_user_id:id}});
	return await response.data;
}
