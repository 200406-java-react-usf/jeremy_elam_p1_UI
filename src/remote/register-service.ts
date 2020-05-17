import { projectOneClient } from './projectOne-client';


export async function registerUser(first_name: string, last_name: string, username: string, email: string, password: string ){
	let response = await projectOneClient.post('/users', {first_name, last_name, username, email, password});
	return await response.data;
}