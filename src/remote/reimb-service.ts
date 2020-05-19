import {projectOneClient} from './projectOne-client';

export async function newReimb(amount: number, description: string, author_id: number, reimb_type: number){
	let response =  await projectOneClient.post('/reimb',{amount, description, author_id, reimb_type})
	return await response.data;
}

export async function updateReimb(reimb_id: number, resolver_id: number, reimb_status: string){
	let response = await projectOneClient.put('/reimb',{reimb_id, resolver_id, reimb_status});
	console.log(response.data);
	return await response.data;
}

export async function allReimb(){
	let response = await projectOneClient.get('/reimb');
	console.log(response.data);
	return await response.data;
}

export async function pendingReimb(){
	let response = await projectOneClient.get('/reimb/status/pending');
	console.log(response.data);
	return await response.data
}

export async function approvedReimb(){
	let response = await projectOneClient.get('/reimb/status/approved');
	console.log(response.data);
	return await response.data
}

export async function deniedReimb(){
	let response = await projectOneClient.get('/reimb/status/denied');
	console.log(response.data);
	return await response.data
}

export async function getIdReimb(id: number){
	let response = await projectOneClient.get(`/reimb/user/${id}`);
	return await response.data;
}