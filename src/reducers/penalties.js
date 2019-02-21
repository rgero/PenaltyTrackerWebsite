export default (state = {}, action) => {

    switch(action.type){
        case "QUERY":
            return {
                ...state,
                query: action.query
            }
        case "SET_PENALTIES":
            return {
                ...state,
                ...action.penalties
            }
        default:
            return state;
    }

};