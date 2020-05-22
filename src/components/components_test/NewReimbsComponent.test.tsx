import * as React from 'react';
import { shallow, mount, ReactWrapper, configure } from 'enzyme';
import ReimbComponent, { IReimbProps } from '../NewReimbsComponent';
import { FormControl, InputLabel, Input, Select } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { Users } from '../../models/users';

const props: IReimbProps = {
	authUser: {
        ers_user_id: 0,
        username: 'testun',
        password: 'testpw',
        first_name: 'testfn',
        last_name: 'testln',
        email: 'testemail',
        role_name: 'admin'
	},
	newReimb: {
		reimb_id: 1,
		amount: 399,
		submitted: 'submitted date',
		resolved: 'resolve date',
		description: 'something happened',
		author_id: 1,
		resolver_id: 3,
		reimb_status: 'pending',
		reimb_type: 'other'
	},
	setNewReimb:jest.fn()
}

configure({adapter: new Adapter()});

describe('ReimbComponent renders',()=>{
	const wrapper: ReactWrapper = mount(<BrowserRouter><ReimbComponent {...props}/></BrowserRouter>);

	test('Renders the component', () => {

        expect(wrapper.exists()).toBeTruthy();

    });
})