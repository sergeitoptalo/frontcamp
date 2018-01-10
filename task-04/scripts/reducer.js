const newsApp = (state = { appIsRunning: false }, action) => {
    switch (action.type) {
        case 'RUN_APP': {
            return { ...state, appIsRunning: action.appIsRunning };
        }

        case 'SET_CHANNELS_CONFIGURATION': {
            return { ...state, channels: action.channels };
        }

        case 'GET_NEWS': {
            return { ...state, currentChannel: action.currentChannel };
        }

        case 'GET_NEWS_SUCCESS': {
            delete state['currentChannel'];
            return { ...state, articles: action.articles };
        }

        default:
            return state;
    }
}

export { newsApp };
