import React, {useState, useEffect} from 'react';
import {Reimbursements} from '../models/reimbs';
import {Users} from '../models/users';
import { getIdReimb ,getReimbByReimbID} from '../remote/reimb-service';
import { Link } from 'react-router-dom';

export interface IReimbProp{
	setThisReimb: (reimb: Reimbursements) => void
	authUser: Users;
}
const ReimbIdComponent = (props: IReimbProp) =>{
	const [reimbState, setReimbState] = useState([] as Reimbursements[]);
	const users = props.authUser.ers_user_id
	let reimbs: any[] = [];

	useEffect(() =>{
		let fetchData = async() =>{
			//@ts-ignore
			const response = await getIdReimb(users);

			for(let reimb of response){
				reimbs.push(
					<tr key = {reimb.reimb_id}>
						<td>{reimb.reimb_id}</td>
						<br></br>
						<td>${reimb.amount}</td>
						<br></br>
						<td>{reimb.submitted}</td>
						<br></br>
						<td>{reimb.reimb_type}</td>
						<br></br>
						<td>{reimb.reimb_status}</td>
						<td><Link to = {`/details-${reimb.reimb_id}`} onClick = {
                                async () => {
									const response = await getReimbByReimbID(reimb.reimb_id);
									props.setThisReimb(response);
                                }
                            }>Details</Link></td>
						<td><Link to = {'/reimb/update'}>Update</Link></td>
					</tr>
				)
			}
			setReimbState(reimbs);
		}
		fetchData();
	},[]);
	return (
		!props.authUser || (props.authUser.role_name !== 'employee') ?
		<>
			<h1>You're not authorized to view this page</h1>
		</>
		:
		<>
			<h1>Reimbursement Component</h1>
			<table>
				<thead>
					<tr>
						<th>Reimbursement ID</th>
						<br></br>
						<th>Amount</th>
						<br></br>
						<th>Submitted</th>
						<br></br>
						<th>Reimbursement Type</th>
						<br></br>
						<th>Reimbursement Status</th>
					</tr>
				</thead>
				<tbody>
					{reimbState}
				</tbody>
			</table>
		</>
	);

}

export default ReimbIdComponent;