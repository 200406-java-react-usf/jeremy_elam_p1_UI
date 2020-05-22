import * as React from 'react';
import { shallow, mount, ReactWrapper,configure } from 'enzyme';
import LoginComponent, { ILoginProps } from '../LoginComponent';
import { FormControl, InputLabel, Input, Select, Button } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { Users } from '../../models/users';
import Adapter from 'enzyme-adapter-react-16';

const props: ILoginProps = {
    //@ts-ignore
    authUser: null as User,
    setAuthUser: jest.fn()
}


configure({adapter: new Adapter()});
describe('RegisterComponent renders', () => {

    const wrapper: ReactWrapper = mount(<BrowserRouter><LoginComponent {...props}/></BrowserRouter>);

    test('renders 2 FormControls Formcontrols', () => {

        expect(wrapper.find(FormControl)).toHaveLength(2);

    });

    test('renders 1 Select', () => {

        expect(wrapper.find(Button)).toHaveLength(1);

    });

    test('renders 2 InputLabels', () => {

        expect(wrapper.find(InputLabel)).toHaveLength(2);

    });

    test('renders 2 Input', () => {

        expect(wrapper.find(Input)).toHaveLength(2);

    });

});

