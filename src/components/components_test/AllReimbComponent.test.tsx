import * as React from 'react';
import { shallow, mount, ReactWrapper, configure } from 'enzyme';
import AllReimbComponent, { IReimbProp } from '../AllReimbComponent';
import { FormControl, InputLabel, Input, Select } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { Users } from '../../models/users';

const props: IReimbProp = {
	authUser: {
        ers_user_id: 0,
        username: 'testun',
        password: 'testpw',
        first_name: 'testfn',
        last_name: 'testln',
        email: 'testemail',
        role_name: 'admin'
	},
	setThisReimb:  jest.fn()
}

configure({adapter: new Adapter()});

describe('AllReimbComponent renders',()=>{
	const wrapper: ReactWrapper = mount(<BrowserRouter><AllReimbComponent {...props}/></BrowserRouter>);

	test('Renders the component', () => {

        expect(wrapper.exists()).toBeTruthy();

    });
})