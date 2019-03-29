import React from 'react'
import {shallow} from 'enzyme'
import SearchForm from '../../components/SearchForm';

import penalties from "../fixtures/penalty";

test("Search Form Rendering Test", ()=>{
    const wrapper = shallow(<SearchForm/>);
    expect(wrapper).toMatchSnapshot();
})

// Write the rest of these
// It is going to be a bit interesting since I'm not storing the search query. I don't care about it the moment the send it off to the API.
// This might change in the future.