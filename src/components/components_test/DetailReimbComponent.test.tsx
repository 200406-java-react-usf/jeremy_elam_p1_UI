import * as React from 'react';
import { shallow, mount, ReactWrapper, configure } from 'enzyme';
import ReimbDetailComponent, {IReimbDetailsProps} from '../DetailReimbComponent';
import { FormControl, InputLabel, Input, Select } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { Reimbursements } from '../../models/reimbs';
import { Users } from '../../models/users';



const props: IReimbDetailsProps = {
	authUser: {
		ers_user_id: 0,
        username: 'testun',
        password: 'testpw',
        first_name: 'testfn',
        last_name: 'testln',
        email: 'testemail',
        role_name: 'admin'
	},
	thisReimb: {
		reimb_id: 1,
		amount: 399,
		submitted: 'submitted date',
		resolved: 'resolve date',
		description: 'something happened',
		author_id: 1,
		resolver_id: 3,
		reimb_status: 'pending',
		reimb_type: 'other'

	}

}
configure({adapter: new Adapter()});

describe('DetailReimbCOmponent renders', ()=>{
	const wrapper: ReactWrapper = mount(<BrowserRouter><ReimbDetailComponent {...props}/></BrowserRouter>);
	test('renders 6 FormControls Formcontrols', () => {

        expect(wrapper.find("table")).toHaveLength(1);
	});
	
	test('renders 6 FormControls Formcontrols', () => {

        expect(wrapper.find("tr")).toHaveLength(19);
	});
	
	test('renders 6 FormControls Formcontrols', () => {

        expect(wrapper.find("td")).toHaveLength(18);
	});
	

})

