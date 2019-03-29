import React from 'react'
import {shallow} from 'enzyme'
import {PenaltyList} from '../../components/PenaltyList';

import penaltyData from '../fixtures/penalty';

test("PenaltyList Rendering Test - No Data Rendering", ()=>{
    const wrapper = shallow(<PenaltyList/>);
    expect(wrapper).toMatchSnapshot();
})

test("PenaltyList Rendering Test - Data Rendering", ()=>{
    const wrapper = shallow(<PenaltyList penalties={penaltyData}/>);
    expect(wrapper).toMatchSnapshot();
})
