export default (state = {}, action) => {

    switch(action.type){
        case "SET_PENALTIES":
            return {
                ...state,
                penalties: action.penalties
            }
        default:
            return state;
    }

};