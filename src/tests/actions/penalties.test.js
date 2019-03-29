import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {setPenalties} from '../../actions/penalties';
import penaltyList from '../fixtures/penalty'

const createMockStore = configureMockStore([thunk]);

test('Testing setPenalties reducer', ()=> {
    let penalty = penaltyList[0];
    const store = createMockStore({});
    store.dispatch(setPenalties(penalty));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: "SET_PENALTIES",
        penalties: penalty
    });
})