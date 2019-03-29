import React from 'react'
import {shallow} from 'enzyme'
import SearchForm from '../../components/SearchForm';

test("Search Form Rendering Test", ()=>{
    const wrapper = shallow(<SearchForm/>);
    expect(wrapper).toMatchSnapshot();
})

// Write the rest of these
// It is going to be a bit interesting since I'm not storing the search query. I don't care about it the moment the send it off to the API.
// This might change in the future.

/* Select Order
    Season
    Player Teams
    Opponent Teams
    Home/Away
*/

test("Changing the season", ()=> {
    const wrapper = shallow(<SearchForm/>);
    const selectObj = wrapper.find('select')
    expect(selectObj.length).toBe(4);
    const testElem = selectObj.at(0);
    testElem.simulate('change', {
        target: {value: "Regular_16_17"}
    })
    expect(wrapper.state('season')).toBe("Regular_16_17");
    testElem.simulate('change', {
        target: {value: "Regular_18_19"}
    })
    expect(wrapper.state('season')).toBe("Regular_18_19");
})

// test("Changing the player team", ()=> {
//     const wrapper = shallow(<SearchForm/>);
//     const selectObj = wrapper.find('select');
//     var selectTeams = ["ANA"];
//     expect(selectObj.length).toBe(4);
//     const testElem = selectObj.at(1);
//     testElem.simulate('change', {
//         target: {
//             key: "player",
//             options: [{ key: "ANA", id: "ANA", selected: true}]}
//     })
//     expect(wrapper.state('teams')).toBe(selectTeams);
// })