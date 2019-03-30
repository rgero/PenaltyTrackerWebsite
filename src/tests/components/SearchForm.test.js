import React from 'react'
import {shallow} from 'enzyme'
import moment from 'moment';
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
//     const testObj = testElem.find('option[value="ANA"]');
//     expect(testObj.length).toBe(1);
//     testElem.simulate('change', { value: [testObj] })
//     expect(wrapper.state('teams')).toBe(selectTeams);
// })

test("Changing the Home/Away status", ()=> {
    const wrapper = shallow(<SearchForm/>);
    const selectObj = wrapper.find('select')
    expect(selectObj.length).toBe(4);
    const testElem = selectObj.at(3);
    testElem.simulate('change', {
        target: {value: "either"}
    })
    expect(wrapper.state('location')).toBe("either");

    testElem.simulate('change', {
        target: {value: "home"}
    })
    expect(wrapper.state('location')).toBe("home");

    testElem.simulate('change', {
        target: {value: "away"}
    })
    expect(wrapper.state('location')).toBe("away");
})

test("Start Date Change", ()=> {
    const now = moment();
    const wrapper = shallow(<SearchForm/>);
    const datePickers = wrapper.find('withStyles(SingleDatePicker)');
    expect(datePickers.length).toBe(2);
    const testElem = datePickers.at(0);
    testElem.prop("onDateChange")(now);
    expect(wrapper.state('startDate')).toEqual(now);

    now.add(5, "days");
    testElem.prop("onDateChange")(now);
    expect(wrapper.state('startDate')).toEqual(now);
})

test("End Date Change", ()=> {
    const now = moment();
    const wrapper = shallow(<SearchForm/>);
    const datePickers = wrapper.find('withStyles(SingleDatePicker)');
    expect(datePickers.length).toBe(2);
    const testElem = datePickers.at(1);
    testElem.prop("onDateChange")(now);
    expect(wrapper.state('endDate')).toEqual(now);

    now.add(5, "days");
    testElem.prop("onDateChange")(now);
    expect(wrapper.state('endDate')).toEqual(now);
})

// Player is the first input, Penalty is the second input
test("Player Change", ()=>{
    const testString = "Patrice is a cool dude";
    const wrapper = shallow(<SearchForm/>);
    const testInputFields = wrapper.find('input')
    expect(testInputFields.length).toBe(2);
    const testObj = testInputFields.at(0);
    testObj.simulate('change', {
        target: {value: testString}
    })
    expect(wrapper.state("players")).toBe(testString);
})


test("Penalty Change", ()=> {
    const testString = "Fighting is a lot of money";
    const wrapper = shallow(<SearchForm/>);
    const testInputFields = wrapper.find('input')
    expect(testInputFields.length).toBe(2);
    const testObj = testInputFields.at(1);
    testObj.simulate('change', {
        target: {value: testString}
    })
    expect(wrapper.state("penalty")).toBe(testString);
})