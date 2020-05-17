import {projectOneClient} from './projectOne-client';

export async function authenticate(username: string, password: string){
	let response = await projectOneClient.post('./auth',{username, password});
	return await response.data;
}

export async function logout(){
	let response = await projectOneClient.get('/auth');
	return await response;
}