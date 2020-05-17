import {projectOneClient} from './projectOne-client';

export async function newReimb(amount: number, description: string, author_id: number, reimb_type: number){
	let response =  await projectOneClient.post('/reimb',{amount, description, author_id, reimb_type})
	return await response.data;
}

export async function allReimb(){
	let response = await projectOneClient.get('/reimb');
	console.log(response.data);
	return await response.data;
}