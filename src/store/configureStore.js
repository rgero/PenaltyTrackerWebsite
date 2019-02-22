import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import penaltyReducer from '../reducers/penalties';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {
    
    const store = createStore(penaltyReducer,
       composeEnhancers(applyMiddleware(thunk))
    );

    return store;

}

