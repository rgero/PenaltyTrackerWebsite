import React from 'react'
import {shallow} from 'enzyme'
import {PenaltyTracker} from '../../components/PenaltyTracker';

test("PenaltyTracker Rendering Test", ()=>{
    const wrapper = shallow(<PenaltyTracker/>);
    expect(wrapper).toMatchSnapshot();
})