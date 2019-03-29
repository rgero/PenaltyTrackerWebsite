import React from 'react'
import {shallow} from 'enzyme'
import SearchHeader from '../../components/SearchHeader';

test("SearchHeader Rendering Test", ()=>{
    const wrapper = shallow(<SearchHeader/>);
    expect(wrapper).toMatchSnapshot();
})