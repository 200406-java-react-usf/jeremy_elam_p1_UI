import {projectOneClient} from './projectOne-client';

export async function authenticate(username: string, password: string){
	let response = await projectOneClient.post('./auth',{username, password});
	return await response.data;
}