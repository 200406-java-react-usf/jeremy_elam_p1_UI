
import * as React from 'react';
import HomeComponent, { IHomeProps } from '../HomeComponent';
import { Users } from '../../models/users';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

const props: IHomeProps = {
    authUser: {
        ers_user_id: 0,
        username: 'testun',
        password: 'testpw',
        first_name: 'testfn',
        last_name: 'testln',
        email: 'testemail',
        role_name: "admin"
    }
}

configure({adapter: new Adapter()});

describe('<HomeComponent />', () => {

    it('Renders without error', () => {
        // Shallowly render the ManagerReimbursementComponent with properties
        const wrapper = shallow(<HomeComponent {...props}/>)

        // Expect that the component should render and contain content
        expect(wrapper.exists()).toBeTruthy
    });
})
