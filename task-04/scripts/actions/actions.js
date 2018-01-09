const runApp = () => {
    return {
        type: 'RUN_APP',
        payload: {
            appIsRunning: true
        }
    }
}

const setChannelsConfiguration = (channels) => {
    return {
        type: 'SET_CHANNELS_CONFIGURATION',
        payload: {
            channels
        }
    }
}

const getNews = (source) => {
    return {
        type: 'GET_NEWS',
        payload: {
            currentChannel: source
        }
    }
}

const getNewsSuccess = (articles) => {
    return {
        type: 'GET_NEWS_SUCCESS',
        payload: {
            articles
        }
    }
}

export { runApp, setChannelsConfiguration, getNews, getNewsSuccess };
