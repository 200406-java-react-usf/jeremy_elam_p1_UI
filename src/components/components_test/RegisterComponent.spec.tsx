import * as React from 'react';
import { shallow, mount, ReactWrapper, configure } from 'enzyme';
import RegisterComponent, { IRegisterProps } from '../RegisterComponent';
import { FormControl, InputLabel, Input, Select } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { Users } from '../../models/users';

const props: IRegisterProps = {
    authUser: {
        ers_user_id: 0,
        username: 'testun',
        password: 'testpw',
        first_name: 'testfn',
        last_name: 'testln',
        email: 'testemail',
        role_name: 'admin'
	},
	newUser:{ers_user_id: 0,
        username: 'testun',
        password: 'testpw',
        first_name: 'testfn',
        last_name: 'testln',
        email: 'testemail',
		role_name: 'admin'},
		setNewUser: jest.fn()
}

configure({adapter: new Adapter()});

describe('RegisterComponent renders', () => {

    const wrapper: ReactWrapper = mount(<BrowserRouter><RegisterComponent {...props}/></BrowserRouter>);

    test('renders 6 FormControls Formcontrols', () => {

        expect(wrapper.find(FormControl)).toHaveLength(6);

    });

    test('renders 5 InputLabels', () => {

        expect(wrapper.find(InputLabel)).toHaveLength(5);

    });

    test('renders 5 Inputs', () => {

        expect(wrapper.find(Input)).toHaveLength(5);

    });


});

