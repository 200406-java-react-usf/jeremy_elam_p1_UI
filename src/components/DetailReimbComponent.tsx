
import React, { SyntheticEvent } from 'react';
import {Reimbursements} from '../models/reimbs';
import {Users} from '../models/users';
import { Button } from '@material-ui/core';
import { projectOneClient } from '../remote/projectOne-client';



export interface IReimbDetailsProps{
    authUser: Users;
    thisReimb: Reimbursements;
}

function ReimbDetailsComponent(props: IReimbDetailsProps){

    let approveReimb = (e: SyntheticEvent) => {
        projectOneClient.put('/reimb', {
			reimb_id: props.thisReimb.reimb_id,
            resolver_id: props.authUser.ers_user_id,
            reimb_status: 'approved',
        });
    }
    let denyReimb = (e: SyntheticEvent) => {
        projectOneClient.put('/reimb', {
			reimb_id: props.thisReimb.reimb_id,
			resolver_id: props.authUser.ers_user_id,
			reimb_status: 'denied',
        });
    }
    return(
        !props.authUser ?
            <h1>Please login to view this page</h1>
        :
        <>
        <table>
            <thead><th><tr>{props.thisReimb.reimb_id} Reimbursements Details</tr></th></thead>
            <tbody>
                <tr><td>ID:</td></tr>
                <tr><td>{props.thisReimb.reimb_id}</td></tr>
                <tr><td>Amount:</td></tr>
                <tr><td>{props.thisReimb.amount}</td></tr>
                <tr><td>Submitted:</td></tr>
                <tr><td>{props.thisReimb.submitted}</td></tr>
                <tr><td>Resolved</td></tr>
                <tr><td>{props.thisReimb.resolved}</td></tr>
                <tr><td>Description:</td></tr>
                <tr><td>{props.thisReimb.description}</td></tr>
                <tr><td>Author:</td></tr>
                <tr><td>{props.authUser.ers_user_id}</td></tr>
                <tr><td>Resolver:</td></tr>
                <tr><td>{props.thisReimb.resolver_id}</td></tr>
                <tr><td>Status:</td></tr>
                {
                    props.thisReimb.reimb_status === 'approved' ?
                        <tr><td>Pending</td></tr>
                    :
                    props.thisReimb.reimb_status === 'denied'?
                        <tr><td>Denied</td></tr>
                    :
                    props.thisReimb.reimb_status === 'pending' ?
                        <tr><td>Approved</td></tr>
                    :
                        <tr><td>Unknown</td></tr>
                }
                <tr><td>Type:</td></tr>
                {
                    props.thisReimb.reimb_type === 'lodging' ?
                        <tr><td>Lodging</td></tr>
                    :
                    props.thisReimb.reimb_type === 'travel' ?
                        <tr><td>Lodging</td></tr>
                    :
                    props.thisReimb.reimb_type === 'food' ?
                        <tr><td>Lodging</td></tr>
                    :
                        <tr><td>Other</td></tr>
                }
                
            </tbody>
        </table>
        {
            !props.thisReimb.resolved && props.authUser.role_name === 'finance'?
            <>
                <Button onClick = {approveReimb} variant = "contained" color = "primary" size = "medium">Approve</Button>
                <Button onClick = {denyReimb} variant = "contained" color = "primary" size = "medium">Deny</Button>
            </>
        :
        <>
        </>
        
        }
        </>
    );

}

export default ReimbDetailsComponent;
