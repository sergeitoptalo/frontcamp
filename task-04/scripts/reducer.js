const newsApp = (state = { 'appIsRunning': false }, action) => {
    switch (action.type) {
        case 'RUN_APP': {
            return Object.assign({}, state, { appIsRunning: true });
        }

        case 'SET_CONFIGURATION': {
            return Object.assign({}, state, { channels: action.configuration });
        }

        case 'GET_NEWS': {
            state['currentChannel'] = action.source;
            return Object.assign({}, state, { currentChannel: action.source });
        }

        case 'GET_NEWS_SUCCESS': {
            delete state['currentChannel'];
            return Object.assign({}, state, { articles: action.articles });
        }

        default:
            return Object.assign({}, state);
    }
}

export { newsApp };
