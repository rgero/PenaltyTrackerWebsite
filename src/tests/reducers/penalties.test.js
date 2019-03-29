import penaltyReducer from '../../reducers/penalties';
import PenaltyList from '../fixtures/penalty';

test("Testing the Penalty Reducer", ()=> {
    let penalties = PenaltyList[0];
    let action = {
        type: "SET_PENALTIES",
        penalties
    }
    const state = penaltyReducer([], action);
    expect(state).toBe(action.penalties);
})