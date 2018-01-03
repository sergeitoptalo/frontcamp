const newsApp = (state = { 'appIsRunning': false }, action) => {
    switch (action.type) {
        case 'RUN_APP': {
            state['appIsRunning'] = true;
            return state;
        }
        case 'SET_CONFIGURATION': {
            state['channels'] = action.configuration;
            return state;
        }
        case 'GET_NEWS': {
            state['currentChannel'] = action.source;
            return state;
        }
        case 'GET_NEWS_SUCCESS': {
            state['articles'] = action.articles;
            delete state['currentChannel'];
            return state;
        }
        default:
            return state;
    }
}

export { newsApp };
