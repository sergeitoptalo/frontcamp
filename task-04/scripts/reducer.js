const newsApp = (state = {'appIsRunning': false }, action) => {
    switch (action.type) {
        case 'RUN_APP': {
            state['appIsRunning'] = true;
            return state;
        }
        case 'SET_CONFIGURATION': {
            state['channels'] = action.configuration;
            return state;
        }
        default:
            return state;
    }
}

export { newsApp };
