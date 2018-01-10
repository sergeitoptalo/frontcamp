const runApp = () => {
    return {
        type: 'RUN_APP',
        appIsRunning: true
    }
}

const setChannelsConfiguration = (channels) => {
    return {
        type: 'SET_CHANNELS_CONFIGURATION',
        channels
    }
}

const getNews = (source) => {
    return {
        type: 'GET_NEWS',
        currentChannel: source
    }
}

const getNewsSuccess = (articles) => {
    return {
        type: 'GET_NEWS_SUCCESS',
        articles
    }
}

export { runApp, setChannelsConfiguration, getNews, getNewsSuccess };
