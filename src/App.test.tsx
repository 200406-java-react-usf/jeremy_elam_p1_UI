import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {mount, shallow} from 'enzyme';
import NavbarComponent from './components/NavbarComponent';

describe('<App />', ()=>{

  test('app renders', ()=>{
    const app = render (<App />);

    expect(app).toBeTruthy();
  });

  // test('Renders NavBarComponent', ()=>{
  //   const wrapper = mount(<App />);
  //   console.log(wrapper)
  //   expect(wrapper.find(NavbarComponent)).toHaveLength(1);
  // })
})

