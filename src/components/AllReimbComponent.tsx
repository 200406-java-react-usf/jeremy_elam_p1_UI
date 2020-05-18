import React, {useEffect, useState} from 'react'; 
import {Reimbursements} from '../models/reimbs';
import {allReimb} from '../remote/reimb-service';
import { Users } from '../models/users';


interface IReimbProp{
	allReimb: Reimbursements;
	authUser: Users;
}

const AllReimbComponent = (props: IReimbProp) =>{
	const [reimbState, setReimbState] = useState([] as Reimbursements[]);

	let reimbs: any[] = [];

	useEffect(()=>{
		let fetchData = async() =>{
			const response = await allReimb();

			for(let reimb of response){
				reimbs.push(
					<tr key = {reimb.reimb_id}>
						<td>{reimb.reimb_id}</td>
						<td>{reimb.amount}</td>
						<td>{reimb.submitted}</td>
						<td>{reimb.resolved}</td>
						<td>{reimb.description}</td>
						<td>{reimb.author_id}</td>
						<td>{reimb.resolver_id}</td>
						<td>{reimb.reimb_status}</td>
						<td>{reimb.reimb_type}</td>
					</tr>
				)
			}
			setReimbState(reimbs);
		}
		fetchData();
	},[]);

	return (
		!props.authUser || (props.authUser.role_name !== 'finance') ?
		<>
			<h1>YOu're not authorized to view this page</h1>
		</>

		:

		<>
			<h1>Reimbursement Component</h1>
			<table>
				<thead>
					<tr>
						<th>Reimbursement ID</th>
						<th>Amount</th>
						<th>Submitted</th>
						<th>Resolved</th>
						<th>Description</th>
						<th>Author Id</th>
						<th>Resolver Id</th>
						<th>Reimbursement Status</th>
						<th>Reimbursement Type</th>
					</tr>
				</thead>
				<tbody>
					{reimbState}
				</tbody>
			</table>
		</>
	);
}

export default AllReimbComponent;
