import React, {useEffect, useState} from 'react'; 
import {Reimbursements} from '../models/reimbs';
import {allReimb,getReimbByReimbID} from '../remote/reimb-service';
import { Users } from '../models/users';
import { Link } from 'react-router-dom';


interface IReimbProp{
	authUser: Users;
	setThisReimb: (reimb: Reimbursements) => void
}

const AllReimbComponent = (props: IReimbProp) =>{
	const [reimbState, setReimbState] = useState([] as Reimbursements[]);
	const [reimbStatus, setReimbStatus] = useState('all');
	const [reimbType, setReimbType] = useState('all');

	let updateStatus = (e: any) => {
        setReimbStatus(e.currentTarget.value);
    }
    let updateType = (e: any) => {
        setReimbType(e.currentTarget.value);
    }
	let reimbs: any[] = [];

	useEffect(()=>{
		let fetchData = async() =>{
			const response = await allReimb();

			for(let reimb of response){
				if((reimb.reimb_status == reimbStatus || reimbStatus == 'all') && (reimb.reimb_type == reimbType || reimbType == 'all')){

					reimbs.push(
						<tr>
							<td>{reimb.reimb_id}</td>
							<td>{reimb.amount}</td>
							<td>{reimb.submitted}</td>
							<td>{reimb.resolved}</td>
							<td>{reimb.description}</td>
							<td>{reimb.author_id}</td>
							<td>{reimb.resolver_id}</td>
							<td>{reimb.reimb_status}</td>
							<td>{reimb.reimb_type}</td>
							{
								reimb.reimbStatusId === 'pending' ?
									<td>Pending</td>
								:
								reimb.reimbStatusId === 'denied' ?
									<td>Denied</td>
								:
								reimb.reimbStatusId === 'approved' ?
									<td>Approved</td>
								:
									<td></td>
							}
							{
								reimb.reimbTypeId === 'lodging' ?
									<td>Lodging</td>
								:
								reimb.reimbTypeId === 'travel' ?
									<td>Travel</td>
								:
								reimb.reimbTypeId === 'food' ?
									<td>Food</td>
								:
									<td></td>
							}
							<td><Link to = {`/details-${reimb.reimb_id}`} onClick = {
									async () => {
										const response = await getReimbByReimbID(reimb.reimb_id);
									props.setThisReimb(response);
									}
								}>Details</Link></td>
						</tr>
					)
				}
			}
			setReimbState(reimbs);
		}
		fetchData();
	},[reimbStatus, reimbType]);

	return (
		!props.authUser || (props.authUser.role_name !== 'finance') ?
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
						<th>Amount</th>
						<th>Submitted</th>
						<th>Resolved</th>
						<th>Description</th>
						<th>Author Id</th>
						<th>Resolver Id</th>
						<th>Reimbursement Status</th>
						<th>Reimbursement Type</th>
						<select value = {reimbStatus} onChange = {updateStatus}>
                            <option value = {'all'}>All</option>
                            <option value = {"pending"}>Pending</option>
                            <option value = {"denied"}>Denied</option>
                            <option value = {"approved"}>Approved</option>
                        </select>
                        <th>Type</th>
                        <select value = {reimbType} onChange = {updateType}>
                            <option value = {'all'}>All</option>
                            <option value = {"lodging"}>Lodging</option>
                            <option value = {"travel"}>Travel</option>
                            <option value = {"food"}>Food</option>
                            <option value = {"other"}>Other</option>
                        </select>
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
