import {projectOneClient} from './projectOne-client';

export async function newReimb(amount: number, description: string, author_id: number, reimb_type: number){
	let response =  await projectOneClient.post('/reimb',{amount, description, author_id, reimb_type})
	return await response.data;
}

export async function updateStatus(reimb_id: number, resolver_id: number, reimb_status: string){
	let response = await projectOneClient.put('/reimb',{reimb_id, resolver_id, reimb_status});
	return await response.data;
}

export async function updateReimb(reimb_id: number,amount: number, description: string, reimb_type: string){
	let response = await projectOneClient.put('/reimb/update',{reimb_id, amount, description, reimb_type});
	return await response.data;
}

export async function allReimb(){
	let response = await projectOneClient.get('/reimb');
	return await response.data;
}

export async function pendingReimb(){
	let response = await projectOneClient.get('/reimb/status/pending');
	return await response.data
}

export async function approvedReimb(){
	let response = await projectOneClient.get('/reimb/status/approved');
	return await response.data
}

export async function deniedReimb(){
	let response = await projectOneClient.get('/reimb/status/denied');
	return await response.data
}

export async function getIdReimb(id: number){
	let response = await projectOneClient.get(`/reimb/user/${id}`);
	return await response.data;
}

export async function getReimbByReimbID(id: number){
	let response = await projectOneClient.get(`/reimb/${id}`);
	return await response.data;
}

