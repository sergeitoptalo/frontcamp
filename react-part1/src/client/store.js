import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import userReducer from './reducers/user';
import postReducer from './reducers/posts';

export default (initialState) => {
    const rootReducer = combineReducers({userReducer, postReducer});
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware)
    );

    return store;
};
