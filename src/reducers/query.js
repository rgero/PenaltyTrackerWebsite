export default (state = {}, action) => {

    switch(action.type){
        case "QUERY":
            return {
                ...state,
                query: action.query
            }
        default:
            return state;
    }

};