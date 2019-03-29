import React from 'react'
import {shallow} from 'enzyme'
import Header from '../../components/Header';

test("Header Test", ()=>{
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
})