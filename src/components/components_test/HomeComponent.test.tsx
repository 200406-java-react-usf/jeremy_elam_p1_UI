import * as React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import HomeComponent, {IHomeProps} from '../HomeComponent';
import { Users } from '../../models/users';

const props: IHomeProps = {

    authUser: {
        ers_user_id: 1,
        username: 'lazyspell',
        password: 'password',
        first_name: 'jeremy',
        last_name: 'elam',
        email: 'jeremyelam@gmail.com',
        role_name: 'admin'
    }

}

const homeComponent = <HomeComponent authUser = {props.authUser}/>;

describe('Render home h1', () => {

    const wrapper = mount(<HomeComponent {...props}/>);

    test('h1 renders', () => {

        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find('h1')).toHaveLength(1);

    });

});