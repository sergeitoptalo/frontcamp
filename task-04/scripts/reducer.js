const newsApp = (state = { 'appIsRunning': false }, action) => {
    switch (action.type) {
        case 'RUN_APP': {
            return Object.assign({}, state, action.payload);
        }

        case 'SET_CHANNELS_CONFIGURATION': {
            return Object.assign({}, state, action.payload);
        }

        case 'GET_NEWS': {
            return Object.assign({}, state, action.payload);
        }

        case 'GET_NEWS_SUCCESS': {
            delete state['currentChannel'];
            return Object.assign({}, state, action.payload);
        }

        default:
            return Object.assign({}, state);
    }
}

export { newsApp };
