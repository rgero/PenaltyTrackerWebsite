import {generateURL} from '../helpers/QueryParser';

export const setPenalties = (penalties) => ({
    type: "SET_PENALTIES",
    penalties
})

export const executeQuery = (query) => {
    var url = generateURL(query);
    return (dispatch, getState) => {
        fetch(url)
            .then(response => response.json())
            .then( (data) => {
                dispatch(setPenalties(data)) } )
    }
}