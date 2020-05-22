import React from 'react';
import { render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import {mount, configure} from 'enzyme';
import NavbarComponent from './components/NavbarComponent';

configure({adapter: new Adapter()});
describe('<App />', ()=>{

  test('app renders', ()=>{
    const app = render (<App />);

    expect(app).toBeTruthy();
  });

  test('Renders NavBarComponent', ()=>{
    const wrapper = mount(<App />);
    console.log(wrapper)
    expect(wrapper.find(NavbarComponent)).toHaveLength(1);
  })
})

