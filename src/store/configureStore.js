import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import queryReducer from '../reducers/query';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {
    
    // Store Creation with combine reducers
    //Combine Reducers
    // Combines reducers so you can have a single store.
    const store = createStore(
        combineReducers({
            query: queryReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;

}

