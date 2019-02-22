const defaultState = [];
export default (state = defaultState, action) => {

    switch(action.type){
        case "SET_PENALTIES":
            return action.penalties
        default:
            return state;
    }

};