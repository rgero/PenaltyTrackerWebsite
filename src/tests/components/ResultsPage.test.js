import React from 'react'
import {shallow} from 'enzyme'
import {ResultsPage} from '../../components/ResultsPage';

import penaltyData from '../fixtures/penalty';

test("ResultsPage Rendering Test - No Data Rendering", ()=>{
    const wrapper = shallow(<ResultsPage/>);
    expect(wrapper).toMatchSnapshot();
})

test("ResultsPage Rendering Test - Data Rendering", ()=>{
    const wrapper = shallow(<ResultsPage penalties={penaltyData}/>);
    expect(wrapper).toMatchSnapshot();
})

