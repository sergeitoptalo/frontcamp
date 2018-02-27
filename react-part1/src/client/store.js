import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import userState from './reducers/user';
import postsState from './reducers/posts';

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState) => {
    const rootReducer = combineReducers({userState, postsState});
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunkMiddleware))
    );

    return store;
};
