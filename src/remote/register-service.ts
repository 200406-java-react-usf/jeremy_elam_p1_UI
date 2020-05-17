import { projectOneClient } from './projectOne-client';


export async function registerUser(first_name: string, last_name: string, username: string, email: string, password: string, role_name: string ){
	let response = await projectOneClient.post('/users', {first_name, last_name, username, email, password, role_name});
	return await response.data;
}